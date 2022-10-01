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

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     // onAuthStateChanged
    //     const unsubscribe = onAuthStateChanged(auth, (user, data) => {
    //         if (user !== null) 
    //             setUser({
    //               uid: user.uid,
    //               email: user.email
    //             });
    //         else
    //             setUser(null);
    //     })
    //     return () => unsubscribe();
    // });

  const signup = (data) => {
    console.log(data)
    createUserDoc(data);

   let email = data.email;
   let password = email.split('@')[0];
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const createUserDoc = (data) => {
    if(data !== null) {
        let datebooking = data.dateBooking.getUTCDate() + "/" + (data.dateBooking.getUTCMonth() + 1) + "/" + data.dateBooking.getUTCFullYear();
        let dateEndAccessApp = (data.dateBooking.getUTCDate() + 6) + "/" + (data.dateBooking.getUTCMonth() + 1) + "/" + data.dateBooking.getUTCFullYear();
        setDoc(doc(database, "user_document", data.email), {
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