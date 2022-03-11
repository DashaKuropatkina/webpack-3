import React, { useState, FC } from "react";
import { Input, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { addMessage } from '../../store/messages/actions';
import { useParams } from "react-router";

export const Form: FC = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { chatId } = useParams<{ chatId?: string }>();

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (chatId) {
            dispatch(addMessage({
                chatId,
                text,
                author: 'User',
            })
            );
        }
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input value={text} onChange={(ev) => setText(ev.target.value)} />
            <Button variant="contained" type="submit">Send</Button>
        </form>
    );
};