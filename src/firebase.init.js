// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD22523AVZE-cNGjKWtsnRIKn5eMtRuA3g",
  authDomain: "assignment-12-cd70c.firebaseapp.com",
  projectId: "assignment-12-cd70c",
  storageBucket: "assignment-12-cd70c.appspot.com",
  messagingSenderId: "324271992829",
  appId: "1:324271992829:web:18de54d4302bca3045b394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;