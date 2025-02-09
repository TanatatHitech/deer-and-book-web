import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Request } from 'express'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
	constructor(private readonly configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request) => {
					return req?.cookies?.AdminAuthentication
				},
			]),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>('ADMIN_ACCESS_TOKEN_SECRET'),
		})
	}

	async validate(payload: any) {
		return { uuid: payload.sub, email: payload.email }
	}
}
