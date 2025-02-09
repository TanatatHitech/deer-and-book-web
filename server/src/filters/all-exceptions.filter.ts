import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Inject } from '@nestjs/common'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
	constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

	catch(exception: unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse()
		const request = ctx.getRequest()

		const status = exception instanceof HttpException ? exception.getStatus() : 500

		// Extract the error message
		let message: string
		if (exception instanceof HttpException) {
			const errorResponse = exception.getResponse()
			message = typeof errorResponse === 'object' ? errorResponse['message'] : errorResponse
		} else {
			message = exception instanceof Error ? exception.message : 'Internal server error'
		}

		// Log the error if it's an internal server error (status 500)
		if (status === 500) {
			this.logger.error(
				`${status} - ${request.method} - ${request.url} - ${message}`,
				exception instanceof Error ? exception.stack : 'No stack trace available'
			)
		}

		// Send the error response
		response.status(status).json({
			status: status,
			message,
			timestamp: new Date().toISOString(),
			path: request.url,
		})
	}
}
