import React, {useEffect, useState} from 'react';
import { Main } from '../components';
import Login from '../components/Login';

import { useAuth } from '../context/AuthContext';

export default function Index() {

  const { user } = useAuth();
  const { authorizedDates } = useAuth();
  const { paths } = useAuth();
  const [isAuthPeriod, setIsAuthPeriod] = useState(false);

  useEffect(() => {
    if (authorizedDates) {
      var start = new Date(authorizedDates.start_date.toDate());
      var end = new Date(authorizedDates.end_date.toDate());
      var today = new Date();
      if (today >= start && today <= end)
        setIsAuthPeriod(true);
    }
  }, [isAuthPeriod]);

  return (
    <div>
      {!user &&
        <Login />
      }

      {isAuthPeriod &&
        user && paths &&
          <Main paths={paths} />
      }
    </div>
  )
}
