import { IsOptional, IsString } from 'class-validator'

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	firstName?: string

	@IsOptional()
	@IsString()
	lastName?: string

	@IsOptional()
	@IsString()
	phoneNumber?: string

	@IsOptional()
	@IsString()
	userAvatarPicture?: string
}
