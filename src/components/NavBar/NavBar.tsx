import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const navigate = [
    {
        id: 1,
        to: '/',
        name: 'Главная',
    },
    {
        id: 2,
        to: '/chats',
        name: 'Чаты',
    },
    {
        id: 3,
        to: '/about',
        name: 'О нас',
    },
    {
        id: 4,
        to: '/profile',
        name: 'Профиль',
    },
    {
        id: 5,
        to: '/articles',
        name: 'Статьи',
    },
    {
        id: 6,
        to: '/events',
        name: 'Статьи',
    }
];

export const NavBar: FC = () => {
    return (
        <ul>
            {navigate.map((link) => {
                return (
                    <li key={link.id}>
                        <NavLink
                            to={link.to}
                            style={(isActive) => ({
                                color: isActive ? 'green' : 'blue',
                            })}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};