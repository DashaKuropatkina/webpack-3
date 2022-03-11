import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './components/AppRouter';
import { store } from './store';

export interface Message {
    id: string;
    text: string;
    author: string;
}

export interface Messages {
    [key: string]: Message[];
}

export const App: FC = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>Загрузка...</div>}>
                <AppRouter />
            </Suspense>
        </Provider>
    );
};