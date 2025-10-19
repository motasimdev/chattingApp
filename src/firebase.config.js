// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXMXMM2ZLMFdnnasLa4U-RnL0oLjnDPh8",
  authDomain: "chatty-4a418.firebaseapp.com",
  projectId: "chatty-4a418",
  storageBucket: "chatty-4a418.firebasestorage.app",
  messagingSenderId: "250923634287",
  appId: "1:250923634287:web:c19de63e4a80d0e5f9879a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig