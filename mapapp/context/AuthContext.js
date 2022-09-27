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
  const [loading, setLoading] = useState(true);
  const [authorizedDates, setAuthorizedDates] = useState(null);
  const [paths, setPaths] = useState(null);

  useEffect(() => {
    // onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser({
          uid: user.uid,
          email: user.email
        });
        if (user.uid) {
          if (authorizedDates == null)
            getAuthorizedDate(user);
          if (paths == null)
            getPaths(user);
        }
      } else {
        setUser(null);
        setAuthorizedDates(null);
        setPaths(null);
      }
      setLoading(false);
    })

    return () => unsubscribe();
  });

  const getAuthorizedDate = (user) => {
    if(user !== null) {
      getDoc(doc(database, "user_authorized_dates", user.email)).then(docSnap => {
        if (docSnap.exists())
          setAuthorizedDates(docSnap.data());

          //TODO: create on registration
        // else {
        //   setDoc(doc(database, "user_authorized_dates", user.email), {
        //     id: user.uid,
        //     path1: false,
        //     path2: false,
        //     path3: false,
        //     path4: false,
        //     path5: false,
        //     path6: false,
        //     userId: user.uid,
        //     userMail: user.email
        //   });
        //   getDoc(doc(database, "user_paths", user.email)).then(docSnap => {
        //     setPaths(docSnap.data());
        //   });
        // }
      })
    }
  }

  const getPaths = (user) => {
    if(user !== null) {
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
  }

  const signup = (email, password) => {    
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    window.location.reload();
    setUser(null);
    setAuthorizedDates(null);
    setPaths(null);
    await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, authorizedDates, paths, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}