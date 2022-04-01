import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCmw5xGr_DkWgzzyy2r4oJWeEwIOnX3ZKQ",
    authDomain: "webpack-3.firebaseapp.com",
    projectId: "webpack-3",
    storageBucket: "webpack-3.appspot.com",
    messagingSenderId: "671136455503",
    appId: "1:671136455503:web:2e95e73eb99b7907cb433a"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
    await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
    await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');

export const getChatListById = (id: string) => ref(db, `chats/${id}`);

export const getMessagesRefId = (chatId: string) =>
    ref(db, `messages/${chatId}`);

export const getMessageListRefId = (chatId: string, msgId: string) =>
    ref(db, `messages/${chatId}/messageList/${msgId}`);