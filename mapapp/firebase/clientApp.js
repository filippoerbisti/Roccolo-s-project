// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyMm2p7YNykdt-QM-f8bG41edi_voEyPI",
  authDomain: "roccolo-del-lago.firebaseapp.com",
  projectId: "roccolo-del-lago",
  storageBucket: "roccolo-del-lago.appspot.com",
  messagingSenderId: "31736743738",
  appId: "1:31736743738:web:51ae2976efbeeed331b203",
  measurementId: "G-VYVF0CXXYZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);