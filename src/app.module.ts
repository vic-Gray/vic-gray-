import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ControllersModule } from './controllers/controllers.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [UsersModule, ControllersModule, CommonModule],
})
export class AppModule {}
