import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthUserController } from './auth-user.controller'
import { UserModule } from '../user/user.module'
import { JwtUserStrategy } from '../strategies/jwtUserStrategy'
import { AuthUserService } from './auth-user.service'
import { UserRefreshToken } from './entities/refreshToken.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TwoFactorAuthService } from './two-factor-auth.service'
import { TwoFactorAuthController } from './2fa.controller'
import { TwoFactorMailAuthController } from './2fa-mail.controller'
import { TwoFactorAuthMailService } from './two-factor-mail-auth.service'

@Module({
	imports: [
		UserModule,
		PassportModule,
		UserModule,
		JwtModule.register({}),
		TypeOrmModule.forFeature([UserRefreshToken]),
	],
	controllers: [AuthUserController, TwoFactorAuthController, TwoFactorMailAuthController],
	providers: [AuthUserService, JwtUserStrategy, TwoFactorAuthService, TwoFactorAuthMailService],
	exports: [AuthUserService],
})
export class AuthUserModule {}
