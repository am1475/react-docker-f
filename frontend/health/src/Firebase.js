import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0RfErzS30ydY4MVEr48CA-PJdJhOOoZc",
    authDomain: "react-docker-32645.firebaseapp.com",
    projectId: "react-docker-32645",
    storageBucket: "react-docker-32645.firebasestorage.app",
    messagingSenderId: "705223000156",
    appId: "1:705223000156:web:287af89ec2fb8188ba6699",
    measurementId: "G-4VEMRW75KT"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
