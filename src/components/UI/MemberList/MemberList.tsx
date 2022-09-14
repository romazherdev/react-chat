import { User } from '../../../models';
import MemberListItem from '../MemberListItem/MemberListItem';
import styles from './MemberList.module.css';

export interface MemberListProps {
    // should be a separate interface instead of User
    members: User[];
}

export const MemberList = ({ members }: MemberListProps): JSX.Element => {
    return (
        <ul className={styles.memberList}>
            {members?.map(item => (
                <MemberListItem
                    key={item.id}
                    userId={item.id}
                    username={item.username}
                    active={item.active}
                />
            ))}
        </ul>
    );
}

export default MemberList;
