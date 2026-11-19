import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBlQfJZjV-yxl5rOpJCb2qyijgRn2jzahw",
  authDomain: "summarist-34403.firebaseapp.com",
  projectId: "summarist-34403",
  storageBucket: "summarist-34403.firebasestorage.app",
  messagingSenderId: "1054046809670",
  appId: "1:1054046809670:web:9770e52073f605798b2447"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()