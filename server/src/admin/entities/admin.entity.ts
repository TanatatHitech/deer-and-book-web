import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	Generated,
} from 'typeorm'
import { AdminRefreshToken } from 'auth-admin/entities/adminRefreshToken.entity'
import { Expose } from 'class-transformer'

@Entity()
export class Admin {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar', length: 255, name: 'uuId', nullable: false, unique: true })
	@Generated('uuid')
	@Expose()
	uuId: string

	@Column()
	username: string

	@Column()
	passwordHash: string

	@Column('text', { nullable: true })
	permissions: string[]

	@Column()
	email: string

	@Column({ nullable: true })
	fullName: string

	@Column({ nullable: true })
	phoneNumber: string

	@Column({ type: 'timestamp', nullable: true })
	lastLogin: Date

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@Column({ default: 'active' })
	status: string

	@Column({ nullable: true })
	profileImage: string

	@OneToMany(() => AdminRefreshToken, refreshToken => refreshToken.user)
	refreshTokens: AdminRefreshToken[]
}
