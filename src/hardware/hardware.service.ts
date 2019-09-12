import { CreateHardwareDto } from './dto/create-hardware.dto';
import { Hardware, HardwareType } from './hardware.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import uuid = require('uuid');

@Injectable()
export class HardwareService {
	private hardwares: Hardware[] = [];

	getAllHardwares(): Hardware[] {
		return this.hardwares;
	}

	getHardwareById(id: string): Hardware {
		const found = this.hardwares.find((item) => item.id === id);
		if (!found) {
			throw new NotFoundException(`item with id: ${id} is not found`);
		}
		return found;
	}

	deleteHardwareById(id: string): void {
		this.getHardwareById(id);
		const idx = this.hardwares.findIndex((item) => item.id === id);
		this.hardwares.splice(idx, 1);
	}

	updateHardwareById(id: string, hardware: Hardware): Hardware {
		const found: Hardware = this.getHardwareById(id);
		if (!found) {
			throw new NotFoundException('item not found');
		}
		found.id = id;
		found.type = hardware.type;
		found.serialNumber = hardware.serialNumber;
		found.lastRepair = hardware.lastRepair;
		found.status = hardware.status;

		return found;
	}

	serachHardwareByType(type: HardwareType): Hardware[] {
		return this.hardwares.filter((item) => item.type === type);
	}
	createHardware(hardware: CreateHardwareDto): Hardware {
		const newHrdware: Hardware = {
			id: uuid(),
			serialNumber: hardware.serialNumber,
			type: hardware.type,
			status: hardware.status,
			lastRepair: hardware.lastRepair
		};

		this.hardwares.push(newHrdware);
		return newHrdware;
	}
}
