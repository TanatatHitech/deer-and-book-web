import { Injectable, UnauthorizedException, InternalServerErrorException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { RegisterAuthDto } from './dtos/register-auth.dto'
import { LoginAuthDto } from './dtos/login-auth.dto'
import * as bcrypt from 'bcrypt'
import { Response } from 'express'
import { PublicAdminDto } from 'admin/dtos/public-admin.dto'
import { ConfigService } from '@nestjs/config'
import { AdminRefreshToken } from './entities/adminRefreshToken.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AdminService } from '../admin/admin.service'
import * as moment from 'moment'

@Injectable()
export class AuthAdminService {
	constructor(
		private readonly adminService: AdminService,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
		@InjectRepository(AdminRefreshToken)
		private readonly refreshTokenRepository: Repository<AdminRefreshToken>,
	) {}

	async register(registerAuthDto: RegisterAuthDto) {
		try {
			const hashedPassword = await bcrypt.hash(registerAuthDto.password, 10)
			return this.adminService.create({
				...registerAuthDto,
				passwordHash: hashedPassword,
			})
		} catch (error) {
			console.error(error)
			throw new InternalServerErrorException('Failed to register user')
		}
	}

	async validateUser(email: string, pass: string): Promise<any> {
		try {
			const user = await this.adminService.findByEmail(email)
			if (user) {
				const isPasswordMatch = await bcrypt.compare(pass, user.passwordHash)
				if (isPasswordMatch) {
					return user
				}
			}
			return null
		} catch (error) {
			console.error(error)
			throw new InternalServerErrorException('Failed to validate user')
		}
	}

	async login(loginAuthDto: LoginAuthDto, res: Response) {
		try {
			// Validate user credentials
			const user = await this.validateUser(loginAuthDto.email, loginAuthDto.password)

			if (!user) {
				throw new UnauthorizedException('Email or password is incorrect')
			}

			user.lastLogin = new Date()
			await this.adminService.update(user.id, user)

			// Delete existing refresh tokens for the user
			await this.refreshTokenRepository.delete({ user })

			// Generate jti for access token
			const jti = this.generateJti()

			// Create JWT payload
			const payload = { email: user.email, sub: user.uuid, jti }

			// Create Access Token
			const accessToken = this.jwtService.sign(payload, {
				secret: this.configService.get<string>('ADMIN_ACCESS_TOKEN_SECRET'),
				// expiresIn: '15m',
				expiresIn: '1d',
			})

			// Create Refresh Token
			const refreshToken = this.jwtService.sign(
				{ email: user.email, sub: user.id },
				{
					secret: this.configService.get<string>('ADMIN_REFRESH_TOKEN_SECRET'),
					expiresIn: '7d',
				},
			)

			// Store Refresh Token in the database
			const refreshTokenEntity = this.refreshTokenRepository.create({
				token: refreshToken,
				user,
				expires: moment.utc().add(7, 'days').toDate(),
			})
			await this.refreshTokenRepository.save(refreshTokenEntity)

			// Set tokens in cookies
			res.cookie('AdminAuthentication', accessToken, {
				httpOnly: true,
				secure: true,
				maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
				sameSite: 'none', // Allow cross-site cookie usage
			})

			res.cookie('AdminRefreshToken', refreshToken, {
				httpOnly: true,
				secure: true,
				maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
				sameSite: 'none', // Allow cross-site cookie usage
			})

			// Prepare public user data for response
			const userPublic: PublicAdminDto = {
				uuId: user.uuId,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
			}

			return userPublic
		} catch (error) {
			if (error instanceof UnauthorizedException) {
				throw error
			}
			console.log(error)
			throw new InternalServerErrorException('Failed to login')
		}
	}

	async refresh(refreshToken: string, res: Response) {
		try {
			// Verify the Refresh Token
			const payload = this.jwtService.verify(refreshToken, {
				secret: this.configService.get<string>('ADMIN_REFRESH_TOKEN_SECRET'),
			})

			// Find the Refresh Token in the database
			const tokenEntity = await this.refreshTokenRepository.findOne({
				where: { token: refreshToken },
			})
			if (!tokenEntity || tokenEntity.expires < new Date()) {
				throw new UnauthorizedException('Invalid refresh token')
			}

			// Find the user
			const user = await this.adminService.findOne(payload.sub)
			if (!user) {
				throw new UnauthorizedException('User not found')
			}

			// Delete the old Refresh Token
			await this.refreshTokenRepository.delete({ token: refreshToken })

			// Generate a new Access Token
			const accessToken = this.jwtService.sign(
				{ sub: user.id, jti: this.generateJti() },
				{
					secret: this.configService.get<string>('ADMIN_ACCESS_TOKEN_SECRET'),
					expiresIn: '15m',
				},
			)

			// Generate a new Refresh Token
			const newRefreshToken = this.jwtService.sign(
				{ sub: user.id },
				{
					secret: this.configService.get<string>('ADMIN_REFRESH_TOKEN_SECRET'),
					expiresIn: '7d',
				},
			)

			// Store the new Refresh Token in the database
			const newRefreshTokenEntity = this.refreshTokenRepository.create({
				token: newRefreshToken,
				user,
				expires: moment.utc().add(7, 'days').toDate(),
			})
			await this.refreshTokenRepository.save(newRefreshTokenEntity)

			// Set tokens in cookies
			res.cookie('AdminAuthentication', accessToken, {
				httpOnly: true,
				secure: true,
				maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
				sameSite: 'none', // Allow cross-site cookie usage
			})

			res.cookie('AdminRefreshToken', newRefreshToken, {
				httpOnly: true,
				secure: true,
				maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
				sameSite: 'none', // Allow cross-site cookie usage
			})

			return { success: true }
		} catch (error) {
			throw new UnauthorizedException('Invalid refresh token')
		}
	}
	async logout(res: Response) {
		try {
			// Clear Authentication cookie
			res.clearCookie('AdminAuthentication', {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict',
			})

			// Clear RefreshToken cookie
			res.clearCookie('AdminRefreshToken', {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict',
			})

			return {
				success: true,
				message: 'Logout successful',
			}
		} catch (error) {
			throw new UnauthorizedException('Failed to logout')
		}
	}
	private generateJti(): string {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
	}
}
