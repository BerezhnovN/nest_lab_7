import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.models';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
