import {
	Body,
	Controller,
	Post,
	Req,
	UseGuards,
	BadRequestException,
	UseInterceptors,
	HttpCode,
	HttpStatus,
} from '@nestjs/common'
import { TwoFactorAuthService } from './two-factor-auth.service'
import { UserService } from '../user/user.service'
import { AuthUserService } from './auth-user.service'
import { JwtAuthUserGuard } from '../guards/jwt-auth-user.guard'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { Require2FACodeGuard } from '../guards/require-2fa-code.guard'

@UseGuards(JwtAuthUserGuard)
@Controller('2fa')
export class TwoFactorAuthController {
	constructor(
		private readonly twoFactorAuthService: TwoFactorAuthService,
		private readonly userService: UserService,
		private readonly authService: AuthUserService,
	) {}

	@Post('enable')
	async enable2FA(@Req() req) {
		const userUuid = req.user.uuid
		const user = await this.userService.findByUuid(userUuid)

		const secret = this.twoFactorAuthService.generateSecret(user.email)
		const qrCodeUrl = await this.twoFactorAuthService.generateQrCode(secret.ascii, user.email)

		await this.userService.setVerifyTwoFactorSecret(userUuid, secret.base32)

		return { qrCodeUrl, base32: secret.base32 }
	}

	// @Post('token')
	// async generateToken(@Req() req) {
	// 	const userUuid = req.user.uuid
	// 	const user = await this.userService.findByUuid(userUuid)

	// 	if (!user.twoFactorSecret) {
	// 		throw new BadRequestException('2FA not enabled.')
	// 	}

	// 	const token = await this.twoFactorAuthService.generateToken(user.twoFactorSecret)

	// 	return { token }
	// }

	@UseGuards(JwtAuthUserGuard, Require2FACodeGuard)
	@Post('disable')
	@UseInterceptors(AnyFilesInterceptor())
	async disable2FA(@Req() req) {
		const userUuid = req.user.uuid
		const user = await this.userService.findByUuid(userUuid)
		await this.userService.disable2fa(user.id)

		return { message: '2FA disabled' }
	}

	@Post('verify')
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(AnyFilesInterceptor())
	async verify2FA(@Req() req, @Body() body) {
		const { token } = body
		const userUuid = req.user.uuid
		const user = await this.userService.findByUuid(userUuid)

		if (!user.verifyTwoFactorSecret) {
			throw new BadRequestException('2FA not enabled.')
		}

		const isValid = this.twoFactorAuthService.verifyToken(user.verifyTwoFactorSecret, token)
		if (!isValid) {
			throw new BadRequestException('Invalid token')
		}
		await this.userService.setValidTwoFactorSecret(userUuid, user.verifyTwoFactorSecret)

		return { isValid }
	}
}
