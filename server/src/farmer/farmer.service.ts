import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import * as XLSX from 'xlsx'
import { ImportFarmerDto } from './dtos/import-farmer.dto'
import { Farmer } from './entities/farmer.entity'
import { Land } from '../land/entities/land.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LandService } from '../land/land.service'
@Injectable()
export class FarmerService {
	constructor(
		@InjectRepository(Farmer)
		private readonly farmerRepository: Repository<Farmer>,
		@InjectRepository(Land)
		private readonly landRepository: Repository<Land>,
		private readonly landService: LandService,
	) {}
	async findByPersonalCode(personalCode: string) {
		return this.farmerRepository.findOneBy({ personal_code: personalCode })
	}
	async importMasterExcel(file: Express.Multer.File) {
		const workbook = XLSX.read(file.buffer, { type: 'buffer' })
		const sheetName = workbook.SheetNames[0]
		const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
		const farmers = plainToInstance(ImportFarmerDto, worksheet)
		for (const farmer of farmers) {
			let existingFarmer = await this.findByPersonalCode(farmer.personalcode)
			const existingLand = await this.landService.findByDoaeGapId(farmer.doaegapid)
			if (!existingFarmer) {
				const newFarmer = new Farmer()
				newFarmer.personal_code = farmer.personalcode
				newFarmer.title_name = farmer.titleName // updated to match new DTO
				newFarmer.first_name = farmer.firstname // updated to match new DTO
				newFarmer.last_name = farmer.lastname // updated to match new DTO
				newFarmer.village_no = farmer.villangeno // updated to match new DTO
				newFarmer.village_name = farmer.villagename // updated to match new DTO
				newFarmer.moo = farmer.moo
				newFarmer.lane = farmer.lane
				newFarmer.road = farmer.road
				newFarmer.f_tambon = farmer.f_tambon
				newFarmer.f_amphur = farmer.f_amphur
				newFarmer.f_province = farmer.f_province
				newFarmer.f_postcode = farmer.f_postcode
				newFarmer.tel_home = farmer.tel_home
				newFarmer.tel_mobile = farmer.tel_mobile
				newFarmer.fax = farmer.fax
				newFarmer.email = farmer.email
				newFarmer.first_name_en = farmer.firstname_en // updated to match new DTO
				newFarmer.last_name_en = farmer.lastname_en // updated to match new DTO
				newFarmer.alley_en = farmer.alley_en
				newFarmer.lane_en = farmer.lane_en
				newFarmer.road_en = farmer.road_en
				newFarmer.distric_en = farmer.distric_en
				newFarmer.amphur_en = farmer.amphur_en
				newFarmer.province_en = farmer.province_en
				await this.farmerRepository.save(newFarmer)
				existingFarmer = newFarmer
			}
			if (!existingLand) {
				const newLand = new Land()
				newLand.doaegapid = farmer.doaegapid
				newLand.time = farmer.time.toString()
				newLand.no_ad = farmer.no_ad
				newLand.plant_name = farmer.plant_name
				newLand.area = farmer.area
				newLand.plan_date = new Date(farmer.plandate) // Assuming plandate is a serial number to be converted to Date
				newLand.product_date = new Date(farmer.productdate) // Assuming productdate is a serial number to be converted to Date
				newLand.product = farmer.product.toString() // If it's numeric, convert to string if necessary
				newLand.p_moo = farmer.p_moo
				newLand.p_province = farmer.p_province
				newLand.p_amphur = farmer.p_amphur
				newLand.p_tambon = farmer.p_tambon
				newLand.farmer = existingFarmer
				await this.landRepository.save(newLand)
			}
		}
		return worksheet
	}
}
