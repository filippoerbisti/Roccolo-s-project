import React, { useEffect, useState }  from 'react';
import toast from 'react-hot-toast';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from '../context/AuthContext';

import { 
    doc,  
    getDoc 
  } from 'firebase/firestore';
import { database } from '../utils/firebase';

const Login = () => {
    const { t } = useTranslation('common');

    const { user, login } = useAuth();
    const [data, setData] = useState({
      email: '',
      password: '',
    });
    const [recEmail, setRecEmail] = useState('');

    useEffect(() => {
        var modalRecPsw = document.getElementById("modalRecPsw");
        var btnOpenModalRecPsw = document.getElementById("btnRecPsw");
        var closeModalRecPsw = document.getElementsByClassName("close-modal-rec-psw")[0];

        btnOpenModalRecPsw.onclick = function() {
            modalRecPsw.style.display = "flex";
            modalRecPsw.style.alignItems = "center";
        }

        closeModalRecPsw.onclick = function() {
            modalRecPsw.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modalRecPsw) {
                modalRecPsw.style.display = "none";
            }
        }
    });
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(data.email, data.password);
      } catch (err) {
        console.log(err);
        toast.error(`${t('errorCredential')}`);
      }
    };

    const checkEmailRecPsw = async (e) => {
        e.preventDefault();

        try {
            if(recEmail !== '') {
                getDoc(doc(database, "user_document", recEmail)).then(async docSnap => {
                    if (docSnap.exists()) {
                        await sendRecEmail(recEmail);
                        setRecEmail('');
                        modalRecPsw.style.display = "none";
                    }
                    else {
                        toast.error(`${t('notAllowRecPsw')}`);
                    }
                })
            } else {
                toast.error(`${t('missEmail')}`);
            }
        } catch (err) {
            console.log(err);
            toast.error(`${t('errorEmail')}`);
        }
    }

    const sendRecEmail = async () => {
        let password = recEmail.substring(0, 4) + 'R23!';
        let message = 'La password di recupero è: ' + password;

        const templateParams = {
            // from_name: fullname,
            from_email: recEmail,
            to_name: 'Roccolo del Lago',
            // subject: subject,
            message: message,
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then((result) => {
            setRecEmail('');
            toast.success(`${t('checkInbox')}`);
        }, (error) => {
            toast.error(`${t('errorEmail')}`);
        });
    }

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
                <form>
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
                            placeholder="Email"
                            className="form__field" 
                        />
                        <label htmlFor="email" className="form__label">Email</label>
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
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            type="password"
                            placeholder="Password"
                            className="form__field"
                        />
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>
                    <div>
                        <button id="btnRecPsw" className='btn-link-rec-psw'>{t('recoveryPassword')}</button>
                        <div id="modalRecPsw" className="modal-rec-psw">
                            <div className="modal-content-rec-psw">
                                <span className="close-modal-rec-psw">&times;</span>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <p style={{fontSize: 'small'}}>{t('modalRecoveryText')}</p>
                                    <input 
                                        type="text"
                                        placeholder="Email" 
                                        onChange={(e) =>
                                            setRecEmail(e.target.value)
                                        }
                                        value={recEmail}
                                        className="form__field" 
                                        style={{width: '80%', marginTop: '10px', color: 'black'}}
                                    />
                                    <button className='btn-send-rec-psw' onClick={checkEmailRecPsw}>{t('send')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='form-button-login' onClick={handleLogin}>{t('startTour')}</button>
                </form>
            </div>
        </div>
    )
}

export default Login
