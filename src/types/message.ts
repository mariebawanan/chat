export interface Message {
  messageId: string;
  text: string;
  datetime: Date;
  userId: string;
  failed?: boolean;
}
