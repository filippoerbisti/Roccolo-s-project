import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  /*apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID*/
  apiKey: "AIzaSyCn6fPW5uKokPzmc6kXtHqTWUXzz6aX08c",
  authDomain: "mapapp-roccolo-66cb7.firebaseapp.com",
  projectId: "mapapp-roccolo-66cb7",
  storageBucket: "mapapp-roccolo-66cb7.appspot.com",
  messagingSenderId: "955389722598",
  appId: "1:955389722598:web:8353d08ed4966c926f2027",
  measurementId: "G-K52Y6WSQSD"
};

// Initialize Firebase

// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();