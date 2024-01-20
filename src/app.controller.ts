import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { createUserDto } from './dto/createUser.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('token')
  getToken(): string {
    return this.appService.getHello();
  }

  @Get('user/id=:id/type=:type')
  getUser(
    @Param('id', ParseIntPipe) id: number,
    @Param('type', ParseIntPipe) type: number,
  ) {
    console.log(id + type);
    return id + type;
  }

  @Get('users')
  async getAllUser() {
    const res = await this.appService.getAllUsers();
    return res;
  }

  @UsePipes(new ValidationPipe())
  @Post('user/add')
  async createUser(@Body() dto: createUserDto) {
    console.log(dto.name + ' ' + dto.surname);
    const res = await this.appService.save(dto);
    return res;
  }
}
