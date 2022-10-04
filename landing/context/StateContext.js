import { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { 
  doc,
  setDoc 
} from 'firebase/firestore';
import { auth, database } from '../utils/firebase';
import useTranslation from 'next-translate/useTranslation';

const Context = createContext();

export const StateContext = ({ children }) => {

  const { t } = useTranslation('common');

  const [showMenu, setShowMenu] = useState(false);
  const [changeIconHamburgerMenu, setChangeIconHamburgerMenu] = useState(false);

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

        let tastingPackage;
        if (data.tastingPackage == 15)
          tastingPackage = `${t('proposal1')}`;
        else if (data.tastingPackage == 30)
          tastingPackage = `${t('proposal2')}`;
        else if (data.tastingPackage == 45)
          tastingPackage = `${t('proposal3')}`;

        setDoc(doc(database, "user_document", user.email), {
            userId: user.uid,
            name: data.name,
            surname: data.surname,
            email: data.email,
            newsletter: data.newsletter,
            tastingPackage: tastingPackage,
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
    <Context.Provider value={{ signup, createUserDoc, showMenu, setShowMenu, changeIconHamburgerMenu, setChangeIconHamburgerMenu }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
