import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { profileReducer, ProfileState } from './profile/reducer';
import { chatListReducer, Chat } from './chatlist/reducer';
import { messagesReducer, MessageState } from './messages/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chatlist: Chat[];
  messages: MessageState;
}

const persistConfig = {
  key: 'root',
  storage, blacklist: ['profile'],
}

const rootReducer = combineReducers({
  messages: messagesReducer,
  profile: profileReducer,
  chatlist: chatListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);