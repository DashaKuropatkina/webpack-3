import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutWithConnect } from '../pages/About';
import { Articles } from '../pages/Articles';
import { Chats } from '../pages/Chats';
import { Events } from '../pages/Events';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';
import { SignIn } from '../pages/SignIn';
import { ChatList } from './ChatList/ChatList';
import { NavBar } from './NavBar/NavBar';
import PrivateRoute from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter: FC = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <PublicRoute restricted={false} exact path="/" component={Main} />
            <PrivateRoute path="/chats">
                <Route exact path="/chats" component={ChatList} />
                <Route path="/chats/:chatId" component={Chats} />
            </PrivateRoute>
            <PublicRoute restricted={false} exact path="/about" component={AboutWithConnect} />
            <PublicRoute restricted={false} exact path="/profile" component={Profile} />
            <PublicRoute restricted={false} exact path="/articles" component={Articles} />
            <PublicRoute restricted={false} exact path="/events" component={Events} />
            <PublicRoute restricted={true} exact path="/signin" component={SignIn} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);