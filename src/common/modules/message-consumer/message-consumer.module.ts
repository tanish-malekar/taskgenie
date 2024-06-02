import { Module } from '@nestjs/common';
import { MessageConsumerService } from './message-consumer.service';

@Module({
  imports: [],
  controllers: [],
  providers: [MessageConsumerService],
  exports: [MessageConsumerService],
})
export class MessageConsumerModule {}
