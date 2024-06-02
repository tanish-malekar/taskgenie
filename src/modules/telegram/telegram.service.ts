import { Inject, Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { MessageConsumerService } from 'src/common/modules/message-consumer/message-consumer.service';
import { MessengerService } from 'src/common/modules/messenger/abstract-messenger.class';

@Injectable()
export class TelegramService implements MessengerService {
  constructor(
    @Inject('TELEGRAM_BOT') private bot: TelegramBot,
    private messageConsumerService: MessageConsumerService,
  ) {}

  public consume = () => {
    this.bot.on('message', async (msg) => {
      await this.messageConsumerService.messageConsumer(msg, this);
    });
  };

  public sendMessage = async (text: string, chatId: number) => {
    await this.bot.sendMessage(chatId, text);
  };
}
