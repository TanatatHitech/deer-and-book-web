import { Expose } from 'class-transformer'

export class PublicUserDto {
	@Expose()
	uuid: string

	@Expose()
	email: string

	@Expose()
	firstName: string

	@Expose()
	lastName: string

	@Expose()
	phoneNumber: string

	@Expose()
	mlmRank: string

	@Expose()
	avatarUrl: string

	@Expose()
	growUpUserId?: string

	@Expose()
	gasBalance?: number

	@Expose()
	referralBalance?: number

	@Expose()
	growupAccessUrl?: string
}
