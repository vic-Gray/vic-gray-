import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DtoId } from 'src/common/dto/Dto.id';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
   
    
    return this.usersService.create(createUserDto);
  }

  @Post("login")
  logIn(@Body() CreateUserDto:CreateUserDto){

    return this.usersService.logIn(CreateUserDto)
  }
  @Post('userName')
  findUserByName(@Body() CreateUserDto:CreateUserDto){
      return this.usersService.findUserByName(CreateUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: DtoId) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param() { id }: DtoId, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param()  { id }: DtoId) {
    return this.usersService.remove(id);
  }
}
