import { Hardware } from 'dist/hardware/hardware.modal';
import { HardwareType } from './../hardware.model';
import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

export class CreateHardwarePipesDto implements PipeTransform {
	private readonly type: HardwareType[] = [
		HardwareType.CPU,
		HardwareType.MAINBOARD,
		HardwareType.MONITOR,
		HardwareType.RAM,
		HardwareType.CASE,
		HardwareType.POWER
	];

	transform(hardware: any, metadata: ArgumentMetadata) {
		if (!this.checkType(hardware)) {
			throw new BadRequestException('invalid type input');
		}
		return hardware;
	}

	private checkType(hardware: Hardware) {
		return this.type.includes(hardware.type);
	}
}
