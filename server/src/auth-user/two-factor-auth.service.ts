import { Injectable, BadRequestException } from '@nestjs/common'
import * as speakeasy from 'speakeasy'
import * as qrcode from 'qrcode'

@Injectable()
export class TwoFactorAuthService {
	generateSecret(userEmail: string) {
		const secret = speakeasy.generateSecret({
			// name: `MLS (${userEmail})`,
			length: 16, // กำหนดความยาวของ secret
		})
		return secret
	}
	async generateToken(secret: string) {
		return speakeasy.totp({
			secret: secret,
			encoding: 'base32',
			algorithm: 'sha512',
		})
	}
	async generateQrCode(secret: string, userEmail: string) {
		const otpauthUrl = speakeasy.otpauthURL({
			secret: secret,
			label: `MLS (${userEmail})`,
			algorithm: 'sha512',
		})

		return await qrcode.toDataURL(otpauthUrl)
	}

	verifyToken(secret: string, token: string) {
		return speakeasy.totp.verify({
			secret: secret,
			encoding: 'base32',
			token: token,
			window: 1,
			algorithm: 'sha512',
		})
	}
}
