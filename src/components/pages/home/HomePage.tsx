import Chat from '../../containers/Chat/Chat';
import ChatAside from '../../containers/ChatAside/ChatAside';

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
