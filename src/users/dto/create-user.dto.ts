import { IsString, IsInt, MaxLength, MinLength } from 'class-validator';


export class CreateUserDto {

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly  name:string;


  @IsString()
  readonly phone:string;


  @IsString()
  readonly email:string;


  @IsString()
  readonly  password:string;
}

