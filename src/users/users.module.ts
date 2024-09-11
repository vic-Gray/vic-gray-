import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([User]), JwtModule.register({
    secret:'maxsolder123',
    signOptions:{expiresIn:"12h"}
  })],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
