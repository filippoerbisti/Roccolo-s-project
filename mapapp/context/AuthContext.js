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
  setDoc 
} from 'firebase/firestore';
import { auth, database } from '../utils/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [paths, setPaths] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    })

    // if user is not empty do:
    if(user) {
      getDoc(doc(database, "user_paths", user.email)).then(docSnap => {
        if (docSnap.exists())
          setPaths(docSnap.data());
        else {
          setDoc(doc(database, "user_paths", user.email), {
            id: user.uid,
            path1: false,
            path2: false,
            path3: false,
            path4: false,
            path5: false,
            path6: false,
            userId: user.uid,
            userMail: user.email
          });
          getDoc(doc(database, "user_paths", user.email)).then(docSnap => {
            setPaths(docSnap.data());
          });
        }
      })
    }

    return () => unsubscribe();
  }, [paths]);

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