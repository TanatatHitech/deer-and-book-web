import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core'

@Injectable()
export class JwtAuthAdminGuard extends AuthGuard('jwt-admin') {
	constructor(private reflector: Reflector) {
		super()
	}

	canActivate(context: ExecutionContext) {
		return super.canActivate(context)
	}

	handleRequest(err, user) {
		if (err || !user) {
			throw err || new UnauthorizedException()
		}
		return user
	}
}
