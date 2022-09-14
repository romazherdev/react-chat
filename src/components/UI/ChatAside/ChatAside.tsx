import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import styles from './ChatAside.module.css';

const ChatAside = (): JSX.Element => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
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
