import { HardwareStatus, HardwareType } from '../hardware.enums';
import { MinLength, MaxLength, IsEnum, IsDateString, IsString } from 'class-validator';

export class FilterHardwareDto {
	@MinLength(3, { message: 'serial number must at least 3 character' })
	@MaxLength(15, { message: 'serial number must less than 15 character' })
	readonly serialNumber: string;

	@IsEnum(HardwareType, { message: 'type is not valid' })
	readonly type: HardwareType;

	@IsEnum(HardwareStatus, { message: 'status is not valid' })
	readonly status: HardwareStatus;

	@IsDateString({ message: 'not a valid date' })
	readonly lastRepair: Date;

	@IsString() readonly search: string;
}
