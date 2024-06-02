import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegamInitializationModule } from 'src/config/telegram/telegram-initialization.module';
import { MessageConsumerModule } from 'src/common/modules/message-consumer/message-consumer.module';

@Module({
  imports: [TelegamInitializationModule, MessageConsumerModule],
  controllers: [],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
