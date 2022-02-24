import React, { FC, useEffect, useState, useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { nanoid } from 'nanoid';
import { Main } from './pages/Main';
import { Chats } from './pages/Chats';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar/NavBar';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/chats">
                    <Redirect to="/chats/1" />
                </Route>
                <Route path="/chats/:chatId" component={Chats} />
                <Route exact path="/about" component={About} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};