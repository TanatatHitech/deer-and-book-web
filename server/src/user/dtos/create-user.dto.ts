export class CreateUserDto {
	passwordHash: string
	email: string
	firstName?: string
	lastName?: string
	phoneNumber?: string
	referralByUserId?: number
	isRegisterVerified?: boolean
}
