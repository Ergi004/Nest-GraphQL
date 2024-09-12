import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { defaultOptions } from './config/database.providers';

@Module({
  imports: [TypeOrmModule.forRoot({...defaultOptions})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
