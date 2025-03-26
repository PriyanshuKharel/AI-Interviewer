import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBirVa5aIEo3QoXvmCm6TOhMBjrol4t6nM",
  authDomain: "ai-interviewer-42e23.firebaseapp.com",
  projectId: "ai-interviewer-42e23",
  storageBucket: "ai-interviewer-42e23.firebasestorage.app",
  messagingSenderId: "899885870117",
  appId: "1:899885870117:web:86b2fd7b1238acb66da3cc",
  measurementId: "G-XVDYJW95BQ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
