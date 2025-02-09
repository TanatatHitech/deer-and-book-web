import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Land } from './entities/land.entity'

@Injectable()
export class LandService {
	constructor(
		@InjectRepository(Land)
		private readonly landRepository: Repository<Land>,
	) {}

	async findByDoaeGapId(gapId: string) {
		return this.landRepository.findOneBy({ doaegapid: gapId })
	}
}
