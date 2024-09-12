import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const defaultOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'a',
    database: 'postgres',
    synchronize: true,
}