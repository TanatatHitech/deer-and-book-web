import {
	Controller,
	Post,
	Body,
	Res,
	UseInterceptors,
	HttpCode,
	HttpStatus,
	Get,
	UseGuards,
	Request,
	Inject,
	Logger,
} from '@nestjs/common'
import { AuthUserService } from './auth-user.service'
import { RegisterAuthDto } from './dtos/register-auth.dto'
import { LoginAuthDto } from './dtos/login-auth.dto'
import { Response } from 'express' // Import the Request type from 'express'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { PublicUserDto } from '../user/dtos/public-user.dto'
import { Serialize } from '../interceptors/serialize'
import { JwtAuthUserGuard } from '../guards/jwt-auth-user.guard'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { UserService } from '../user/user.service'
import { Transactional } from 'typeorm-transactional'
import { ForgotPasswordDto } from './dtos/forgot-password.dto'
import { ResetPasswordDto } from './dtos/reset-password.dto'
import { MailService } from 'mail/mail.service'

@Controller('auth-user')
export class AuthUserController {
	constructor(
		private readonly authService: AuthUserService,
		private readonly userService: UserService,
		private readonly mailService: MailService,
		@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
	) {}

	@Post('register')
	@UseInterceptors(AnyFilesInterceptor())
	@HttpCode(HttpStatus.CREATED)
	@Transactional()
	@Serialize(PublicUserDto)
	async register(@Body() registerAuthDto: RegisterAuthDto) {
		const user = await this.authService.register(registerAuthDto)

		// Generate email verification token
		const verifyToken = await this.authService.generateVerificationToken(user.uuid)

		await this.mailService.sendVerificationEmail(user.email, verifyToken)

		return {
			message: 'Registration successful! Please verify your email to complete the process.',
		}
	}

	@Post('verify-register')
	@UseInterceptors(AnyFilesInterceptor())
	@HttpCode(HttpStatus.OK)
	async verifyRegister(@Body() { token }: any) {
		if (!token) {
			return {
				message: 'Token is required',
			}
		}
		await this.authService.verifyEmailToken(token)

		// TODO: remove this after testing

		return {
			message: 'Email verified successfully!',
		}
	}

	@Post('login')
	@UseInterceptors(AnyFilesInterceptor())
	@HttpCode(HttpStatus.OK)
	@Serialize(PublicUserDto)
	async login(@Body() loginAuthDto: LoginAuthDto, @Res() res: Response) {
		const user = await this.authService.login(loginAuthDto, res)

		return res.status(HttpStatus.OK).json({ success: true, message: null, data: user })
	}

	@Post('logout')
	async logout(@Res() res: Response) {
		await this.authService.logout(res)
		return res.status(HttpStatus.OK).json({ success: true, message: null })
	}
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	async refresh(@Res() res: Response, @Request() req: any) {
		const refreshToken = req.cookies['UserRefreshToken']
		await this.authService.refresh(refreshToken, res) // Assuming refresh sets cookies
		return res.status(HttpStatus.OK).json({ success: true, message: 'refresh token success' })
	}

	@Get('verify')
	@UseGuards(JwtAuthUserGuard)
	@HttpCode(HttpStatus.OK)
	async verifyAuth(@Request() req: any) {
		const user = req.user
		// Customize your response message and data
		return {
			message: 'User authenticated successfully',
			data: { user }, // Example data
		}
	}

	@Post('forgot-password')
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(AnyFilesInterceptor())
	async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
		await this.userService.requestPasswordReset(forgotPasswordDto.email)
		return { message: 'Password reset link sent to your email' }
	}

	@Post('reset-password')
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(AnyFilesInterceptor())
	async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
		await this.userService.resetPassword(resetPasswordDto.token, resetPasswordDto.newPassword)
		return { message: 'Password has been reset' }
	}
}
