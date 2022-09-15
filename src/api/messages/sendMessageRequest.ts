import { v4 as uuidv4 } from 'uuid';

import { Message } from '../../models';

export function sendMessageRequest(payload: Omit<Message, 'id' | 'timestamp'>): Promise<void> {
    const body = JSON.stringify({
        ...payload,
        timestamp: Date.now(),  
        id: uuidv4(),
    } as Message);

    return fetch(`${import.meta.env.CHAT_API_URL}/messages`, {
        body,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
}
