import { IsString, IsInt, MaxLength, MinLength, Length, IsPhoneNumber, IsEmail } from 'class-validator';


export class CreateUserDto {
    
  @Length(2, 20)
  readonly  name:string;


  @IsPhoneNumber("NG")
  readonly phone:string;


  @IsEmail()
  readonly email:string;


  @IsString()
  readonly  password:string;
}

