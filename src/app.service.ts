import { TelegramService } from './telegram/telegram.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly telegramService: TelegramService) {}
  getHello(): string {
    return this.telegramService.getToken();
  }
}
