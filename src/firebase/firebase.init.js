// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmn2hPqhsxyLcc1_yyLk7rbqg86arSB3M",
  authDomain: "ed-tech-website-firebase.firebaseapp.com",
  projectId: "ed-tech-website-firebase",
  storageBucket: "ed-tech-website-firebase.appspot.com",
  messagingSenderId: "714609999776",
  appId: "1:714609999776:web:cdf2a5e651986c8fac6ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;