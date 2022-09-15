import { useEffect, useState } from 'react';
import { User } from '../../../models';
import MemberListItem from '../MemberListItem/MemberListItem';
import styles from './MemberList.module.css';

export interface MemberListProps {
    members: User[];
    user: User;
}

export const MemberList = ({ members, user }: MemberListProps): JSX.Element => {
    const [sortedMembers, setSortedMembers] = useState<User[]>([]);

    useEffect(() => {
        // TODO: Extract into a separate mechanism + cover with tests
        const selfFirst = (a: User) => Number(a.id === user.id && -1);
        const activeFirst = (a: User, b: User) => Number(b.active) - Number(a.active);
        const alphabeticalAsc = (a: User, b: User) => a.username.localeCompare(b.username);

        const pipe = (...args: Array<(a: User, b: User) => number>) =>
            (a: User, b: User) => args.reduce((res, compareFn) => res || compareFn(a, b), 0);
        const prioritizedSort = pipe(selfFirst, activeFirst, alphabeticalAsc);

        setSortedMembers([...members].sort(prioritizedSort));
    }, [members]);

    return (
        <ul className={styles.memberList}>
            {sortedMembers.map(item => (
                <MemberListItem
                    key={item.id}
                    userId={item.id}
                    username={item.username}
                    active={item.active}
                    self={item.id === user.id}
                />
            ))}
        </ul>
    );
}

export default MemberList;
