import * as React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  Paper,
  StepLabel,
  stepConnectorClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonalInfo from './PersonalInfo';
import CycleDetails from './CycleDetails';
import dayjs from 'dayjs';

const steps = ['Personal Info', 'Cycle Details'];

export default function OnboardingStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;

  const isLastStep = activeStep === totalSteps - 1;
  const allStepsCompleted = completedSteps === totalSteps;

  const activeColor = '#9a4f50';

  const init = {
    name: "",
    age: "",
    phone: "",
    email: "",
    avgPeriodLength: 5,
    avgCycleLength: 28,
    lastPeriodStartDate: dayjs('2022-04-17'),
    isPeriodRegular: true,
  };

  const CustomConnector = styled('div')(({ theme }) => ({
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: activeColor,
    },
  }));

  const CustomStepIcon = (props) => {
    const { active, completed, className } = props;

    return (
      <div
        className={className}
        style={{
          color: active || completed ? activeColor : '#ccc',
          fontWeight: active ? 'bold' : 'normal',
        }}
      >
        ●
      </div>
    );
  };

  const handleNext = () => {
    const nextStep =
      isLastStep && !allStepsCompleted
        ? steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(nextStep);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleStep = (step) => () => setActiveStep(step);

  const handleComplete = () => {
    setCompleted((prev) => ({ ...prev, [activeStep]: true }));
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo data={init} onComplete={handleComplete} />;
      case 1:
        return <CycleDetails data={init} onComplete={handleComplete} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Stepper
          alternativeLabel
          nonLinear
          activeStep={activeStep}
          connector={<CustomConnector />}
          sx={{ mb: 3 }}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)}>
                <StepLabel
                  StepIconComponent={CustomStepIcon}
                  sx={{
                    '& .MuiStepLabel-label': {
                      color: activeStep === index ? activeColor : '#999',
                      fontWeight: activeStep === index ? 700 : 500,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>

        {allStepsCompleted ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed – you're finished!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ minHeight: 200, mb: 3 }}>{getStepContent(activeStep)}</Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                Back
              </Button>

              {completed[activeStep] && (
                <Typography
                  variant="caption"
                  sx={{ display: 'inline-block', ml: 2 }}
                >
                  Step {activeStep + 1} already completed
                </Typography>
              )}
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Box>
  );
}
