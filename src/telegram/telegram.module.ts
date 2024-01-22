import { Module } from '@nestjs/common';
import { TelegramUpdate } from './telegram.update';
import { TelegramService } from './telegram.service';

@Module({
  providers: [TelegramUpdate, TelegramService],
})
export class TelegramModule {}
