import { User } from './user';

export interface Message {
    text: string;
    author: User;
    timestamp: number;
}
