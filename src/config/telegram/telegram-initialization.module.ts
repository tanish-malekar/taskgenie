import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';

const TelegamInitializationService = [
  {
    provide: 'TELEGRAM_BOT',
    useFactory: async (configService: ConfigService) => {
      return new TelegramBot(configService.get('TELEGRAM_BOT_TOKEN'), {
        polling: true,
      });
    },
    inject: [ConfigService],
  },
];

@Module({
  imports: [],
  providers: [...TelegamInitializationService],
  exports: [...TelegamInitializationService],
})
export class TelegamInitializationModule {}
