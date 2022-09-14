import { User } from '../../models';
import { addMemberRequest } from './addMemberRequest';
import { getMembersRequest } from './getMembersRequest';

export async function loginOrRegisterRequest(username: string): Promise<User> {
    const members = await getMembersRequest();
    const user = members.find(m => m.username.toLowerCase().trim() === username.toLowerCase().trim());

    if (user) {
        return user;
    }

    return addMemberRequest(username.trim());
}
