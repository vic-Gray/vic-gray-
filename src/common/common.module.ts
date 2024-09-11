import { User } from './../users/entities/user.entity';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';







export const DEFULT_SCREEN_SIZE={
  USER:10,
 
} as const satisfies Record<string, number>;

