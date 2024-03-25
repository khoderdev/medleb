import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Step, Button, Stepper } from '@material-tailwind/react';

export function DynamicStepper({ steps, forms }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((cur) => Math.min(cur + 1, steps.length - 1));
  const handlePrev = () => setActiveStep((cur) => Math.max(cur - 1, 0));

  return (
    <div className="w-full py-4 px-8">
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            {step}
          </Step>
        ))}
      </Stepper>
      <div className="mt-4">{forms[activeStep]}</div>
      <div className="mt-8 flex justify-between">
        <Button onClick={handlePrev} disabled={activeStep === 0}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}

DynamicStepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  forms: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DynamicStepper;
