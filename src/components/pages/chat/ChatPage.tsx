import Form from 'react-bootstrap/Form';

import styles from './ChatPage.module.css';

const ChatPage = (): JSX.Element => (
    <div className={styles.page}>
        <main className={styles.chat}>
            
        </main>

        <aside className={styles.aside}>
            <header>
                <button>Logout</button>
            </header>
            <ul className={styles.memberList}>
                <li className={styles.memberListItem}>Member 1</li>
                <li className={styles.memberListItem}>Member 2</li>
                <li className={styles.memberListItem}>Member 3</li>
            </ul>
        </aside>

        <Form className={styles.inputArea}>
            <Form.Control
                className={styles.inputField}
                autoComplete="off"
                type="text"
                placeholder="Type your message"
            />
        </Form>
    </div>
);

export default ChatPage;
