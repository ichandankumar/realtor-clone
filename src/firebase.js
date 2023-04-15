// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXvR_aLrO4S5a7GjlWDM-BSMpx6zTUYLI",
  authDomain: "realtor-clone-5e56a.firebaseapp.com",
  projectId: "realtor-clone-5e56a",
  storageBucket: "realtor-clone-5e56a.appspot.com",
  messagingSenderId: "687266029756",
  appId: "1:687266029756:web:5100d1809abbfc43fd30b9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()