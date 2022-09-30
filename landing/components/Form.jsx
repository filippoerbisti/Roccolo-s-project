import React, {useState} from 'react';
import useTranslation from 'next-translate/useTranslation';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';

const Form = () => {
    const { t } = useTranslation('common');

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
                        <form>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <input type="text" placeholder={t('name')} required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                                <input type="text" placeholder={t('surname')} required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                                <input type="email" placeholder={t('email')} required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px', marginTop: '10px'}}>
                                <input type="checkbox" id="newsletter" name="newsletter" />
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
                                <label class="select-tasting" htmlFor="tastings">
                                    <select id="tastings" required="required">
                                        <option value="" disabled="disabled" selected="selected">{t('selectTasting')}</option>
                                        <option value="degustazione1">{t('proposal1')} (15€)</option>
                                        <option value="degustazione2">{t('proposal2')} (30€)</option>
                                        <option value="degustazione3">{t('proposal3')} (45€)</option>
                                    </select>
                                </label>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                                <input type="number" placeholder={t('totPerson')} required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}} 
                                />
                                <input type="number" placeholder={t('totPackage')} required
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
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
                            <h4>{t('total')}: <span>100€</span></h4>
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