import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

  apiKey: "AIzaSyDyMm2p7YNykdt-QM-f8bG41edi_voEyPI",

  authDomain: "roccolo-del-lago.firebaseapp.com",

  projectId: "roccolo-del-lago",

  storageBucket: "roccolo-del-lago.appspot.com",

  messagingSenderId: "31736743738",

  appId: "1:31736743738:web:51ae2976efbeeed331b203",

  measurementId: "G-VYVF0CXXYZ"

};

// Initialize Firebase

// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
