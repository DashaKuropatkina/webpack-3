import React, { FC } from 'react';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList/MessageList';
import { useParams, Redirect } from 'react-router-dom';
import { ChatList } from '../components/ChatList/ChatList';

export const Chats: FC<any> = ({ msgs }) => {
    const { chatId } = useParams<{ chatId?: string }>();

    if (chatId && !msgs[chatId]) {
        return <Redirect to="/chats" />;
    }

    return (
        <>
            <ChatList />
            <MessageList messages={chatId ? msgs[chatId] : []} />
            <Form />
        </>
    );
};