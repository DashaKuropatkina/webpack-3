import React, { FC } from 'react';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList/MessageList';
import { useParams, Redirect } from 'react-router-dom';
import { ChatList } from '../components/ChatList/ChatList';
import { useSelector } from 'react-redux';
import { selectMessages } from './../store/messages/selectors';

export const Chats: FC = () => {
    const { chatId } = useParams<{ chatId?: string }>();
    const messages = useSelector(selectMessages);

    if (chatId && !messages[chatId]) {
        return <Redirect to="/chats" />;
    }

    return (
        <>
            <ChatList />
            <MessageList messages={chatId ? messages[chatId] : []} />
            <Form />
        </>
    );
};