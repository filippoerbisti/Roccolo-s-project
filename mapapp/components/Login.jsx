import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='login'>
        <img 
            src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
            width={240} 
            height={100} 
            objectFit="contain"
            className='cursor-pointer'
        />
        <form>
          <h1>Please sign in</h1>

          <div>
            <input type="email" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit">Sign in</button>
        </form>
    </div>
  )
}

export default Login