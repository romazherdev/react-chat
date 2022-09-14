import { User } from '../../models';

export function patchMemberRequest({ id, ...payload }: Pick<User, 'active' | 'id'>): Promise<User> {
    const body = JSON.stringify(payload);

    return fetch(`${import.meta.env.CHAT_API_URL}/members/${id}`, {
        body,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
}
