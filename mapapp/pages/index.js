import React, {useEffect, useState} from 'react';
import { Main } from '../components';
import Login from '../components/Login';
import NoAuthPeriod from '../components/NoAuthPeriod';

import { useAuth } from '../context/AuthContext';

export default function Index() {

  const { user } = useAuth();
  const { authorizedDates } = useAuth();
  const { paths } = useAuth();
  const [isAuthPeriod, setIsAuthPeriod] = useState(false);

  useEffect(() => {
    if (authorizedDates) {
      var start = new Date(authorizedDates.start_date.toDate()).getTime();
      var end = new Date(authorizedDates.end_date.toDate()).getTime();
      var today = new Date().getTime();

      if (today >= start && today <= end)
        setIsAuthPeriod(true);
    }
  }, [isAuthPeriod]);
  
  return (
    <div>
      {/* If not logged in -> show Login */}
      {!user &&
        <Login />
      }

      {/* If logged in: */}
      {/* If logged in && Date.Now is BETWEEN the fixed initial date (choose by user on pay) and the following 6 days (inclusive) */}
      {isAuthPeriod &&
        user && paths &&
          <Main paths={paths} />
      }

      {/* If logged in && Date.Now is NOT BETWEEN the fixed initial date (choose by user on pay) and the following 6 days (inclusive) */}
      {!isAuthPeriod &&
        <NoAuthPeriod />
      }
    </div>
  )
}
