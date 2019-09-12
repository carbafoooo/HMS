import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HardwareModule } from './hardware/hardware.module';

@Module({
	imports: [ HardwareModule ],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
