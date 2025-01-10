import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @ApiOkResponse({ type: CreateUserDto, isArray: true })
  @Get()
  async getUsers() {
    return this.userService.findAll();
  }
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  }
}
