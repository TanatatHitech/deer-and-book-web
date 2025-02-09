import { Reflector } from '@nestjs/core'
import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable, map } from 'rxjs'
import { plainToInstance } from 'class-transformer'

interface ClassConstructor {
	new (...args: any[])
}

export function Serialize(dto: ClassConstructor) {
	return UseInterceptors(new SerializedInterceptor(dto))
}

export class SerializedInterceptor implements NestInterceptor {
	private reflector: Reflector

	constructor(private dto: any) {
		this.reflector = new Reflector()
	}

	intercept(
		context: ExecutionContext,
		handler: CallHandler<any>,
	): Observable<any> | Promise<Observable<any>> {
		return handler.handle().pipe(
			map((data: any) => {
				return plainToInstance(this.dto, data, {
					excludeExtraneousValues: true,
					enableImplicitConversion: true,
				})
			}),
		)
	}
}

export function SerializePagination() {
	return UseInterceptors(new PaginationInterceptor())
}

export class PaginationInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const request = context.switchToHttp().getRequest()
		const page = parseInt(request.query.page, 10) || 1
		const limit = parseInt(request.query.limit, 10) || 10

		// Attach pagination metadata to the request
		request.pagination = {
			page,
			limit,
		}

		return next.handle().pipe(
			map(data => {
				return {
					data,
					pagination: {
						page,
						limit,
					},
				}
			}),
		)
	}
}
