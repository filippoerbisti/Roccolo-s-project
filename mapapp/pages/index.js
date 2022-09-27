import React from 'react';
import { Login, Loader, Main } from '../components';

import { useAuth } from '../context/AuthContext';

export default function Index() {

  const { user } = useAuth();
  const { authorizedDates } = useAuth();
  const { paths } = useAuth();
  
  return (
    <div>
      {/* If not logged in -> show Login */}
      {!user &&
        <Login />
      }

      {/* If logged in -> show main */}
      {user && authorizedDates && paths &&
        <Main user={user} authorizedDates={authorizedDates} paths={paths} />
      }
    </div>
  )
}
