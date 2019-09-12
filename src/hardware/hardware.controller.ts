import { UpdateHardwarePipesDto } from './pipes/update.hardware.pipes.dto';
import { CreateHardwareDto } from './dto/create-hardware.dto';
import { Hardware, HardwareType } from './hardware.model';
import { Controller, Get, Post, Body, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { HardwareService } from './hardware.service';
import { CreateHardwarePipesDto } from './pipes/create-hardware.pipes.dto';
import { UpdateHardwareDto } from './dto/update.hardware.dto';

@Controller('hardware')
export class HardwareController {
	constructor(private hardwareService: HardwareService) {}

	@Get('/')
	getAllHardware(): Hardware[] {
		return this.hardwareService.getAllHardwares();
	}
	@Post('/:id')
	deleteHardwareById(@Param('id') id: string): void {
		return this.hardwareService.deleteHardwareById(id);
	}

	@Post('/')
	@UsePipes(CreateHardwarePipesDto, ValidationPipe)
	createHardware(@Body() hardware: CreateHardwareDto): Hardware {
		return this.hardwareService.createHardware(hardware);
	}
	@Post('/:id/edit')
	@UsePipes(ValidationPipe)
	updateHardwareById(
		@Param('id') id: string,
		@Body(UpdateHardwarePipesDto, ValidationPipe)
		hardware: UpdateHardwareDto
	) {
		return this.hardwareService.updateHardwareById(id, hardware);
	}

	@Get('/search')
	serachHardwareByType(@Query('type') type: HardwareType): Hardware[] {
		return this.hardwareService.serachHardwareByType(type);
	}
	@Get('/:id')
	getHardwareById(@Param('id') id: string): Hardware {
		return this.hardwareService.getHardwareById(id);
	}
}
