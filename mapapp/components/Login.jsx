import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='login'>
        <div className='form-login'>
            <img 
                src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
                width={240} 
                height={100} 
                objectFit="contain"
                className='cursor-pointer'
            />
            <h1>INIZIA IL TOUR</h1>
            <form>
            <div class="form__group field">
                    <input type="text" class="form__field" placeholder="Username" name="username" id='username' required />
                    <label for="username" class="form__label">Username</label>
                </div>
                <div class="form__group field">
                    <input type="password" class="form__field" placeholder="Password" name="password" id='password' required />
                    <label for="password" class="form__label">Password</label>
                </div>
            <button type="submit">ACCEDI</button>
            </form>
        </div>
    </div>
  )
}

export default Login