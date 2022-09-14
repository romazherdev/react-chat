import ChatAside from '../../UI/ChatAside/ChatAside';
import Chat from '../../UI/Chat/Chat';

import styles from './HomePage.module.css';

const HomePage = (): JSX.Element => {
    return (
        <div className={styles.page}>
            <Chat />
            <ChatAside />
        </div>
    );
};

export default HomePage;
