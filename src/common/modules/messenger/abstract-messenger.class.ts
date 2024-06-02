export abstract class MessengerService {
  sendMessage: (text: string, chatId?: number) => Promise<void>;
  consume: () => void;
}
