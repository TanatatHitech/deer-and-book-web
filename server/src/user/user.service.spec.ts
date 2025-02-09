/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { User } from './entities/user.entity'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dtos/create-user.dto'
import { NotFoundException, ConflictException } from '@nestjs/common'

const mockUser = {
	id: 1,
	email: 'test@example.com',
	username: 'testuser',
	firstName: 'John',
	lastName: 'Doe',
}

const mockUserRepository = {
	findOne: jest.fn(),
	find: jest.fn(),
	create: jest.fn(),
	save: jest.fn(),
	update: jest.fn(),
	delete: jest.fn(),
}

describe('UserService', () => {
	let service: UserService
	let repository: Repository<User>

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{
					provide: getRepositoryToken(User),
					useValue: mockUserRepository,
				},
			],
		}).compile()

		service = module.get<UserService>(UserService)
		repository = module.get<Repository<User>>(getRepositoryToken(User))
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	describe('create', () => {
		it('should create a new user successfully', async () => {
			mockUserRepository.findOne.mockResolvedValue(null)
			mockUserRepository.create.mockReturnValue(mockUser)
			mockUserRepository.save.mockResolvedValue(mockUser)

			const createUserDto: CreateUserDto = {
				email: 'test@example.com',
				passwordHash: 'password123',
			}

			const result = await service.create(createUserDto)
			expect(result).toEqual(mockUser)
			expect(mockUserRepository.findOne).toHaveBeenCalledWith({
				where: { email: createUserDto.email },
			})
			expect(mockUserRepository.create).toHaveBeenCalledWith(createUserDto)
			expect(mockUserRepository.save).toHaveBeenCalledWith(mockUser)
		})

		it('should throw a ConflictException if email already exists', async () => {
			mockUserRepository.findOne.mockResolvedValue(mockUser)

			const createUserDto: CreateUserDto = {
				email: 'test@example.com',
				passwordHash: 'password123',
			}

			await expect(service.create(createUserDto)).rejects.toThrow(ConflictException)
		})
	})

	describe('findAll', () => {
		it('should return an array of users', async () => {
			mockUserRepository.find.mockResolvedValue([mockUser])

			const result = await service.findAll()
			expect(result).toEqual([mockUser])
			expect(mockUserRepository.find).toHaveBeenCalled()
		})
	})

	describe('findByEmail', () => {
		it('should return a user if found', async () => {
			mockUserRepository.findOne.mockResolvedValue(mockUser)

			const result = await service.findByEmail('test@example.com')
			expect(result).toEqual(mockUser)
			expect(mockUserRepository.findOne).toHaveBeenCalledWith({
				where: { email: 'test@example.com' },
			})
		})

		it('should throw a NotFoundException if user is not found', async () => {
			mockUserRepository.findOne.mockResolvedValue(null)

			await expect(service.findByEmail('notfound@example.com')).rejects.toThrow(NotFoundException)
		})
	})

	describe('findOne', () => {
		it('should return a user if found', async () => {
			mockUserRepository.findOne.mockResolvedValue(mockUser)

			const result = await service.findOne(1)
			expect(result).toEqual(mockUser)
			expect(mockUserRepository.findOne).toHaveBeenCalledWith({
				where: { id: 1 },
			})
		})

		it('should throw a NotFoundException if user is not found', async () => {
			mockUserRepository.findOne.mockResolvedValue(null)

			await expect(service.findOne(1)).rejects.toThrow(NotFoundException)
		})
	})

	describe('update', () => {
		it('should update a user successfully', async () => {
			mockUserRepository.findOne.mockResolvedValue(mockUser)
			mockUserRepository.save.mockResolvedValue({ ...mockUser, username: 'updateduser' })

			const updateUserDto = { username: 'updateduser' }
			const result = await service.update(1, updateUserDto)
			expect(result).toEqual({ ...mockUser, username: 'updateduser' })
			expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } })
			expect(mockUserRepository.save).toHaveBeenCalledWith({ ...mockUser, username: 'updateduser' })
		})

		it('should throw a NotFoundException if user is not found', async () => {
			mockUserRepository.findOne.mockResolvedValue(null)

			const updateUserDto = { username: 'updateduser' }
			await expect(service.update(1, updateUserDto)).rejects.toThrow(NotFoundException)
		})
	})

	describe('remove', () => {
		it('should remove a user successfully', async () => {
			mockUserRepository.delete.mockResolvedValue({ affected: 1 })

			await expect(service.remove(1)).resolves.toBeUndefined()
			expect(mockUserRepository.delete).toHaveBeenCalledWith(1)
		})

		it('should throw a NotFoundException if user is not found', async () => {
			mockUserRepository.delete.mockResolvedValue({ affected: 0 })

			await expect(service.remove(1)).rejects.toThrow(NotFoundException)
		})
	})
})
