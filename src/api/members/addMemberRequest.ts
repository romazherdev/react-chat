import { v4 as uuidv4 } from 'uuid';

import { User } from '../../models';

export function addMemberRequest(username: string): Promise<User> {
    const payload: User = {
        username,
        id: uuidv4(),
        active: true,
    };
    const body = JSON.stringify(payload);

    return fetch(`${import.meta.env.CHAT_API_URL}/members`, {
        body,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(() => payload);
}
