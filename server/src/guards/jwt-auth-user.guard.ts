import {
	Injectable,
	ExecutionContext,
	UnauthorizedException,
	HttpException,
	HttpStatus,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core'

@Injectable()
export class JwtAuthUserGuard extends AuthGuard('jwt-user') {
	constructor(private reflector: Reflector) {
		super()
	}

	canActivate(context: ExecutionContext) {
		return super.canActivate(context)
	}

	handleRequest(err, user, info) {
		// If there's an error or no user was found
		if (err || !user) {
			// Check if the error is related to the JWT expiration
			if (info?.name === 'TokenExpiredError') {
				// Custom error message for expired JWT
				throw new HttpException(
					{
						statusCode: HttpStatus.UNAUTHORIZED,
						message: 'Your session has expired. Please log in again.',
					},
					HttpStatus.UNAUTHORIZED,
				)
			}

			// Handle other possible JWT errors (e.g., invalid token)
			if (info?.name === 'JsonWebTokenError') {
				throw new HttpException(
					{
						statusCode: HttpStatus.UNAUTHORIZED,
						message: 'Invalid authentication token.',
					},
					HttpStatus.UNAUTHORIZED,
				)
			}

			// Default Unauthorized error for other cases
			throw err || new UnauthorizedException('You are not authorized to access this resource.')
		}

		// If no error, return the validated user
		return user
	}
}
