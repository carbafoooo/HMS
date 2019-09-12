import { HardwareStatus } from '../hardware.model';
import { HardwareType } from '../hardware.model';
import { MaxLength, IsEnum, MinLength, IsDateString, IsUUID } from 'class-validator';

export class CreateHardwareDto {
	@MinLength(3, { message: 'serial number must at least 3 character' })
	@MaxLength(15, { message: 'serial number must less than 15 character' })
	readonly serialNumber: string;

	@IsEnum(HardwareType, { message: 'type is not valid' })
	readonly type: HardwareType;

	@IsEnum(HardwareStatus, { message: 'status is not valid' })
	readonly status: HardwareStatus;

	@IsDateString({ message: 'not a valid date' })
	readonly lastRepair: Date;
}
