import { Message } from '../../models';

export function getMessagesRequest(): Promise<Message[]> {
    const params = new URLSearchParams({
        _sort: 'timestamp',
        _order: 'desc',
    });
    return fetch(`${import.meta.env.CHAT_API_URL}/messages?${params}`).then(res => res.json());
}
