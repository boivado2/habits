// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4S60fPzraneU16lkiXBxNDlUazv50zko",
  authDomain: "habits-5f692.firebaseapp.com",
  projectId: "habits-5f692",
  storageBucket: "habits-5f692.appspot.com",
  messagingSenderId: "925571358754",
  appId: "1:925571358754:web:820a28b22bbbc6ed52ea7b",
  measurementId: "G-T3Q00Q01YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// export const auth = getAuth(app);