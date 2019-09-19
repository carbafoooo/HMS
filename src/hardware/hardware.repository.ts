import { CreateHardwareDto } from './dto/create-hardware.dto';
import { Hardware } from './hardware.entity';
import { Repository, EntityRepository, UpdateResult, DeleteResult } from 'typeorm';
import { FilterHardwareDto } from './dto/filter-hardware.dto';

@EntityRepository(Hardware)
export class HardwareRepository extends Repository<Hardware> {
	/* Create New Hardware */
	async createHardware(createHardwareDto: CreateHardwareDto): Promise<Hardware> {
		const { type, status, serialNumber, lastRepair } = createHardwareDto;

		const hardware = new Hardware();

		hardware.type = type;
		hardware.status = status;
		hardware.serialNumber = serialNumber;
		hardware.lastRepair = lastRepair;

		await hardware.save();

		return hardware;
	}

	/* Get All Hardwares  && Get Filtered Hardwares */
	async getHardwares(filterDto: FilterHardwareDto): Promise<Hardware[]> {
		const { status, type, search } = filterDto;

		/* Get Hardwares With Filter */
		const query = Hardware.createQueryBuilder('hardware');

		/* Search With Type Of Hardware */
		if (type) {
			query.andWhere('hardware.type = :type', { type });
		}

		/* Search With Status Of Hardwares */
		if (status) {
			query.andWhere('hardware.status = :status', { status });
		}
		/* Search All Hardwares By Serial Number */
		if (search) {
			query.andWhere('hardware.serialNumber LIKE :serialNumber', { serialNumber: `%${search}%` });
		}

		/* Get All Hardwares Without Filter */
		const hardwares = await query.getMany();

		return hardwares;
	}

	/* Update Hardware By Id */
	async updateHarwareById(id: number, hardware: Hardware): Promise<UpdateResult> {
		const found = await this.update(id, {
			serialNumber: hardware.serialNumber,
			type: hardware.type,
			status: hardware.status,
			lastRepair: hardware.lastRepair
		});

		return found;
	}

	/* Delete Hardware By Id */
	async deleteHardwareById(id: number): Promise<DeleteResult> {
		return await this.delete(id);
	}
}
