import { createRef, FormEvent, useEffect, useState } from 'react';

import classNames from 'classnames';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@tanstack/react-query';

import { Message } from '../../../models/message';

import styles from './ChatPage.module.css';
import MessageList from '../../UI/MessageList/MessageList';
import MessageListItem from '../../UI/MessageListItem/MessageListItem';
import ChatAside from '../../UI/ChatAside/ChatAside';

const ChatPage = (): JSX.Element => {
    const { data: messages, isLoading } = useQuery<Message[]>(
        ['messages'],
        () => fetch('http://localhost:4000/messages').then(res => res.json()),
        // {
        //     refetchInterval: 500,
        // }
    );
    const chatRef = createRef<HTMLElement>();

    useEffect(() => {
        chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight);
    }, []);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className={styles.page}>
            <main ref={chatRef} className={styles.chat}>
                <MessageList>
                    {messages?.map(msg => (
                        <MessageListItem
                            author={msg.author.username}
                            text={msg.text}
                            timestamp={msg.timestamp}
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
                />

                <Button type="submit" variant="light">Send</Button>
            </Form>

            <ChatAside />
        </div>
    );
};

export default ChatPage;
