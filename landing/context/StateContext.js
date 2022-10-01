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

    const [user, setUser] = useState(null);

    useEffect(() => {
        // onAuthStateChanged
        const unsubscribe = onAuthStateChanged(auth, (user, data) => {
            if (user !== null) 
                setUser({
                  uid: user.uid,
                  email: user.email
                });
            else
                setUser(null);
        })
        return () => unsubscribe();
    });

  const signup = (email) => {
   let password = email.split('@')[0];
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const createUserDoc = (user, data) => {
    // if(user !== null && data !== "undefined") {
        setDoc(doc(database, "user_document", user.email), {
            // userId: user.uid,
            name: data.name,
            surname: data.surname,
            email: user.email,
            newsletter: data.newsletter,
            tastingPackage: data.tastingPackage,
            nPeople: data.nPeople,
            nTasting: data.nTasting,
            dateBooking: data.dateBooking,
            dateEndAccessApp: (data.dateBooking), //+ 6 day
            totalPaid: data.totalPaid,
            nPathsToComplete: 6,
            path1: false,
            path2: false,
            path3: false,
            path4: false,
            path5: false,
            path6: false,
        });
    // }
  }

  return (
    <Context.Provider value={{ signup, createUserDoc }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);