import React, { useRef, useState, FC, useEffect } from "react";
import { Input, Button } from '@mui/material';

interface Message {
    text: string;
    author: string;
}

interface FormProps {
    addMessage: (message: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
    const [text, setText] = useState('');

    const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        addMessage({
            text,
            author: 'User'
        });
        setText('');
    };

    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    });

    return (
        <form onSubmit={handleText}>
            <Input ref={ref} value={text} onChange={(ev) => setText(ev.target.value)} />
            <Button variant="contained" type="submit">Send</Button>
        </form>
    );
}