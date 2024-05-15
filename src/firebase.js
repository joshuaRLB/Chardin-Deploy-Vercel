import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyBmRUKC8Cj6LcSu7sCXOs-_ijIWm8dsxa8",
    authDomain: "chardin-davao.firebaseapp.com",
    projectId: "chardin-davao",
    storageBucket: "chardin-davao.appspot.com",
    messagingSenderId: "620440454143",
    appId: "1:620440454143:web:018728b792a29823791dca",
    measurementId: "G-E5NDPTLS6S"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


