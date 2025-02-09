// mail.service.ts
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'

@Injectable()
export class MailService {
	constructor(private readonly configService: ConfigService) {}

	private transporter = nodemailer.createTransport({
		host: 'smtp.oxcs.bluehost.com', // Bluehost SMTP server
		port: 587, // SSL port for Bluehost
		secure: false, // Use SSL for secure connection
		auth: {
			user: this.configService.get('EMAIL_USER'), // Fetch email and password from env
			pass: this.configService.get('EMAIL_PASSWORD'),
		},
	})

	async sendPasswordResetEmail(email: string, resetToken: string) {
		const frontendUrl = this.configService.get('FRONTEND_URL')
		const resetLink = `${frontendUrl}/change-password?token=${resetToken}`
		const mailOptions = {
			from: 'your-email@gmail.com',
			to: email,
			subject: 'Password Reset',
			text: `Click the link to reset your password: ${resetLink}`,
		}

		return await this.transporter.sendMail(mailOptions)
	}

	// New method to send verification email
	async sendVerificationEmail(email: string, verifyToken: string) {
		const frontendUrl = this.configService.get('FRONTEND_URL')
		const verifyLink = `${frontendUrl}/verify-email?token=${verifyToken}`
		const mailOptions = {
			from: 'your-email@gmail.com',
			to: email,
			subject: 'Verify Your Email',
			text: `Please click the following link to verify your email: ${verifyLink}`,
		}

		return await this.transporter.sendMail(mailOptions)
	}

	async sendVerification2FAEmail(email: string, verificationCode: string) {
		const mailOptions = {
			from: 'your-email@gmail.com',
			to: email,
			subject: 'Email Verification Code',
			text: `Your verification code is: ${verificationCode}`,
		}

		return await this.transporter.sendMail(mailOptions)
	}
}
