import React, {useState} from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';

const Form = () => {
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
                        Registrazione
                    </StepLabel>
                    <StepContent>
                        <form>
                            <div>
                                <input type="text" placeholder='Nome' 
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                                <input type="text" placeholder='Cognome' 
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                            <div>
                                <input type="email" placeholder='Email' 
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                            <div style={{marginTop: '10px'}}>
                                <input type="checkbox" id="newsletter" name="newsletter" checked disabled />
                                <label htmlFor="newsletter" style={{marginLeft: '10px'}}>Newsletter</label>
                            </div>
                            <div style={{marginTop: '10px'}}>
                                <input type="checkbox" id="privacy" name="privacy" />
                                <label htmlFor="privacy" style={{marginLeft: '10px'}}>Privacy</label>
                            </div>
                        </form>
                        <div>
                            <Button
                                variant="outlined"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Continua
                            </Button>
                        </div>
                    </StepContent>
                </Step>

                {/* Step 2: Reservation */}
                <Step>
                    <StepLabel>
                        Prenotazione
                    </StepLabel>
                    <StepContent>
                        <form>
                            <div>
                                <label class="select-tasting" htmlFor="tastings">
                                    <select id="tastings" required="required">
                                        <option value="" disabled="disabled" selected="selected">Seleziona Degustazione</option>
                                        <option value="degustazione1">Degustazione 1 <span style={{textAlign:'right'}}>(15€)</span></option>
                                        <option value="degustazione2">Degustazione 2 (30€)</option>
                                        <option value="degustazione3">Degustazione 3 (45€)</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <input type="number" placeholder='Tot. Persone' 
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}} 
                                />
                                <input type="number" placeholder='Tot. Degustazioni'
                                    style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px'}}
                                />
                            </div>
                        </form>
                        <div>
                            <Button
                                variant="outlined"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Continua
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Back
                            </Button>
                        </div>
                    </StepContent>
                </Step>

                {/* Step 3: Checkout */}
                <Step>
                    <StepLabel>
                        Pagamento
                    </StepLabel>
                    <StepContent>
                        <div>
                            <h4>Totale: <span>100€</span></h4>
                        </div>
                        <div>
                            <button 
                                style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginRight: '10px', marginTop: '10px', color: '#4379FF'}}
                            >
                                Paga con Stripe
                            </button>
                            <button 
                                style={{border: '1px solid lightblue', padding: '5px 10px', borderRadius: '5px', marginLeft: '10px', marginTop: '10px', color: '#009cde'}}
                            >
                                Paga con Paypal
                            </button>
                        </div>
                        <div>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Back
                            </Button>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>
        </Box>
    )
}

export default Form