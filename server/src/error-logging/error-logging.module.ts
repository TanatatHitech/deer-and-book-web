import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ErrorLog } from './entities/error-log.entity'
import { ErrorLoggingService } from './error-logging.service'
@Global()
@Module({
	imports: [TypeOrmModule.forFeature([ErrorLog])],
	providers: [ErrorLoggingService],
  exports: [ErrorLoggingService],
})
export class ErrorLoggingModule {}
