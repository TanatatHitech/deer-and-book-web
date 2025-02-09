import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'
import { initializeTransactionalContext } from 'typeorm-transactional'
import { AllExceptionsFilter } from './filters/all-exceptions.filter'

async function bootstrap() {
	initializeTransactionalContext()
	const app = await NestFactory.create(AppModule, {
		abortOnError: true,
	})

	const configService = app.get<ConfigService>(ConfigService)
	const port = configService.get<number>('PORT', 3000) // Default to 3000 if PORT is not set

	const logger = app.get<Logger>(WINSTON_MODULE_PROVIDER)

	app.use(cookieParser())
	app.enableVersioning({
		type: VersioningType.URI,
	})
	app.useGlobalPipes(new ValidationPipe())
	app.useGlobalFilters(new AllExceptionsFilter(logger))
	app.enableCors({
		origin: configService.get('CORS_WHITE_LIST')
			? JSON.parse(configService.get('CORS_WHITE_LIST'))
			: [],

		credentials: true,
	})

	await app.listen(port)
	logger.log('info', `Application is running on: ${await app.getUrl()}`)
}
bootstrap()
