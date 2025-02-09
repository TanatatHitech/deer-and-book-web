import { Controller, Post, UploadedFile, UseInterceptors, Version } from '@nestjs/common'
import { FarmerService } from './farmer.service'
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express'

@Controller('farmer')
export class FarmerController {
	constructor(private readonly farmerService: FarmerService) {}

	@Post('import-master-excel')
	@Version('1')
	@UseInterceptors(FileInterceptor('file'))
	// @Serialize(PublicPackagesDto)
	async importMasterExcel(@UploadedFile() file: Express.Multer.File) {
		return this.farmerService.importMasterExcel(file)
	}
}
