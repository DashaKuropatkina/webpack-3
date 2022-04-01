import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutWithConnect } from '../pages/About';
import { Articles } from '../pages/Articles';
import { Chats } from '../pages/Chats';
import { Events } from '../pages/Events';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { auth, messagesRef } from '../services/firebase';
import { authProfile } from '../store/profile/actions';
import { ChatList } from './ChatList/ChatList';
import { NavBar } from './NavBar/NavBar';
import PrivateRoute from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { onValue } from 'firebase/database';

export const AppRouter: FC = () => {
    const [msgs, setMsgs] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(authProfile(true))
            } else {
                dispatch(authProfile(false))
            }
        })
    }, [dispatch]);

    useEffect(() => {
        const unsubcribe = onValue(messagesRef, (msgSnap) => {
            const newMsgs: any = {};

            msgSnap.forEach((snapshot) => {
                if (snapshot.key) {
                    newMsgs[snapshot.key] = Object.values(snapshot.val().messageList || {});
                }
            });
            setMsgs(newMsgs);
        });
        return unsubcribe;
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <PublicRoute restricted={false} exact path="/" component={Main} />
                <PrivateRoute path="/chats">
                    <Route exact path="/chats" component={ChatList} />
                    <Route path="/chats/:chatId" render={() => <Chats msgs={msgs} />} />
                </PrivateRoute>
                <PublicRoute restricted={false} exact path="/about" component={AboutWithConnect} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PublicRoute restricted={false} exact path="/articles" component={Articles} />
                <PublicRoute restricted={false} exact path="/events" component={Events} />
                <PublicRoute restricted={true} exact path="/signin" component={SignIn} />
                <PublicRoute restricted={false} exact path="/signup" component={SignUp} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};