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
    const [sortedMembers, setSortedMembers] = useState([...members]);

    useEffect(() => {
        setSortedMembers(
            [...members].sort((a, b) => (
                a.id === user.id && -1
                || Number(b.active) - Number(a.active)
                || a.username.localeCompare(b.username)
            ))
        );
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
