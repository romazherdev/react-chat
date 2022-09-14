import { createRef, FormEvent, ChangeEvent, useContext, useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@tanstack/react-query';

import MessageList from '../../UI/MessageList/MessageList';
import MessageListItem from '../../UI/MessageListItem/MessageListItem';
import { sendMessageRequest } from '../../../api';
import { UserContext } from '../../../contexts/UserContext';
import { useMessages } from '../../../hooks';

import styles from './Chat.module.css';

export const Chat = (): JSX.Element => {
    const chatRef = createRef<HTMLElement>();

    const [text, setText] = useState('');
    const { data: messages, refetch, isFetched: messagesFetched } = useMessages();
    const { mutate: sendMessage } = useMutation(sendMessageRequest);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (messagesFetched) {
            chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight);
        }
    }, [messagesFetched]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        sendMessage({
            text,
            timestamp: Date.now(),
            author: {
                id: user.id,
                username: user.username,
            },
        });
        setText('');
        refetch();
    };

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className={styles.chat}>
            <main ref={chatRef} className={styles.chatBody}>
                <MessageList>
                    {messages?.map(msg => (
                        <MessageListItem
                            key={msg.id}
                            author={msg.author.username}
                            text={msg.text}
                            timestamp={msg.timestamp}
                            self={msg.author.id === user.id}
                        />
                    ))}
                </MessageList>
            </main>

            <Form className={styles.inputArea} onSubmit={handleSubmit}>
                <Form.Control
                    className={styles.inputField}
                    autoComplete="off"
                    type="text"
                    placeholder="Type your message"
                    required
                    value={text}
                    onChange={handleTextChange}
                />

                <Button type="submit" variant="light">Send</Button>
            </Form>
        </div>
    );
}

export default Chat;
