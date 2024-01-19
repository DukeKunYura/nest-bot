import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [DatabaseModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
