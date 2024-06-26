import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOGeds8XA3GYS6MTGrxMzHSEaE9y0HWxU",
  authDomain: "hack2024-8d042.firebaseapp.com",
  databaseURL: "https://hack2024-8d042-default-rtdb.firebaseio.com",
  projectId: "hack2024-8d042",
  storageBucket: "hack2024-8d042.appspot.com",
  messagingSenderId: "1012739087515",
  appId: "1:1012739087515:web:e6b2cf9eb73cc63c3f7a3e",
  measurementId: "G-YTCD0KZH9G",
  databaseURL: "https://hack2024-8d042-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);