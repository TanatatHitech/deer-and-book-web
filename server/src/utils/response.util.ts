import { plainToInstance } from 'class-transformer'
import { validateOrReject, ValidationError } from 'class-validator'
import { InternalServerErrorException } from '@nestjs/common'

export async function validateResponseDto<T extends object>(
	dto: new () => T,
	data: any,
): Promise<T> {
	const instance = plainToInstance(dto, data)
	try {
		await validateOrReject(instance)
		return instance
	} catch (errors) {
		if (errors instanceof Array && errors[0] instanceof ValidationError) {
			const validationErrors = errors.map((err: ValidationError) =>
				Object.values(err.constraints).join(', '),
			)
			throw new InternalServerErrorException(`Validation failed: ${validationErrors.join('; ')}`)
		}
		throw new InternalServerErrorException('An unexpected error occurred during validation')
	}
}
