import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Request } from 'express'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class JwtUserStrategy extends PassportStrategy(Strategy, 'jwt-user') {
	constructor(private readonly configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request) => {
					return req?.cookies?.UserAuthentication
				},
			]),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>('USER_ACCESS_TOKEN_SECRET'),
		})
	}

	async validate(payload: any) {
		return { uuid: payload.sub, email: payload.email }
	}
}
