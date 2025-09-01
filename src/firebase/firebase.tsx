// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0hwwkxu-2m50JjHpU4y2oxmpPdEoYbec",
  authDomain: "aceofbladesclone.firebaseapp.com",
  projectId: "aceofbladesclone",
  storageBucket: "aceofbladesclone.firebasestorage.app",
  messagingSenderId: "316916598888",
  appId: "1:316916598888:web:82e51c870f49e6a56e93dd",
  measurementId: "G-Q11J50XWYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export { auth, app };
