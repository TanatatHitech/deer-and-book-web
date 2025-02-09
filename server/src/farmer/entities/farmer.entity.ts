import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Land } from '../../land/entities/land.entity'

@Entity('farmers')
export class Farmer {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar', length: 255 })
	personal_code: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	title_name: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	first_name: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	last_name: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	village_no: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	village_name: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	moo: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	lane: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	road: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	f_tambon: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	f_amphur: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	f_province: string

	@Column({ type: 'varchar', length: 10, nullable: true })
	f_postcode: string

	@Column({ type: 'varchar', length: 20, nullable: true })
	tel_home: string

	@Column({ type: 'varchar', length: 20, nullable: true })
	tel_mobile: string

	@Column({ type: 'varchar', length: 20, nullable: true })
	fax: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	email: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	title_name_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	first_name_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	last_name_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	alley_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	lane_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	road_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	distric_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	amphur_en: string

	@Column({ type: 'varchar', length: 255, nullable: true })
	province_en: string

	@OneToMany(() => Land, land => land.farmer, { cascade: true })
	land: Land[]
}
