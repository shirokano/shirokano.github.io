import React, { useContext, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { PageContext } from '../../common/PageContext';

interface VerticalStepperProps {
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const steps = ['', '', ''];

export default function VerticalStepper({ setSelected }: VerticalStepperProps) {
  const [isPageAtTop] = useContext(PageContext);
  const [activeStep, setActiveStep] = useState(0);
  const [completed] = useState<{ [k: number]: boolean }>({});

  const totalSteps = () => {
    return steps.length;
  };

  // const completedSteps = () => {
  //   return Object.keys(completed).length;
  // };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  // const allStepsCompleted = () => {
  //   return completedSteps() === totalSteps();
  // };

  const handleNext = () => {
    const newActiveStep = isLastStep()
      ? // && !allStepsCompleted()
        steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
    setActiveStep(newActiveStep);
    setSelected(newActiveStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    setSelected(prevStep);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    setSelected(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  const handleWheel = (e: WheelEvent) => {
    /* eslint-disable no-debugger */
    console.log(e.deltaY);
    if (isPageAtTop) {
      if (e.deltaY > 0 && activeStep !== steps.length - 1) {
        /* eslint-disable no-debugger */
        // debugger;
        handleNext();
      } else if (e.deltaY < 0 && activeStep !== 0) {
        /* eslint-disable no-debugger */
        // debugger;
        handleBack();
      }
    }
  };

  const targetDivRef = useRef(null);

  useEffect(() => {
    const targetDiv = targetDivRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.addEventListener('wheel', handleWheel);
        } else {
          window.removeEventListener('wheel', handleWheel);
        }
      },
      {
        threshold: 0.9
      } // Adjust the threshold as needed
    );

    if (targetDiv) {
      observer.observe(targetDiv);
    }

    return () => {
      if (targetDiv) {
        observer.unobserve(targetDiv);
      }
    };
  }, [targetDivRef, handleWheel]);

  return (
    <Box sx={{ width: '100%' }}>
      <div ref={targetDivRef}></div>
      <Stepper nonLinear activeStep={activeStep} orientation={'vertical'}>
        {steps.map((label, index) => (
          <Step key={`${label}-${index}`} completed={completed[index]}>
            <StepButton key={`${label}-${index}`} color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
