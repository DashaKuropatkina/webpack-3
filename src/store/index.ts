import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { profileReducer, ProfileState } from './profile/reducer';
import { chatListReducer } from './chatlist/reducer';
import { Chat } from './chatlist/types';
import { messagesReducer } from './messages/reducer';
import { MessageState } from './messages/types';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { articlesReducer, ArticlesState } from './articles/reducer';
import { eventsReducer, EventsState } from './events/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chatlist: Chat[];
  messages: MessageState;
  articles: ArticlesState;
  events: EventsState;
}

const persistConfig = {
  key: 'root',
  storage, blacklist: ['articles', 'events'],
}

const rootReducer = combineReducers({
  messages: messagesReducer,
  profile: profileReducer,
  chatlist: chatListReducer,
  articles: articlesReducer,
  events: eventsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);