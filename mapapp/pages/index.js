import React, {useEffect, useState} from 'react';
import { Main } from '../components';
import Login from '../components/Login';

import { useAuth } from '../context/AuthContext';

export default function Index() {

  const { user } = useAuth();
  const { paths } = useAuth();

  return (
    <div>
      {!user &&
        <Login />
      }

      {user && paths &&
        <Main paths={paths} />
      }
    </div>
  )
}
