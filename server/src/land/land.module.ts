import { Module } from '@nestjs/common'
import { LandController } from './land.controller'
import { LandService } from './land.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Land } from './entities/land.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Land])],
	controllers: [LandController],
	providers: [LandService],
	exports: [LandService],
})
export class LandModule {}
