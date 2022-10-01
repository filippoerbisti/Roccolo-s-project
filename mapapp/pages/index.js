import React from 'react';
import { Login, Loader, Main } from '../components';

import { useAuth } from '../context/AuthContext';

export default function Index() {

  const { user } = useAuth();
  const { userDoc } = useAuth();
  
  return (
    <div>
      {/* If not logged in -> show Login */}
      {!user &&
        <Login />
      }

      {/* If logged in -> show main */}
      {user && userDoc &&
        <Main user={user} userDoc={userDoc} />
      }
    </div>
  )
}
