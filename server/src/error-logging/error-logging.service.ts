import { Injectable } from '@nestjs/common'
import { ErrorLog } from './entities/error-log.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ErrorLoggingService {
	constructor(
		@InjectRepository(ErrorLog)
		private readonly errorLogRepository: Repository<ErrorLog>,
	) {}
	async write(
		application: string,
		endpoint: string,
		request: string,
		response: string,
	): Promise<void> {
		// use insert method
		await this.errorLogRepository.insert({
			application,
			endpoint,
			request,
			response,
		})
	}
}
