import Button from 'react-bootstrap/Button';

import styles from './ChatAside.module.css';

export interface ChatAsideProps {

}

const ChatAside = (props: ChatAsideProps): JSX.Element => (
    <aside className={styles.aside}>
        <header className={styles.asideHeader}>
            <Button type="button" variant="light">Logout</Button>
        </header>

        <ul className={styles.memberList}>
            <li className={styles.memberListItem}>Member 1</li>
            <li className={styles.memberListItem}>Member 2</li>
            <li className={styles.memberListItem}>Member 3</li>
        </ul>
    </aside>
);

export default ChatAside;
