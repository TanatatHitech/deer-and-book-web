import { Expose, Transform } from 'class-transformer'

export class UserProfileDto {
	@Expose()
	uuId: string

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
	@Transform(({ value }) => value ?? 0)
	totalReferrals: number

	@Expose()
	isVerified: boolean

	@Expose()
	@Transform(({ value }) => value ?? false)
	isSubscripted: boolean

	@Expose()
	avatarUrl: string

	@Expose()
	growUpUserId: string

	@Expose()
	myReferral: string

	@Expose()
	invitationUrl: string

	@Expose()
	isEnable2fa: boolean

	@Expose()
	subscriptionPlanTitle: string

	@Expose()
	subscriptionExpireDate: Date
}
