import { Hardware } from './hardware.entity';
import { CreateHardwareDto } from './dto/create-hardware.dto';
import { Controller, Get, Post, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { HardwareService } from './hardware.service';
import { FilterHardwareDto } from './dto/filter-hardware.dto';

@Controller('hardware')
export class HardwareController {
	constructor(private hardwareService: HardwareService) {}

	/* Create New Hardware */
	@Post()
	@UsePipes(ValidationPipe)
	createHardware(@Body() hardware: CreateHardwareDto) {
		return this.hardwareService.createHardware(hardware);
	}

	/* Get All Hardwares  && Get Filtered Hardwares */
	@Get()
	async getHardwares(@Query() filterDto: FilterHardwareDto): Promise<Hardware[]> {
		return await this.hardwareService.getHardwares(filterDto);
	}

	/* Get Hardware By Id */
	@Get(':id')
	async getHardwareById(
		@Param('id', ParseIntPipe)
		id: number
	): Promise<Hardware> {
		return await this.hardwareService.getHardwareById(id);
	}

	/* Update Hardware By Id */
	@Post(':id/edit')
	@UsePipes(ValidationPipe)
	updateHardwareById(
		@Param('id', ParseIntPipe)
		id: number,
		@Body(ValidationPipe) hardware: Hardware
	) {
		return this.hardwareService.updateHardwareById(id, hardware);
	}

	/* Delete Hardware By Id */
	@Post(':id')
	async deleteHardwareById(
		@Param('id', ParseIntPipe)
		id: number
	): Promise<object> {
		return await this.hardwareService.deleteHardwareById(id);
	}
}
