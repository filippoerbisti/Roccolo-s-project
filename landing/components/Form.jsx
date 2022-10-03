import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useStateContext } from '../context/StateContext';

import * as emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';

const FormButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    '&:disabled': {
        borderColor: 'rgba(255,255,255,0.5)',
        color: 'rgba(255,255,255,0.5)'
    },
  });

import { useRouter } from 'next/router';

import { 
  doc,  
  getDoc 
} from 'firebase/firestore';
import { database } from '../utils/firebase';

const Form = () => {
    const { t } = useTranslation('common');

    const { signup, createUserDoc } = useStateContext();

    let router = useRouter();

    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        newsletter: false,
        tastingPackage: '',
        nPeople: '',
        nTasting: '',
        dateBooking: '',
        totalPaid: 0
    });
    
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            if(data) {
                getDoc(doc(database, "user_document", data.email)).then(async docSnap => {
                    if (docSnap.exists()) 
                        toast.error(`${t('emailDuplicated')}`);
                    else {
                        await signup(data).then((result) => {
                            createUserDoc(result.user, data);
                            sendEmail(data);

                            setActiveStep(0);
                            setData({
                                name: '',
                                surname: '',
                                email: '',
                                newsletter: false,
                                tastingPackage: '',
                                nPeople: '',
                                nTasting: '',
                                dateBooking: '',
                                totalPaid: 0
                            });
                            toast.success(`${t('formSuccess')}`, {duration: 3000});
                        }, (error) => {
                            // toast.error(`${t('emailErr')}`);
                        });
                    }
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const sendEmail = async () => {
        let subject;
        let message;

        if (data) {  
            const fullname = capitalizeFirstLetter(data.name) + " " + capitalizeFirstLetter(data.surname); 
            let datebooking = data.dateBooking.getUTCDate() + "/" + (data.dateBooking.getUTCMonth() + 1) + "/" + data.dateBooking.getUTCFullYear(); 
            if (router.locale == 'it') {
                subject = `Degustazione Prenotata - Roccolo del Lago`;
                message = ('Hai prenotato la degustazione ' + data.tastingPackage+ 
                ' per ' + data.nTasting+' su ' +data.nPeople + 'persone totali il giorno ' + datebooking + "Credenziali di accesso all'app: email:" + data.email + 
                ', password:' + data.email.substring(0, 4) + 'R23!');
            } else if (router.locale == 'en') {
                subject = `Booked Tasting - Roccolo del Lago`;
                message = `
                    Hai prenotato la degustazione ${data.tastingPackage} per ${data.nTasting} su ${data.nPeople} totali il giorno ${datebooking}
                    Credenziali di accesso: email: ${data.email}, password ${data.email.substring(0, 4) + 'R23!'}
                `;
            }
            const templateParams = {
                from_name: fullname,
                from_email: data.email,
                to_name: 'Roccolo del Lago',
                subject: subject,
                message: message,
            }

            // Send email to ourselves -> info 
            // +++
            //Send email to client -> reminder
            emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then((result) => {
                setData({
                    name: '',
                    surname: '',
                    email: '',
                    newsletter: false,
                    tastingPackage: '',
                    nPeople: 0,
                    nTasting: 0,
                    dateBooking: '',
                    totalPaid: 0
                });
                // toast.dismiss(toastLoading);
                // toast.success(`${t('emailOk')}`);
            }, (error) => {
                // toast.error(`${t('emailErr')}`);
            });

            //Subscribe Newsletter
            if (data.newsletter) {
                const res = await fetch('/api/newsletter', {
                    body: JSON.stringify({
                        email: data.email,
                        status: 'subscribed'
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                });
            }
        } else {
            toast.error('dc');
        }
    }

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ width: '500px' }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {/* Step 1: Registration */}
                <Step>
                    <StepLabel>
                        {t('formSubTitle1')}
                    </StepLabel>
                    <StepContent>
                        <form onSubmit={handleSignup}>
                            <div className='inputs-form'>
                                <div>
                                    <input 
                                        type="text" 
                                        className='txt-input'
                                        placeholder={t('name')} 
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                name: e.target.value,
                                            })
                                        }
                                        value={data.name}
                                        required
                                    />
                                    {/* {data.name == '' && <p style={{fontSize: 'small', color: 'red', opacity: '0.6'}}>{t('required')}</p>} */}
                                </div>
                                <div>
                                    <input 
                                        type="text" 
                                        className='txt-input'
                                        placeholder={t('surname')} 
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                surname: e.target.value,
                                            })
                                        }
                                        value={data.surname}
                                        required
                                    />
                                    {/* {data.surname == '' && <p style={{fontSize: 'small', color: 'red', opacity: '0.6'}}>{t('required')}</p>} */}
                                </div>
                            </div>
                            <div className='inputs-form'>
                                <input 
                                    type="email" 
                                    className='txt-input'
                                    placeholder={t('email')} 
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            email: e.target.value,
                                        })
                                    }
                                    value={data.email}
                                    required
                                />
                                {/* {data.email == '' && <p style={{fontSize: 'small', color: 'red', opacity: '0.6'}}>{t('required')}</p>} */}
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px', marginTop: '10px'}}>
                                <input 
                                    type="checkbox" 
                                    id="newsletter" 
                                    name="newsletter" 
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            newsletter: e.target.checked,
                                        })
                                    }
                                    value={data.newsletter}
                                />
                                <label htmlFor="newsletter" style={{marginLeft: '10px'}}>{t('newsletterChkbx')}</label>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px', marginTop: '10px'}}>
                                <input type="checkbox" id="privacy" name="privacy"  checked disabled />
                                <label htmlFor="privacy" style={{marginLeft: '10px'}}>{t('privacyChkbx')} <span style={{color: 'red'}}>*</span></label>
                            </div>
                        </form>
                        <div>
                            {(data.name && data.surname && data.email) &&
                                <FormButton
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {t('formContinueBtn')}
                                </FormButton>
                            }
                            {(!data.name || !data.surname || !data.email) &&
                                <FormButton
                                    variant="contained"
                                    sx={{ mt: 1, mr: 1 }}
                                    disabled={true}
                                >
                                    {t('formContinueBtn')}
                                </FormButton>
                            }
                        </div>
                    </StepContent>
                </Step>

                {/* Step 2: Reservation */}
                <Step>
                    <StepLabel>
                        {t('formSubTitle2')}
                    </StepLabel>
                    <StepContent>
                        <form>
                            <div className='inputs-form mt-2.5'>
                                <label className="select-tasting" htmlFor="tastings">
                                    <select 
                                        id="tastings" 
                                        required="required"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                tastingPackage: e.target.value,
                                            })
                                        }
                                        defaultValue={data.tastingPackage}
                                    >
                                        <option value="" disabled="disabled" selected="selected">{t('selectTasting')}</option>
                                        <option value={t('proposal1')}>{t('proposal1')} (15€)</option>
                                        <option value={t('proposal2')}>{t('proposal2')} (30€)</option>
                                        <option value={t('proposal3')}>{t('proposal3')} (45€)</option>
                                    </select>
                                </label>
                                {/* {data.tastingPackage == '' && <p style={{fontSize: 'small', color: 'red', opacity: '0.6'}}>{t('required')}</p>} */}
                            </div>
                            <div className='inputs-form'>
                                <DatePicker 
                                    selected={data.dateBooking} 
                                    className='txt-input'
                                    onChange={(date) => 
                                        setData({
                                            ...data,
                                            dateBooking: date,
                                        })
                                    } 
                                    placeholderText="Please select a date"
                                />
                                {/* {data.dateBooking == '' && <p style={{fontSize: 'small', color: 'red', opacity: '0.6'}}>{t('required')}</p>} */}
                            </div>
                            <div className='inputs-form'>
                                <div>
                                    <input 
                                        type="number" 
                                        className='txt-input'
                                        placeholder={t('totPerson')} 
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                nPeople: e.target.value,
                                            })
                                        }
                                        value={data.nPeople}
                                        required
                                    />
                                    {/* {data.nPeople == 0 && <p style={{fontSize: 'small', color: 'red', opacity: '0.6'}}>{t('required')}</p>} */}
                                </div>
                                <div>
                                    <input 
                                        type="number" 
                                        className='txt-input'
                                        placeholder={t('totPackage')} 
                                        onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    nTasting: e.target.value,
                                                })
                                        }
                                        value={data.nTasting}
                                        required
                                    />
                                    {/* {data.nTasting == 0 && <p style={{fontSize: 'small', color: 'red', opacity: '0.6'}}>{t('required')}</p>} */}
                                </div>
                            </div>
                        </form>
                        <div>
                            {(data.tastingPackage && data.dateBooking && data.nPeople != 0 && data.nTasting != 0) &&
                                <FormButton
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {t('formContinueBtn')}
                                </FormButton>
                            }
                            {(!data.tastingPackage || !data.dateBooking || data.nPeople == 0 || data.nTasting == 0) &&
                                <FormButton
                                    variant="contained"
                                    sx={{ mt: 1, mr: 1 }}
                                    disabled={true}
                                >
                                    {t('formContinueBtn')}
                                </FormButton>
                            }
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                {t('formBackBtn')}
                            </Button>
                        </div>
                    </StepContent>
                </Step>

                {/* Step 3: Checkout */}
                <Step>
                    <StepLabel>
                        {t('formSubTitle3')}
                    </StepLabel>
                    <StepContent>
                        <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                            <h4>{t('total')}: <span>{data.totalPaid} €</span></h4>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                            <button 
                                onClick={handleSignup}
                                style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px', color: '#4379FF'}}
                            >
                                {t('payWith')} Stripe
                            </button>
                            <button 
                                onClick={handleSignup}
                                style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginLeft: '10px', marginTop: '10px', color: '#009cde'}}
                            >
                                {t('payWith')} Paypal
                            </button>
                        </div>
                        <div>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                {t('formBackBtn')}
                            </Button>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>
        </Box>
    )
}

export default Form