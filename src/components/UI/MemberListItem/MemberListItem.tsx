import classNames from 'classnames';
import Badge from 'react-bootstrap/Badge';

import styles from './MemberListItem.module.css';

export interface MemberListItemProps {
    userId: string;
    username: string;
    active: boolean;
    self?: boolean;
}

export const MemberListItem = ({ active, userId, username, self = false }: MemberListItemProps): JSX.Element => (
    <li className={classNames(styles.memberListItem, {
        [styles.memberListItemOffline]: !active,
        [styles.memberListItemSelf]: self,
    })}>
        <span>{username}</span>
        <Badge bg={active ? 'primary' : 'secondary'}>{active ? 'Online' : 'Offline'}</Badge>
    </li>
);

export default MemberListItem;
