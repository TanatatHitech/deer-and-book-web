import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class RegisterAuthDto {
	@IsEmail({}, { message: 'Invalid email address' })
	@IsNotEmpty({ message: 'Email is required' })
	email: string

	@IsString()
	@IsNotEmpty({ message: 'Password is required' })
	@Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
	password: string

	@IsNotEmpty({ message: 'referral Code is required' })
	referralCode: string

	@IsString()
	@IsOptional()
	firstName?: string

	@IsString()
	@IsOptional()
	lastName?: string
}
