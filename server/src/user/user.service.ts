import {
	ConflictException,
	Injectable,
	NotFoundException,
	BadRequestException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { CreateUserDto } from './dtos/create-user.dto'
import { v4 as uuidv4 } from 'uuid'
import * as bcrypt from 'bcrypt'
import { MailService } from 'mail/mail.service'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
		private readonly mailService: MailService,
	) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const existingUser = await this.userRepository.findOne({
			where: { email: createUserDto.email },
		})

		if (existingUser) {
			throw new ConflictException('Email already in use')
		}

		const user = this.userRepository.create(createUserDto)
		return this.userRepository.save(user)
	}

	async findAll(): Promise<User[]> {
		return this.userRepository.find()
	}

	async findByEmail(email: string): Promise<User> {
		const user = await this.userRepository.findOne({ where: { email } })
		if (!user) {
			throw new NotFoundException(`User with email ${email} not found`)
		}
		return user
	}

	async findByUuid(uuid: string): Promise<User> {
		const user = await this.userRepository.findOne({ where: { uuid } })
		if (!user) {
			throw new NotFoundException(`User with uuid ${uuid} not found`)
		}
		return user
	}

	async findOne(id: number): Promise<User> {
		if (!id) {
			throw new NotFoundException('User ID is undefined')
		}
		const user = await this.userRepository.findOne({ where: { id } })
		if (!user) {
			throw new NotFoundException(`User with id ${id} not found`)
		}
		return user
	}
	async findByGrowUpId(growUpUserId: string): Promise<User> {
		const user = await this.userRepository.findOne({ where: { growUpUserId } })
		return user
	}

	async update(userUuid: string, updateUserDto: any): Promise<User> {
		const user = await this.findByUuid(userUuid)
		Object.assign(user, updateUserDto)
		return this.userRepository.save(user)
	}

	async remove(id: number): Promise<void> {
		const result = await this.userRepository.delete(id)
		if (result.affected === 0) {
			throw new NotFoundException(`User with id ${id} not found`)
		}
	}

	// New method for changing the password
	async changePassword(
		userUuid: string,
		currentPassword: string,
		newPassword: string,
	): Promise<void> {
		const user = await this.findByUuid(userUuid)

		// Check if the current password is correct
		const isPasswordValid = await bcrypt.compare(currentPassword, user.passwordHash)
		if (!isPasswordValid) {
			throw new BadRequestException('Current password is incorrect')
		}

		// Hash the new password
		const newPasswordHash = await bcrypt.hash(newPassword, 10)
		user.passwordHash = newPasswordHash

		// Save the updated user with the new password
		await this.userRepository.save(user)
	}

	async updateAvatar(userUuid: string, filePath: string): Promise<User> {
		const user = await this.findByUuid(userUuid)
		user.userAvatarPicture = filePath
		return this.userRepository.save(user)
	}

	async loadReferralCode(user: User): Promise<User> {
		return this.userRepository.findOne({
			where: {
				id: user.id,
			},
			relations: ['referralCodes'],
		})
	}
	async setVerifyTwoFactorSecret(userUuid: string, secret: string | null): Promise<void> {
		const user = await this.findByUuid(userUuid)
		if (!user) {
			throw new NotFoundException(`User with UUID ${userUuid} not found`)
		}

		user.verifyTwoFactorSecret = secret
		await this.userRepository.save(user)
	}
	async setValidTwoFactorSecret(userUuid: string, secret: string | null): Promise<void> {
		const user = await this.findByUuid(userUuid)
		if (!user) {
			throw new NotFoundException(`User with UUID ${userUuid} not found`)
		}

		user.enabledTwoFactorSecret = secret
		await this.userRepository.save(user)
	}

	async updateForwarderAddress(
		userOrUserId: number | User,
		forwarderWalletAddress: string,
	): Promise<void> {
		const user = await this.resolveUser(userOrUserId)
		user.forwarderWalletAddress = forwarderWalletAddress
		await this.userRepository.save(user)
	}

	async updateCashWallet(userOrUserId: number | User, amount: number): Promise<void> {
		const user = await this.resolveUser(userOrUserId)
		user.walletCash = amount
		await this.userRepository.save(user)
	}

	async resolveUser(userOrUserId: number | User): Promise<User> {
		if (typeof userOrUserId === 'number') {
			// Fetch user by ID
			return this.findOne(userOrUserId)
		}
		// Return user directly if it's already a User object
		return userOrUserId
	}

	async disable2fa(userId: number): Promise<void> {
		const user = await this.findOne(userId)
		user.enabledTwoFactorSecret = null
		user.verifyTwoFactorSecret = null
		user.isVerifiedEmail = null
		await this.userRepository.save(user)
	}

	async requestPasswordReset(email: string): Promise<void> {
		const user = await this.userRepository.findOne({ where: { email } })

		if (!user) {
			throw new BadRequestException('User not found')
		}

		const resetToken = uuidv4()
		user.resetToken = resetToken
		user.resetTokenExpires = new Date(Date.now() + 3600000) // 1 hour from now
		await this.userRepository.save(user)

		await this.mailService.sendPasswordResetEmail(user.email, resetToken)
	}

	async resetPassword(token: string, newPassword: string): Promise<void> {
		const user = await this.userRepository.findOne({ where: { resetToken: token } })

		if (!user || user.resetTokenExpires < new Date()) {
			throw new Error('Token is invalid or expired')
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10)
		user.passwordHash = hashedPassword
		user.resetToken = null
		user.resetTokenExpires = null

		await this.userRepository.save(user)
	}
}
