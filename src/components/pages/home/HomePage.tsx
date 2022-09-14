import { createRef, FormEvent, ChangeEvent, useContext, useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation, useQuery } from '@tanstack/react-query';

import { Message } from '../../../models/message';

import styles from './HomePage.module.css';
import MessageList from '../../UI/MessageList/MessageList';
import MessageListItem from '../../UI/MessageListItem/MessageListItem';
import ChatAside from '../../UI/ChatAside/ChatAside';
import { getMessages, sendMessage } from '../../../api';
import { UserContext } from '../../../contexts/UserContext';

const HomePage = (): JSX.Element => {
    const [text, setText] = useState('');
    const { data: messages, refetch } = useQuery<Message[]>(['messages'], getMessages, { refetchInterval: 1000 });
    const mutation = useMutation(sendMessage);
    const { user } = useContext(UserContext);
    const chatRef = createRef<HTMLElement>();

    useEffect(() => {
        chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight);
    }, []);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        mutation.mutate({
            id: uuidv4(),
            text,
            author: user,
            timestamp: Date.now(),
        });
        refetch();
        setText('');
    };

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className={styles.page}>
            <main ref={chatRef} className={styles.chat}>
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

            <ChatAside />
        </div>
    );
};

export default HomePage;
