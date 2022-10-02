import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { 
  doc,  
  setDoc 
} from 'firebase/firestore';
import { auth, database } from '../utils/firebase';

const Context = createContext();

export const StateContext = ({ children }) => {

  const signup = (data) => {
   let email = data.email;
   let password = email.substring(0, 4) + 'R23!';
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const createUserDoc = (user, data) => {
    if(data !== null) {
        let datebooking = data.dateBooking.getUTCDate() + "/" + (data.dateBooking.getUTCMonth() + 1) + "/" + data.dateBooking.getUTCFullYear();
        
        let date = new Date();
        let timestampEndAccessApp = date.setDate(data.dateBooking.getDate() + 6)
        let datetimeEndAccessApp = new Date(Number(timestampEndAccessApp))
        let dateEndAccessApp = datetimeEndAccessApp.getUTCDate() + "/" + datetimeEndAccessApp.getUTCMonth() + "/" + datetimeEndAccessApp.getUTCFullYear();
        
        setDoc(doc(database, "user_document", user.email), {
            userId: user.uid,
            name: data.name,
            surname: data.surname,
            email: data.email,
            newsletter: data.newsletter,
            tastingPackage: data.tastingPackage,
            nPeople: data.nPeople,
            nTasting: data.nTasting,
            dateBooking: datebooking,
            dateEndAccessApp: dateEndAccessApp,
            totalPaid: data.totalPaid,
            nPathsToComplete: 6,
            path1: false,
            path2: false,
            path3: false,
            path4: false,
            path5: false,
            path6: false,
        });
    }
  }

  return (
    <Context.Provider value={{ signup, createUserDoc }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
