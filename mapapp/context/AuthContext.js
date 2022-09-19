import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { 
  doc,  
  addDoc,
  getDoc, 
  collection
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

  const createDocFirebase = async (user) => {
    await login(auth);
    addDoc(collection(database, "paths"), {
      id: user.uid,
      path1: false,
      path2: false,
      path3: false,
      path4: false,
      path5: false,
      path6: false,
      userId: user.uid
    });
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