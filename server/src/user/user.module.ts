import { forwardRef, Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { User } from './entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TwoFactorAuthService } from '../auth-user/two-factor-auth.service'
import { TwoFactorAuthMailService } from '../auth-user/two-factor-mail-auth.service'
@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [UserService, TwoFactorAuthService, TwoFactorAuthMailService],
	controllers: [UserController],
	exports: [UserService],
})
export class UserModule {}
