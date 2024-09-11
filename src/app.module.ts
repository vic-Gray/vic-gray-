import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ControllersModule } from './controllers/controllers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, ControllersModule,ConfigModule.forRoot({
    isGlobal:true
  }) ,TypeOrmModule.forRootAsync({
imports:[ConfigModule],
inject:[ConfigService],
useFactory: async (ConfigService:ConfigService, )=>({

  type:'postgres',
    host:'aws-0-eu-central-1.pooler.supabase.com',
    port:6543,
    username:'postgres.hbwebnfupbywebptrvro',
    password:'maxsolderme182005',
    database:"postgres",
    entities:[User],
   synchronize:true,

})
  })
]
})
export class AppModule {}
