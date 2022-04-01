import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Chat } from '../../store/chatlist/types';
import { nanoid } from 'nanoid';
import { initChatsFB } from '../../store/chatlist/actions';
import { set, remove } from 'firebase/database';
import { getChatListById, getMessagesRefId } from '../../services/firebase';

export const ChatList: FC = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const chatList = useSelector((state: {
        chatlist: Chat[]
    }) => state.chatlist);

    useEffect(() => {
        dispatch(initChatsFB());
    }, []);

    const handleAddChat = () => {
        const id = nanoid();
        set(getChatListById(id), {
            id,
            name,
        });
        set(getMessagesRefId(id), {
            empty: true,
        });
        setName('');
    };

    const handleDeleteChat = (chatId: string) => {
        remove(getChatListById(chatId));
    };

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAddChat}>add chat</button>
            <ul>
                {chatList.map((chat) => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                        <button onClick={() => handleDeleteChat(chat.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};