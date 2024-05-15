import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc, updateDoc, query, where, getDocs} from "firebase/firestore"; // Importing firestore functions
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
const auth = getAuth(app);
const firestore = getFirestore(app); // Initialize firestore

export { getStorage, ref, uploadBytesResumable, getDownloadURL, query, getDocs, where, getFirestore, updatePassword, auth, EmailAuthProvider, reauthenticateWithCredential, firestore, updateDoc, getDoc, doc, collection, addDoc, signInWithEmailAndPassword, createUserWithEmailAndPassword }; // Exporting firestore functions along with auth
