import React, { useState, FC } from "react";
import { Input, Button } from '@mui/material';
import { useParams } from "react-router";
import { AUTHORS } from "../../constants";
import { nanoid } from "nanoid";
import { getMessageListRefId } from "../../services/firebase";
import { set } from "firebase/database";

export const Form: FC = () => {
    const [text, setText] = useState('');
    const { chatId } = useParams<{ chatId?: string }>();

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (chatId) {
            const id = nanoid();
            set(getMessageListRefId(chatId, id), {
                id,
                text,
                author: AUTHORS.user,
            });
        };
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input value={text} onChange={(ev) => setText(ev.target.value)} />
            <Button variant="contained" type="submit">Send</Button>
        </form>
    );
};