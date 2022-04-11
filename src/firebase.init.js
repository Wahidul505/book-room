import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEgrZIi7wjjYkvpNCye9smqe9XTi407Rs",
  authDomain: "book-room-93ae5.firebaseapp.com",
  projectId: "book-room-93ae5",
  storageBucket: "book-room-93ae5.appspot.com",
  messagingSenderId: "180591327299",
  appId: "1:180591327299:web:f125b26dcfa298c0e13cf6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;