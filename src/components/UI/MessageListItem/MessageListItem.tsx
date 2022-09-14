import classNames from 'classnames';

import styles from './MessageListItem.module.css';

export interface MessageListItemProps {
    className?: string;
    text: string;
    author: string;
    timestamp: number;
}

const MessageListItem = ({ author, text, timestamp, className }: MessageListItemProps): JSX.Element => (
    <li className={classNames(styles.messageListItem, className)}>
        <div className={styles.messageListItemHeader}>
            <b aria-label="Author:">{author}</b>
            <time>{new Date(timestamp).toLocaleTimeString()}</time>
        </div>
        <p className={styles.messageListItemBody}>{text}</p>
    </li>
);

export default MessageListItem;
