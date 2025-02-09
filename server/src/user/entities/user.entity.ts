import { Expose } from 'class-transformer'
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	Generated,
	OneToMany,
} from 'typeorm'
import { UserRefreshToken } from 'auth-user/entities/refreshToken.entity'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar', length: 255, name: 'uuid', nullable: false, unique: true })
	@Generated('uuid')
	@Expose()
	uuid: string

	@Column()
	passwordHash: string

	@Column()
	@Expose()
	email: string

	@Column({ nullable: true })
	@Expose()
	firstName: string

	@Column({ nullable: true })
	@Expose()
	lastName: string

	@Column({ nullable: true })
	@Expose()
	phoneNumber: string

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@Column({ default: 'active' })
	status: string

	@Column({ nullable: true })
	mlmRank: string

	@Column({ nullable: true, type: 'decimal', precision: 11, scale: 2 })
	walletCash: number

	@Column({ nullable: true })
	growUpUserId: string

	@Column({ nullable: true })
	referralByUserId: number

	@ManyToOne(() => User)
	referralByUser: User

	@OneToMany(() => UserRefreshToken, refreshToken => refreshToken.user)
	refreshTokens: UserRefreshToken[]

	@Column({ type: 'timestamp', nullable: true })
	lastLogin: Date

	@Column({ nullable: true })
	userAvatarPicture?: string

	@Column({ nullable: true })
	enabledTwoFactorSecret: string

	@Column({ nullable: true })
	verifyTwoFactorSecret: string // ใช้ตอนสมัคร 2FA

	@Column({ nullable: true })
	forwarderWalletAddress: string

	@Column({ nullable: true })
	resetToken: string

	@Column({ nullable: true, type: 'timestamp' })
	resetTokenExpires: Date

	@Column({ nullable: true })
	isRegisterVerified: boolean

	@Column({ nullable: true })
	isVerifiedEmail: boolean

	@Expose()
	get avatarUrl(): string {
		return this.userAvatarPicture ?? null
	}

	@Expose()
	get isEnable2fa(): boolean {
		return !!this.enabledTwoFactorSecret || !!this.isVerifiedEmail
	}

	@Expose()
	get isVerified(): boolean {
		return !!this.enabledTwoFactorSecret || !!this.isVerifiedEmail
	}
}
