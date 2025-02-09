import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Farmer } from '../../farmer/entities/farmer.entity'

@Entity('lands')
export class Land {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar', length: 255 })
	plant_name: string

	@Column({ type: 'decimal', precision: 10, scale: 2 })
	area: number

	@Column({ type: 'date', nullable: true })
	plan_date: Date

	@Column({ type: 'date', nullable: true })
	product_date: Date

	@Column({ type: 'varchar', length: 255, nullable: true })
	product: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	p_moo: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	p_province: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	p_amphur: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	p_tambon: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	doaegapid: string

	@Column({ type: 'time', nullable: true })
	time: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	no_ad: string

	// Many-to-one relation with the Farmer entity
	@ManyToOne(() => Farmer, farmer => farmer.land)
	@JoinColumn({ name: 'farmer_id' })
	farmer: Farmer
}
