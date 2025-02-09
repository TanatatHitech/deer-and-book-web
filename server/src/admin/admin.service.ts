import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Admin } from './entities/admin.entity'
import { CreateAdminDto } from './dtos/create-admin.dto'
import { UpdateAdminDto } from './dtos/update-admin.dto'

@Injectable()
export class AdminService {
	constructor(
		@InjectRepository(Admin)
		private readonly userRepository: Repository<Admin>,
	) {}

	async create(CreateAdminDto: CreateAdminDto): Promise<Admin> {
		const existingUser = await this.userRepository.findOne({
			where: { email: CreateAdminDto.email },
		})

		if (existingUser) {
			throw new ConflictException('Email already in use')
		}

		const user = this.userRepository.create(CreateAdminDto)
		return this.userRepository.save(user)
	}

	async findAll() {
		return this.userRepository.find()
	}

	async findByEmail(email: string): Promise<Admin> {
		const user = await this.userRepository.findOne({ where: { email } })
		if (!user) {
			throw new NotFoundException(`User with email ${email} not found`)
		}
		return user
	}

	async findByUuid(uuId: string): Promise<Admin> {
		const user = await this.userRepository.findOne({ where: { uuId } })
		if (!user) {
			throw new NotFoundException(`User with uuid ${uuId} not found`)
		}
		return user
	}

	async findOne(id: number): Promise<Admin> {
		if (!id) {
			throw new NotFoundException('User ID is undefined')
		}
		const user = await this.userRepository.findOne({ where: { id } })
		if (!user) {
			throw new NotFoundException(`User with id ${id} not found`)
		}
		return user
	}

	async update(id: number, UpdateAdminDto: UpdateAdminDto): Promise<Admin> {
		const user = await this.findOne(id)
		Object.assign(user, UpdateAdminDto)
		return this.userRepository.save(user)
	}

	async remove(id: number): Promise<void> {
		const result = await this.userRepository.delete(id)
		if (result.affected === 0) {
			throw new NotFoundException(`User with id ${id} not found`)
		}
	}
}
