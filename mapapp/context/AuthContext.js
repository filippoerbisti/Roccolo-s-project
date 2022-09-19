import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
} from 'firebase/firestore';
import { auth, database } from '../utils/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [paths, setPaths] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        getDoc(doc(database, "paths", user.uid)).then(docSnap => {
          if (docSnap.exists())
            setPaths(docSnap.data());
        })
      } else {
        setUser(null);
      }
      setLoading(false);
    })

    return () => unsubscribe();
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, paths, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}