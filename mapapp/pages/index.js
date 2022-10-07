import React from 'react';
import { Login, Main } from '../components';

import { client } from '../lib/client';

import { useAuth } from '../context/AuthContext';

export default function Index({ stages }) {

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
        <Main user={user} userDoc={userDoc} stages={stages} />
      }
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "stage"]';
  const stages = await client.fetch(query);

  return {
    props: { stages }
  }
}
