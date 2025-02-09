import { Injectable, CanActivate, ExecutionContext, BadRequestException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { TwoFactorAuthService } from 'auth-user/two-factor-auth.service'
import { UserService } from 'user/user.service'
import { TwoFactorAuthMailService } from '../auth-user/two-factor-mail-auth.service'

@Injectable()
export class Require2FACodeGuard implements CanActivate {
	constructor(
		private reflector: Reflector,
		private userService: UserService, // Inject the UserService
		private twoFactorAuthService: TwoFactorAuthService,
		private twoFactorAuthMailService: TwoFactorAuthMailService,
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const userUuid = request.user['uuid']

		// Fetch user details (you can replace this with your actual user retrieval logic)
		const user = await this.userService.findByUuid(userUuid)

		if (user?.enabledTwoFactorSecret) {
			// Check if 2FA code is present in the headers
			const twoFactorCode = request.headers['twofactorcode']

			if (!twoFactorCode) {
				throw new BadRequestException('2FA Authenticator code is required')
			}

			const isValid = await this.twoFactorAuthService.verifyToken(
				user.enabledTwoFactorSecret,
				twoFactorCode,
			)

			if (!isValid) {
				throw new BadRequestException('Invalid token')
			}
		} else if (user?.isVerifiedEmail) {
			const twoFactorCode = request.headers['twofactorcode']
			if (!twoFactorCode) {
				this.twoFactorAuthMailService.requestVerification(user.email)
				throw new BadRequestException('2FA Email code is required')
			}
			const isValid = await this.twoFactorAuthMailService.verifyCode(user.email, twoFactorCode)

			if (!isValid) {
				throw new BadRequestException('Invalid token')
			}
		}

		return true
	}
}
