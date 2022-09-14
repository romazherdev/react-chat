import styles from './MessageList.module.css';

export interface MessageListProps {
    children?: JSX.Element | JSX.Element[];
}

const MessageList = ({ children }: MessageListProps): JSX.Element => (
    <ul className={styles.messageList}>{children}</ul>
);

export default MessageList;
