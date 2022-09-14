import classNames from 'classnames';

import Badge from 'react-bootstrap/Badge';

import styles from './MessageListItem.module.css';

export interface MessageListItemProps {
    text: string;
    author: string;
    timestamp: number;
    self?: boolean;
    className?: string;
}

const MessageListItem = ({ author, text, timestamp, className, self = false }: MessageListItemProps): JSX.Element => (
    <li className={classNames(styles.messageListItem, className, {
        [styles.messageListItemSelf]: self
    })}>
        <div className={styles.messageListItemHeader}>
            <b aria-label="Author:">{author} {self ? <sup><Badge bg="secondary">You</Badge></sup> : null}</b>
            <time>{new Date(timestamp).toLocaleTimeString()}</time>
        </div>
        <p className={styles.messageListItemBody}>{text}</p>
    </li>
);

export default MessageListItem;
