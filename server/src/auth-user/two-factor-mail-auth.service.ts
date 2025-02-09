import { Injectable, BadRequestException } from '@nestjs/common'
import { MailService } from '../mail/mail.service'
@Injectable()
export class TwoFactorAuthMailService {
	constructor(private readonly mailService: MailService) {}
	private verifyCodeCache = new Map<string, { digit: string; expiresAt: Date }>()

	// Generate a 6-digit code and store it in the Map with an expiration time
	generateCode(): string {
		return Math.floor(100000 + Math.random() * 900000).toString() // Generate 6-digit code
	}

	async requestVerification(email: string): Promise<void> {
		const code = this.generateCode()
		const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes from now

		// Store the code and expiration in the Map
		this.verifyCodeCache.set(email, { digit: code, expiresAt })

		// Send the code to the user's email (you'd call your mail service here)
		await this.mailService.sendVerification2FAEmail(email, code)
	}

	async verifyCode(email: string, code: string): Promise<boolean> {
		const storedData = this.verifyCodeCache.get(email)

		if (!storedData) {
			throw new Error('Verification code not found')
		}

		const { digit, expiresAt } = storedData

		if (expiresAt < new Date()) {
			// Code expired
			this.verifyCodeCache.delete(email) // Clean up the expired entry
			throw new Error('Verification code expired')
		}

		if (digit !== code) {
			throw new Error('Invalid verification code')
		}

		// Code is valid, you can now perform any necessary actions (e.g., marking user as verified)
		this.verifyCodeCache.delete(email) // Clean up after successful verification
		return true
	}
}
