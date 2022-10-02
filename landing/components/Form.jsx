import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useStateContext } from '../context/StateContext';

import * as emailjs from '@emailjs/browser';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';

const Form = () => {
    const { t } = useTranslation('common');

    const { signup, createUserDoc } = useStateContext();

    const [data, setData] = useState({
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
    
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await signup(data).then((result) => {
                createUserDoc(result.user, data);
                sendEmail(data);
            }, (error) => {
                // toast.error(`${t('emailErr')}`);
            });
        } catch (err) {
            console.log(err)
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const sendEmail = async () => {
        if (data) {  
            const fullname = capitalizeFirstLetter(data.name) + " " + capitalizeFirstLetter(data.surname); 
            let datebooking = data.dateBooking.getUTCDate() + "/" + (data.dateBooking.getUTCMonth() + 1) + "/" + data.dateBooking.getUTCFullYear(); 
            const subject = `Degustazione ${datebooking} - Roccolo del Lago`;
            const message = `
                Hai prenotato la degustazione ${data.tastingPackage} per ${data.nTasting} su ${data.nPeople} totali il giorno ${datebooking}
            `;
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
                        email: data.email
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
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <input 
                                    type="text" 
                                    placeholder={t('name')} 
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            name: e.target.value,
                                        })
                                    }
                                    value={data.name}
                                    required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                                <input 
                                    type="text" 
                                    placeholder={t('surname')} 
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            surname: e.target.value,
                                        })
                                    }
                                    value={data.surname}
                                    required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                                <input 
                                    type="email" 
                                    placeholder={t('email')} 
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            email: e.target.value,
                                        })
                                    }
                                    value={data.email}
                                    required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
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
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                {t('formContinueBtn')}
                            </Button>
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
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px', marginTop: '10px'}}>
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
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px', marginTop: '10px'}}>
                                <DatePicker 
                                    selected={data.dateBooking} 
                                    onChange={(date) => 
                                        setData({
                                            ...data,
                                            dateBooking: date,
                                        })
                                    } 
                                    placeholderText="Please select a date"
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                                <input 
                                    type="number" 
                                    placeholder={t('totPerson')} 
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            nPeople: e.target.value,
                                        })
                                    }
                                    // value={data.nPeople}
                                    required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}} 
                                />
                                <input 
                                    type="number" 
                                    placeholder={t('totPackage')} 
                                    onChange={(e) =>
                                            setData({
                                                ...data,
                                                nTasting: e.target.value,
                                            })
                                    }
                                    // value={data.nTasting}
                                    required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                        </form>
                        <div>
                            <Button
                                variant="contained"
                                onClick={handleSignup}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                {t('formContinueBtn')}
                            </Button>
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
                                style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px', color: '#4379FF'}}
                            >
                                {t('payWith')} Stripe
                            </button>
                            <button 
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