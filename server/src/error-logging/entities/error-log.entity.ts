import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('application_error_log')
export class ErrorLog {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar', length: 100 })
	application: string

	@Column({ type: 'text' })
	endpoint: string

	@Column({ type: 'text' })
	request: string

	@Column({ type: 'text', nullable: true })
	response: string

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date
}
