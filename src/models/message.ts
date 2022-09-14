export interface Message {
    id: string
    text: string;
    author: MessageAuthor;
    timestamp: number;
}

export interface MessageAuthor {
    id: string;
    username: string;
}