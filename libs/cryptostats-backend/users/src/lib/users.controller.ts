import { CreateUserRequest, UserResponse } from '@cryptostats/api';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, CurrentUser } from '@cryptostats/cryptostats-backend-auth';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body() createUserRequest: CreateUserRequest,
  ): Promise<UserResponse> {
    return this.usersService.createUser(createUserRequest);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserResponse): Promise<UserResponse> {
    return user;
  }
}
