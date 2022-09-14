import { User } from '../../models';
import { addMemberRequest } from './addMemberRequest';
import { getMembersRequest } from './getMembersRequest';
import { patchMemberRequest } from './patchMemberRequest';

export async function loginOrRegisterRequest(username: string): Promise<User> {
    const members = await getMembersRequest();
    const user = members.find(m => m.username.toLowerCase().trim() === username.toLowerCase().trim());

    if (user) {
        return patchMemberRequest({ id: user.id, active: true });
    }

    return addMemberRequest(username.trim());
}
