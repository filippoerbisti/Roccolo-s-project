import React, {useEffect} from 'react';
import { Main } from '../components';
import Login from '../components/Login';

import { useAuth } from '../context/AuthContext';

export default function Index() {

const { user } = useAuth();

  return (
    <div>
      {!user &&
        <Login />
      }

      {user && 
        <Main />
      }
    </div>
  )
}
