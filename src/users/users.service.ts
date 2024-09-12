import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create({ email, phone, password, name }: CreateUserDto) {
    const userEmail = await this.userRepository.findOneBy({ email });
    const userPhone = await this.userRepository.findOneBy({ phone });
    const userName = await this.userRepository.findOneBy({ name });

    if (userEmail) {
      throw new UnauthorizedException('Sorry, this email is in use');
    }
    if (userPhone) {
      throw new UnauthorizedException('Sorry, this phone number is in use');
    }
    if (userName) {
      throw new UnauthorizedException('Sorry, this username has been taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      name,
      password: hashedPassword,
      email,
      phone,
    });
    await this.userRepository.save(newUser);

    return newUser;
  }

  async logIn({ email, phone,name }: CreateUserDto) {
    const user = await this.userRepository.findOneBy({ email });
    const userPassword = await this.userRepository.findOneBy({phone})
    if (!user) {
      throw new BadRequestException('Wrong email');
    }
    if (!userPassword) {
      throw new BadRequestException('Wrong phone Number');
    }
   
    const userToken = this.jwtService.sign({ id: user.id });

    return {
      message: 'Logged in successfully',
      access_Token: userToken,
     user:{
      email,
      phone,
      name
     }
      
    };
  }
  async findUserByName ({name,phone,email}:CreateUserDto){
      const userProfile = await this.userRepository.findOneBy({name})

      return {

        userProfile:{
          name,
          phone:userProfile.phone,
          email:userProfile.email
        }
      }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
