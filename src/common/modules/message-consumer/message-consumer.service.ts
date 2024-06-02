import { Injectable } from '@nestjs/common';
import { MessengerService } from '../messenger/abstract-messenger.class';
import TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class MessageConsumerService {
  public async messageConsumer(
    msg: TelegramBot.Message,
    messengerService: MessengerService,
  ) {
    const chatId = msg.chat.id;
    const text = msg.text;
    await messengerService.sendMessage(text, chatId);
  }
}
