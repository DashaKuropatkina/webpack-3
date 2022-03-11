export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const CREATE_MESSAGE_CHAT = 'MESSAGES::CREATE_MESSAGE_CHAT';
export const DELETE_MESSAGE_CHAT = 'MESSAGES::DELETE_MESSAGE_CHAT';

interface Message {
    text: string;
    author: string;
    chatId: string;
}

export const addMessage = (message: Message) => ({
    type: ADD_MESSAGE,
    text: message.text,
    author: message.author,
    chatId: message.chatId,
});

export const createMessageChat = (chatId: string) => ({
    type: CREATE_MESSAGE_CHAT,
    chatId,
});

export const deleteMessageChat = (chatId: string) => ({
    type: DELETE_MESSAGE_CHAT,
    chatId,
})