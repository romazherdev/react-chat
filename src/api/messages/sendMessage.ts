import { Message } from '../../models';

export function sendMessage(payload: Message): Promise<void> {
    return fetch(`${import.meta.env.CHAT_API_URL}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    }).then(res => res.json());
}
