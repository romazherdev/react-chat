import { User } from './user';

export interface Message {
    id: string
    text: string;
    author: User;
    timestamp: number;
}
