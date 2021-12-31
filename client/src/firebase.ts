
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBbJtoAJAvKZbLZ1KCtvG9hQfUCP4ISY9o",
  authDomain: "linked-link-21cea.firebaseapp.com",
  projectId: "linked-link-21cea",
  storageBucket: "linked-link-21cea.appspot.com",
  messagingSenderId: "722600668480",
  appId: "1:722600668480:web:0eb63c2f1df3093ec5dea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage()