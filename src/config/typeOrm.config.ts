import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: '1104695',
	database: 'hardware',
	entities: [ 'dist/**/*.entity.js' ],
	synchronize: true
};
