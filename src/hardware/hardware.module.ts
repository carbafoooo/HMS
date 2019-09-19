import { HardwareRepository } from './hardware.repository';
import { Module } from '@nestjs/common';
import { HardwareService } from './hardware.service';
import { HardwareController } from './hardware.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
	imports: [ TypeOrmModule.forFeature([ HardwareRepository ]) ],

	providers: [ HardwareService ],
	controllers: [ HardwareController ]
})
export class HardwareModule {}
