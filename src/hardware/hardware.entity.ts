import { HardwareType, HardwareStatus } from './hardware.enums';
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Hardware extends BaseEntity {
	@PrimaryGeneratedColumn('increment') id: number;

	@Column({ length: 20 })
	serialNumber: string;

	@Column() type: HardwareType;

	@Column() status: HardwareStatus;

	@Column() lastRepair: Date;
}
