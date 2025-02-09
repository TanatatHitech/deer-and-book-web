import {
	Controller,
	Get,
	Body,
	Patch,
	Req,
	UseGuards,
	UseInterceptors,
	UsePipes,
	ValidationPipe,
	UploadedFile,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UpdateUserDto } from './dtos/update-user.dto'
import { Request } from 'express'
import { JwtAuthUserGuard } from '../guards/jwt-auth-user.guard'
import { Serialize } from '../interceptors/serialize'
import { UserProfileDto } from './dtos/user-profile.dto'
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { UpdateUserPasswordDto } from './dtos/update-user-password.dto'
import { Transactional } from 'typeorm-transactional'
import { ConfigService } from '@nestjs/config'
import { uploadFileToGCS } from 'utils/cs-file-upload.util'
import { Require2FACodeGuard } from 'guards/require-2fa-code.guard'

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService,
	) {}

	@UseGuards(JwtAuthUserGuard)
	@Get('profile')
	@Serialize(UserProfileDto)
	async getProfile(@Req() req: Request) {
		const frontendUrl = this.configService.get('FRONTEND_URL')
		const userUuid = req.user['uuid']
		const user = await this.userService.findByUuid(userUuid)

		return user
	}

	@UseGuards(JwtAuthUserGuard)
	@UseInterceptors(AnyFilesInterceptor()) // must have for use form-data
	@Patch('profile')
	@Transactional()
	@Serialize(UserProfileDto)
	@UsePipes(new ValidationPipe({ transform: true, whitelist: true })) // must have for clean unused fields from request
	async updateProfile(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
		const userUuid = req.user['uuid']
		const updatedUser = await this.userService.update(userUuid, updateUserDto)
		return updatedUser
	}

	@UseInterceptors(AnyFilesInterceptor())
	@UseGuards(JwtAuthUserGuard, Require2FACodeGuard)
	@Patch('change-password')
	@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
	async changePassword(
		@Req() req: Request,
		@Body() updateUserPasswordDto: UpdateUserPasswordDto,
	) {
		const userUuid = req.user['uuid']
		return await this.userService.changePassword(
			userUuid,
			updateUserPasswordDto.password,
			updateUserPasswordDto.newPassword,
		)
	}

	@Patch('profile/avatar')
	@UseGuards(JwtAuthUserGuard)
	@UseInterceptors(FileInterceptor('avatar'))
	async updateAvatar(@Req() req: any, @UploadedFile() file: any) {
		const userUuid = req.user.uuid

		try {
			// Use the utility function to upload the file and get the public URL
			const publicUrl = await uploadFileToGCS(file, 'avatars')

			// Update the user's avatar in the database
			return await this.userService.updateAvatar(userUuid, publicUrl)
		} catch (error) {
			throw new Error('Error uploading avatar')
		}
	}
	// @Get('avatars/:filename')
	// async getAvatar(@Param('filename') filename: string, @Res() res: Response) {
	// 	const filePath = join(__dirname, '..', '..', '..', 'uploads', 'avatars', filename)
	// 	if (!existsSync(filePath)) {
	// 		return res.status(404).json({ message: 'File not found' })
	// 	}
	// 	const fileStream = createReadStream(filePath)
	// 	fileStream.pipe(res)
	// }
}
