import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthAdminController } from './auth-admin.controller'
import { JwtAdminStrategy } from '../strategies/jwtAdminStrategy'
import { AuthAdminService } from './auth-admin.service'
import { AdminModule } from '../admin/admin.module'
import { AdminRefreshToken } from './entities/adminRefreshToken.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [
		AdminModule,
		PassportModule,
		JwtModule.register({}),
		TypeOrmModule.forFeature([AdminRefreshToken]),
	],
	controllers: [AuthAdminController],
	providers: [AuthAdminService, JwtAdminStrategy],
})
export class AuthAdminModule {}
