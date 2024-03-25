import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Step, Button, Stepper } from '@material-tailwind/react';

export function DynamicStepper({ steps, forms, onSubmit }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((cur) => Math.min(cur + 1, steps.length - 1));
  const handlePrev = () => setActiveStep((cur) => Math.max(cur - 1, 0));

  const isLastStep = activeStep === steps.length - 1;

  const handleSubmit = () => {
    if (isLastStep && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
        lineClassName="bg-white-fg"
        activeLineClassName="bg-green-pri"
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            className="h-8 w-8 text-center p-1 !bg-green-gray-50 cursor-pointer"
            activeClassName="ring-0 !bg-green-pri"
            completedClassName="!bg-green-700 text-white-text"
            onClick={() => setActiveStep(index)}
          >
            {step}
          </Step>
        ))}
      </Stepper>
      <div className="mt-4">{forms[activeStep]}</div>
      <div className="mt-8 flex justify-between">
        <Button className="med-btn-3rd" onClick={handlePrev} disabled={activeStep === 0}>
          Prev
        </Button>
        {isLastStep ? (
          <Button className="med-btn-3rd" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button
            className="med-btn-3rd"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

DynamicStepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  forms: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSubmit: PropTypes.func,
};

export default DynamicStepper;
