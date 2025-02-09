import { Expose } from 'class-transformer'

export class UserBalanceDto {
	@Expose()
	mlsTokenBalance: number

	@Expose()
	gasBalance: number

	@Expose()
	referalBalance: number

	@Expose()
	walletBalance: number

	@Expose()
	sumdd: number

	@Expose()
	summargin: number

	@Expose()
	totalBot: number

	@Expose()
	canCreateBot: boolean

	@Expose()
	totalBotCredit: number
}
