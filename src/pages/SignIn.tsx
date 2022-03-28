import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { authProfile } from '../store/profile/actions';
import { useDispatch } from 'react-redux';

export const SignIn: FC<RouteComponentProps> = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (login !== 'gb' || password !== 'gb') {
            setError('Логин или пароль не верны');
        } else {
            dispatch(authProfile(true));

            props.history.push('/chats');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Login:</p>
            <input type="text" onChange={(e) => setLogin(e.target.value)} />
            <p>Password:</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}