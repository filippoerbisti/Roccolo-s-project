import React, {useEffect} from 'react';
import Login from '../components/Login';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';




export default function Home() {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  // useEffect(() => {
  //   // checks if the user is authenticated
  //   authContext.isUserAuthenticated()
  //   ? router.push("/dashboard")
  //   : router.push("/");
  // }, []);

  return (
    <div>
      <Login />
    </div>
  )
}
