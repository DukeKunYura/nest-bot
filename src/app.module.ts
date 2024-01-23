import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from './config.module';

@Module({
  imports: [
    ConfigModule,
    TelegrafModule.forRoot({
      token: process.env.TG_TOKEN,
      include: [TelegramModule],
    }),
    TelegramModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
