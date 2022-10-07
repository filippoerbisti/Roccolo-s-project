import React from "react";
import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { 
  doc,  
  getDoc
} from 'firebase/firestore';
import { auth, database } from '../utils/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDoc, setUserDoc] = useState(null);

  useEffect(() => {
    // onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser({
          uid: user.uid,
          email: user.email
        });
        if (user.email) {
          if (userDoc == null)
            getUserDoc(user);
        }
      } else {
        setUser(null);
        setUserDoc(null);
      }
      setLoading(false);
    })

    return () => unsubscribe();
  });

  const getUserDoc = (user) => {
    if(user !== null) {
      getDoc(doc(database, "user_document", user.email)).then(docSnap => {
        if (docSnap.exists())
          setUserDoc(docSnap.data());
      })
    }
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserDoc(null);
    window.location.reload();
  }

  return (
    <AuthContext.Provider value={{ user, userDoc, login, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}