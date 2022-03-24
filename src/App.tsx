import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './components/AppRouter';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export const App: FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <AppRouter />
                </Suspense>
            </PersistGate>
        </Provider>
    );
};