import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Admin } from 'admin/entities/admin.entity'

@Entity('adminRefreshToken')
export class AdminRefreshToken {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	token: string

	@Column({ type: 'timestamp' })
	expires: Date

	@ManyToOne(() => Admin, admin => admin.refreshTokens)
	user: Admin
}
