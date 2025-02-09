// src/common/interceptors/response.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface Response<T> {
	status: number
	message: string
	data?: T
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
	intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
		return next.handle().pipe(
			map(data => {
				const response = {
					status: context.switchToHttp().getResponse().statusCode,
					message: 'Request successful',
				}

				if (typeof data === 'object' && data !== null) {
					if ('message' in data && 'data' in data) {
						return {
							...response,
							...data,
						}
					} else if ('message' in data) {
						return {
							...response,
							message: data.message,
						}
					} else {
						return {
							...response,
							data,
						}
					}
				}

				return response
			}),
		)
	}
}
