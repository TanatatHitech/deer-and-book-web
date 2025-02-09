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
import { TwoFactorAuthMailService } from './two-factor-mail-auth.service'

@UseGuards(JwtAuthUserGuard)
@Controller('2fa-mail')
export class TwoFactorMailAuthController {
	constructor(
		private readonly twoFactorAuthMailService: TwoFactorAuthMailService,
		private readonly userService: UserService,
		private readonly authService: AuthUserService,
	) {}

	@Post('enable')
	async enable2FA(@Req() req) {
		const userUuid = req.user.uuid
		const user = await this.userService.findByUuid(userUuid)
		if (user.isVerifiedEmail === true) {
			throw new BadRequestException('Your account has been verified')
		}
		await this.twoFactorAuthMailService.requestVerification(user.email)
		return { message: 'Verification code sent to your email' }
	}

	@Post('verify')
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(AnyFilesInterceptor())
	async verify2FA(@Req() req, @Body() body) {
		const user = req.user
		const { token } = body
		const isValid = await this.twoFactorAuthMailService.verifyCode(user.email, token)

		await this.userService.update(user.uuid, { isVerifiedEmail: true })

		if (isValid) {
			return { message: 'Email successfully verified' }
		} else {
			return { message: 'Invalid or expired verification code' }
		}
	}
}
