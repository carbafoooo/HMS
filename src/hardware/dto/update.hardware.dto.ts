import { CreateHardwareDto } from './create-hardware.dto';
import { IsUUID } from 'class-validator';
import uuid = require('uuid');

export class UpdateHardwareDto extends CreateHardwareDto {
	@IsUUID() readonly id: string = '00000000-0000-0000-0000-000000000000';
}
