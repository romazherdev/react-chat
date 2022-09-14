import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@tanstack/react-query';

import { updateMemberRequest } from '../../../api';
import { UserContext } from '../../../contexts/UserContext';

import styles from './ChatAside.module.css';

const ChatAside = (): JSX.Element => {
    const { mutate: updateMember } = useMutation(['updateMember'], updateMemberRequest);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        updateMember({ id: user.id, active: false });
        setUser(null as any);
        navigate('/login');
    };

    return (
        <aside className={styles.aside}>
            <header className={styles.asideHeader}>
                <Button type="button" variant="light" onClick={handleLogout}>Logout</Button>
            </header>

            <ul className={styles.memberList}>
                <li className={styles.memberListItem}>Member 1</li>
                <li className={styles.memberListItem}>Member 2</li>
                <li className={styles.memberListItem}>Member 3</li>
            </ul>
        </aside>
    );
}

export default ChatAside;
