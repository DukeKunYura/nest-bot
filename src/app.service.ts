import { DatabaseService } from './database/database.service';
import { createUserDto } from './dto/createUser.dto';
import { TelegramService } from './telegram/telegram.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly telegramService: TelegramService,
    private readonly databaseService: DatabaseService,
  ) {}
  getHello(): string {
    return this.telegramService.getToken();
  }

  async getAllUsers() {
    return this.databaseService.user.findMany();
  }

  async save(dto: createUserDto) {
    return this.databaseService.user.create({
      data: dto,
    });
  }
}
