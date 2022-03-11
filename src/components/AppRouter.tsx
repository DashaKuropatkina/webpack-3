import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutWithConnect } from '../pages/About';
import { Chats } from '../pages/Chats';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';
import { ChatList } from './ChatList/ChatList';
import { NavBar } from './NavBar/NavBar';

export const AppRouter: FC = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/chats" component={ChatList} />
            <Route path="/chats/:chatId" component={Chats} />
            <Route exact path="/about" component={AboutWithConnect} />
            <Route exact path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);