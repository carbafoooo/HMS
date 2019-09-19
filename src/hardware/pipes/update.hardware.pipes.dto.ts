import { HardwareStatus } from '../hardware.enums';
import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class UpdateHardwarePipesDto implements PipeTransform {
	private readonly status: HardwareStatus[] = [
		HardwareStatus.OK,
		HardwareStatus.REPAIRED,
		HardwareStatus.UNDER_REPAIRED,
		HardwareStatus.UNREAPIRABLE
	];

	transform(value: any, metadata: ArgumentMetadata): string {
		if (!this.checkStatus(value)) {
			throw new BadRequestException('not valid status is Selected');
		}
		return value;
	}
	private checkStatus(hardware) {
		return this.status.includes(hardware.status);
	}
}
