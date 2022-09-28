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
        <Box sx={{ maxWidth: '800px' }}>
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
                                    style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginRight: '10px'}}
                                />
                                <input type="text" placeholder='Cognome' 
                                    style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginRight: '10px'}}
                                />
                            </div>
                            <div style={{marginTop: '10px'}}>
                                <input type="email" placeholder='Email' 
                                    style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginRight: '10px'}}
                                />
                                <input type="password" placeholder='Password' 
                                    style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginRight: '10px'}}
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
                                <input type="number" placeholder='N. Persone' 
                                    style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginRight: '10px'}} 
                                />
                                <input type="number" placeholder='N. Persone Degustazione'
                                    style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginRight: '10px'}}
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
                            <button style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginRight: '10px'}}>Paga con Stripe</button>
                            <button style={{border: '1px solid black', padding: '5px 10px', borderRadius: '25px', marginLeft: '10px'}}>Paga con Paypal</button>
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