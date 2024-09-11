import { JwtService } from '@nestjs/jwt';

import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from "bcrypt"
import { access } from 'fs';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
  private readonly usersRepository: Repository<User>, private readonly ConfigService: ConfigService, private readonly JwtService: JwtService,


  ) { }

  async create({ email, password, name, phone, }: CreateUserDto) {

    const registerUser = await this.usersRepository.findOneBy({ email })
    const phoneNumber = await this.usersRepository.findOneBy({ phone })


    if (phoneNumber) {
      throw new UnauthorizedException("sorry this phone number is alrady in use")
    }
    if (registerUser) {
      throw new UnauthorizedException("sorry email is already in use")
    }


    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = this.usersRepository.create({
      name,
      password: hashedPassword,
      email,
      phone
    })
    await this.usersRepository.save(newUser);
    return newUser
  }

  async logInUser({ email, password,phone }: CreateUserDto) {
    const emailInUse = await this.usersRepository.findOneBy({ email })
    
    if (!emailInUse) {
      throw new UnauthorizedException("sorry this email is incorrect")
    }

    const isPasswordValid = await bcrypt.compare(password, emailInUse.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException("sory this password is incorrect")
    }
        const userToken = this.JwtService.sign({User}) 
        const phoneInUse = this.usersRepository.findOneBy({phone})
        
        if (!phoneInUse) {
           throw new UnauthorizedException("sorry this phone Number is already in use")
        }
        
        return {
          message:"logInsuccesfully",
          access_token: userToken,
          user:{
            id:emailInUse.id,
            email:emailInUse.email,
            phone:phoneInUse
          }
        }
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    const user = this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException("sorry this user does not exist")
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
