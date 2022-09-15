import React, { useState }  from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const Login = () => {

    const router = useRouter();
    const { user, login } = useAuth();
    const [data, setData] = useState({
      email: '',
      password: '',
    });
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(data.email, data.password);
        router.push('/');
      } catch (err) {
        console.log(err)
      }
    };

    return (
        <div className='login'>
            <div className='form-login'>
                <img 
                    src="https://res.cloudinary.com/dl38nyo08/image/upload/v1660806591/Roccolo%20del%20Lago/logo_iidjdd.png"
                    width={240} 
                    height={100} 
                    // objectfit="contain"
                    className='cursor-pointer'
                />
                <h1>INIZIA IL TOUR</h1>
                <form onSubmit={handleLogin}>
                    <div className="form__group field">
                        <input
                            id='email' 
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    email: e.target.value,
                                })
                            }
                            value={data.email}
                            required
                            type="email"
                            placeholder="Enter email"
                            className="form__field" 
                        />
                        <label htmlFor="email" className="form__label">Username</label>
                    </div>
                    <div className="form__group field">
                        <input 
                            id='password'
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    password: e.target.value,
                                })
                            }
                            value={data.password}
                            required
                            pattern="[a-z0-9]{1,15}"
                            // title="Password should be digits (0 to 9) or alphabets (a to z)."
                            type="password"
                            placeholder="Password"
                            className="form__field"
                        />
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>
                    <button type="submit">ACCEDI</button>
                </form>
            </div>
        </div>
    )
}

export default Login