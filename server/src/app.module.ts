import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import appConfig from './config/app.config'
import typeormConfig from './config/typeorm.config'

import { AdminModule } from './admin/admin.module'
import { UserModule } from './user/user.module'
import { AuthUserModule } from './auth-user/auth-user.module'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { ResponseInterceptor } from './interceptors/response.interceptor'
import { WinstonModule } from 'nest-winston'
import { winstonLoggerConfig } from '../config/winston-logger.config'
import { AuthAdminModule } from './auth-admin/auth-admin.module'
import { addTransactionalDataSource } from 'typeorm-transactional'
import { DataSource } from 'typeorm'
import { ErrorLoggingModule } from './error-logging/error-logging.module'
import { MailModule } from './mail/mail.module'
import { FarmerModule } from './farmer/farmer.module'
import { LandModule } from './land/land.module'
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [appConfig],
		}),
		WinstonModule.forRoot(winstonLoggerConfig),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => {
				return typeormConfig(configService)
			},
			async dataSourceFactory(options) {
				if (!options) {
					throw new Error('Invalid options passed')
				}

				return addTransactionalDataSource(new DataSource(options))
			},
		}),
		AdminModule,
		UserModule,
		AuthUserModule,
		AuthAdminModule,
		ErrorLoggingModule,
		MailModule,
		FarmerModule,
		LandModule,
	],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: ResponseInterceptor,
		},
	],
})
export class AppModule {}
