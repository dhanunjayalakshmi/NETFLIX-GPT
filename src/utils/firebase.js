// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfQ9D40q4K_aGyAaLafn-5yxSgkCysrvs",
  authDomain: "netflix-gpt-b768d.firebaseapp.com",
  projectId: "netflix-gpt-b768d",
  storageBucket: "netflix-gpt-b768d.appspot.com",
  messagingSenderId: "911756523243",
  appId: "1:911756523243:web:6f32005e5b3b14051b30ae",
  measurementId: "G-1RGGLDLRQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
