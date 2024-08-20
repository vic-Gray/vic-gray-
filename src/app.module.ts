import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [UsersModule, ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
