import React, { useState, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { useFormik } from 'formik';

import validationSchema from './validationSchema';
import initialValues from './initialValues';
import steps from './steps';

import Botao from '~/components/Botao';
import { Container } from './styles';
import Api from '~/services/api';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function Formulario({ formik, onNext }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const data = formik.values.data;

  const scrollTop = () => {
    const el = document.getElementById('form-content');
    el.scrollTop = 0;
  };

  const handleNext = () => {
    if (activeStep === 5) {
      onNext();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    scrollTop();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    scrollTop();
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical">
        { steps.map((step) => {
          const Component = step.component;
          return (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Component formik={formik} />
                <div className={classes.actionsContainer}>
                  <div>
                    <Botao
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                      color="error"
                    >
                      Voltar
                    </Botao>
                    <Botao
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Próximo
                    </Botao>
                  </div>
                </div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Container>
);
}

export default memo(Formulario);
