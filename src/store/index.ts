import { createStore, compose, combineReducers } from 'redux';
import { profileReducer, ProfileState } from './profile/reducer';
import { chatListReducer, Chat } from './chatlist/reducer';
import { messagesReducer, MessageState } from './messages/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chatlist: Chat[];
  messages: MessageState;
}

export const store = createStore(
  combineReducers({
    messages: messagesReducer,
    profile: profileReducer,
    chatlist: chatListReducer,
  }),
  composeEnhancers()
);