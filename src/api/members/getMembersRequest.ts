import { User } from '../../models';

export function getMembersRequest(): Promise<User[]> {
    return fetch(`${import.meta.env.CHAT_API_URL}/members`).then(res => res.json());
}
