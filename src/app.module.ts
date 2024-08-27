import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ControllersModule } from './controllers/controllers.module';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, ControllersModule, CommonModule, TypeOrmModule.forRoot({
    type:'mongodb',
    name:'victorybase',
    username:'vic_gray',
    port:27017,
    host:'localhost'
  })]
})
export class AppModule {}
