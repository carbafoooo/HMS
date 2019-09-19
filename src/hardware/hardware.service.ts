import { Hardware } from './hardware.entity';
import { HardwareRepository } from './hardware.repository';
import { CreateHardwareDto } from './dto/create-hardware.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterHardwareDto } from './dto/filter-hardware.dto';

@Injectable()
export class HardwareService {
	constructor(@InjectRepository(HardwareRepository) private hardwareRepository: HardwareRepository) {}

	/* Create New Hardware */
	createHardware(hardware: CreateHardwareDto) {
		return this.hardwareRepository.createHardware(hardware);
	}

	/* Get All Hardwares  && Get Filtered Hardwares */
	async getHardwares(filterDto: FilterHardwareDto): Promise<Hardware[]> {
		return await this.hardwareRepository.getHardwares(filterDto);
	}
	/* Get Hardware By Id */
	async getHardwareById(id: number): Promise<Hardware> {
		const found = await this.hardwareRepository.findOne(id);
		if (!found) {
			throw new BadRequestException('hardware with this `${id}` not found');
		}
		return found;
	}
	/* Delete Hardware By Id */
	async deleteHardwareById(id: number): Promise<object> {
		const item = await this.hardwareRepository.deleteHardwareById(id);
		if (item.affected === 0) {
			throw new BadRequestException('hardware with this `${id}` not found');
		}
		return { message: ' item deleted successfull...' };
	}

	/* Update Hardware By Id */
	async updateHardwareById(id: number, hardware: Hardware): Promise<string> {
		const item = await this.hardwareRepository.updateHarwareById(id, hardware);
		if (item.affected === 0) {
			throw new BadRequestException('hardware with this `${id}` not found');
		}
		return `Item with id: ${id} updated`;
	}
}
