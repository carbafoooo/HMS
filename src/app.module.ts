import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HardwareModule } from './hardware/hardware.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
@Module({
	imports: [ TypeOrmModule.forRoot(typeOrmConfig), HardwareModule ],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
