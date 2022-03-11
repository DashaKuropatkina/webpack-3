import { ADD_MESSAGE, CREATE_MESSAGE_CHAT, DELETE_MESSAGE_CHAT } from './actions';
import { Reducer } from 'redux';
import { nanoid } from 'nanoid';

interface Message {
    id: string;
    text: string;
    author: string;
}

export interface MessageState {
    [key: string]: Message[];
}

interface MessagesAction {
    type: string;
    text: string;
    author: string;
    chatId: string;
}

const initialChatList: MessageState = {}

export const messagesReducer: Reducer<MessageState, MessagesAction> = (
    state = initialChatList,
    action
) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.chatId]: [...state[action.chatId], {
                    id: nanoid(),
                    text: action.text,
                    author: action.author,
                }],
            };
        }
        case CREATE_MESSAGE_CHAT: {
            return {
                ...state,
                [action.chatId]: [],
            };
        }
        case DELETE_MESSAGE_CHAT: {
            const chats = { ...state };
            delete chats[action.chatId];

            return chats;
        }
        default: {
            return state;
        }
    }
};