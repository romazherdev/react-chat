import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { User } from '../../../models';
import MemberListItem from '../MemberListItem/MemberListItem';
import styles from './MemberList.module.css';

export interface MemberListProps {
    // should be a separate interface instead of User
    members: User[];
}

export const MemberList = ({ members }: MemberListProps): JSX.Element => {
    const { user } = useContext(UserContext);
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
