export class CreateAdminDto {
	username: string
	passwordHash: string
	email: string
	fullName?: string
	phoneNumber?: string
}
