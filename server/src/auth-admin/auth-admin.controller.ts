import {
	Controller,
	Post,
	Body,
	Res,
	UseInterceptors,
	HttpCode,
	HttpStatus,
	Get,
	UseGuards,
	Inject,
	Logger,
	Request,
} from '@nestjs/common'
import { RegisterAuthDto } from './dtos/register-auth.dto'
import { LoginAuthDto } from './dtos/login-auth.dto'
import { Response } from 'express' // Import the Request type from 'express'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { PublicUserDto } from '../user/dtos/public-user.dto'
import { Serialize } from '../interceptors/serialize'
import { JwtAuthAdminGuard } from '../guards/jwt-auth-admin.guard'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { AuthAdminService } from './auth-admin.service'

@Controller('auth-admin')
export class AuthAdminController {
	constructor(
		private readonly authService: AuthAdminService,
		@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
	) {}

	@Post('register')
	@UseInterceptors(AnyFilesInterceptor())
	@HttpCode(HttpStatus.CREATED)
	async register(@Body() registerAuthDto: RegisterAuthDto) {
		await this.authService.register(registerAuthDto)
	}

	@Post('login')
	@UseInterceptors(AnyFilesInterceptor())
	@HttpCode(HttpStatus.OK)
	@Serialize(PublicUserDto)
	async login(@Body() loginAuthDto: LoginAuthDto, @Res() res: Response) {
		const result = await this.authService.login(loginAuthDto, res)
		// this.logger.log('info', 'Admin Login', { context: AuthAdminController.name, data: result.data })
		return res.status(HttpStatus.OK).json({ success: true, message: null, data: result })
	}

	@Post('logout')
	async logout(@Res() res: Response) {
		await this.authService.logout(res)
		return res.status(HttpStatus.OK).json({ success: true, message: null })
	}
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	async refresh(@Res() res: Response, @Request() req: any) {
		const refreshToken = req.cookies['AdminRefreshToken']
		await this.authService.refresh(refreshToken, res) // Assuming refresh sets cookies
		return res.status(HttpStatus.OK).json({ success: true, message: 'refresh token success' })
	}

	@Get('verify')
	@UseGuards(JwtAuthAdminGuard)
	@HttpCode(HttpStatus.OK)
	async verifyAuth(@Request() req: any) {
		const user = req.user

		// Customize your response message and data
		return {
			message: 'Admin authenticated successfully',
			data: { user }, // Example data
		}
	}
}
