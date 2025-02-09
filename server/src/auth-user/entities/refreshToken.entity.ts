import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from 'user/entities/user.entity'

@Entity('userRefreshToken')
export class UserRefreshToken {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	token: string

	@Column({ type: 'timestamp' })
	expires: Date

	@ManyToOne(() => User, user => user.refreshTokens)
	user: User
}
