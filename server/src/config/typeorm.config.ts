import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
export default (configService: ConfigService): TypeOrmModuleOptions => ({
	type: 'mysql',
	host: configService.get<string>('DATABASE_HOST'),
	port: configService.get<number>('DATABASE_PORT', 3306),
	username: configService.get<string>('DATABASE_USERNAME'),
	password: configService.get<string>('DATABASE_PASSWORD'),
	database: configService.get<string>('DATABASE_NAME'),
	entities: [__dirname + '/../**/*.entity{.ts,.js}'],
	synchronize: configService.get<boolean>('TYPEORM_SYNC', false),
	timezone: '+00:00',
	retryAttempts: 5, // Number of retry attempts
	retryDelay: 3000, // Delay between retries (in ms)
	// Additional TypeORM configuration options can be added here
})
