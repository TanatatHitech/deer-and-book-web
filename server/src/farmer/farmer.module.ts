import { Module } from '@nestjs/common'
import { FarmerService } from './farmer.service'
import { FarmerController } from './farmer.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Farmer } from './entities/farmer.entity'
import { Land } from '../land/entities/land.entity'
import { LandModule } from '../land/land.module'

@Module({
	imports: [TypeOrmModule.forFeature([Farmer, Land]), LandModule],
	providers: [FarmerService],
	controllers: [FarmerController],
	exports: [FarmerService],
})
export class FarmerModule {}
