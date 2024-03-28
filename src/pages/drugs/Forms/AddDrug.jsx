/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// // //////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
// import { DrugProvider } from "../DrugContext";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Step, Stepper, StepLabel } from '@mui/material';

import './styles.css';
import DrugImages from './DrugImages';
import DrugDocuments from './DrugDocuments';
import DrugRegistryForm from './DrugRegistryForm';
import PricesComparison from './PricesComparison';
import PricingInformations from './PricingInformations';
import DrugRegistryFormAddons from './DrugRegistryFormAddons';
import UnifiedDrugInformations from './UnifiedDrugInformations';
import DrugSubstanceInformationsForm from './DrugSubstanceInformationsForm';
import ManufacturingAndImportingInfo from './ManufacturingAndImportingInfo';

const useStyles = makeStyles((theme) => ({
  stepperPaper: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
}));

function FormStepper({ currentStep, steps }) {
  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel className={`dot  ${currentStep === index ? 'active' : ''}`} />
        </Step>
      ))}
    </Stepper>
  );
}

function AddDrug(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isLastStep = currentStep === 7;

  const steps = [
    'Drug Registry',
    'Prices Comparison',
    'Drug Registry Addons',
    'Drug Images & Docs',
    'Pricing Approval',
    'Marketing Approval',
    'Substance Information',
    'Unified Drug Information',
  ];

  const logFormData = async () => {
    const finalFormData = {
      ...formDataStep1,
      ...formDataStep2,
      ...formDataStep3,
      ...formDataStep4,
      ...formDataStep5,
    };

    console.log('Final Form Data:', finalFormData);

    try {
      // Call the mutation hook to add a drug
      const response = await addDrugMutation(finalFormData);

      // Handle response if needed
      console.log('Add Drug Mutation Response:', response);

      // Redirect or navigate to another page
      navigate('/search');
    } catch (error) {
      console.error('Error adding drug:', error);
      // Handle error
    }
  };

  const handleNext = () => {
    if (currentStep === 2) {
      /* empty */
    }

    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleArrowButtonClick = () => {
    if (isLastStep) {
      logFormData();
    } else {
      handleNext();
    }
  };

  const handleChildArrowButtonClick = () => {
    handleNext();
  };

  const forms = [
    <div className="flex justify-center ">
      <DrugRegistryForm />
    </div>,

    <div className="flex justify-center ">
      <PricesComparison />
    </div>,

    <div className="flex justify-center ">
      <DrugRegistryFormAddons />
    </div>,

    <div className="flex flex-col justify-center h-full pb-16 gap-3">
      <DrugDocuments />
      <DrugImages />
    </div>,

    <div className="flex justify-center">
      <DrugSubstanceInformationsForm />
    </div>,

    <div className="flex justify-center">
      <UnifiedDrugInformations />
    </div>,

    <div className="flex justify-center">
      <PricingInformations />
    </div>,

    <div className="flex justify-center">
      <ManufacturingAndImportingInfo />
    </div>,
  ];

  return (
    /* Page Title Header Container (Outside the Box) Start */
    // <DrugProvider>
    <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-2 px-2 sm:px-6 dark:text-white-500">
      <div className="title py-4 pb-0 lg:mb-[-1rem] 2xl:mb-0 pl-0 flex w-full justify-center items-center">
        <h1 className="text-3xl font-semibold text-center text-[#00a651]">Registration</h1>
      </div>

      <div className="flex w-full justify-end pr-2">
        <Link to="/search" className="text-md  text-[#00a651]">
          Close
          <CloseIcon fontSize="small" />
        </Link>
      </div>

      {/* Content Container Start */}
      <div className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents">
        <Paper elevation={3} className={classes.stepperPaper}>
          <FormStepper
            currentStep={currentStep}
            steps={steps}
            // brands={brands}
          />
          {/* Pass brands as prop */}
        </Paper>
        <form className="flex w-full flex-col">{forms[currentStep]}</form>
      </div>
      {/* <div className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents">
        <Paper elevation={3} className={classes.stepperPaper}>
          <FormStepper currentStep={currentStep} steps={steps} />
        </Paper>
        <form className="flex w-full flex-col">{forms[currentStep]}</form>
      </div> */}

      {/* Content Container End */}

      {/* Footer Container Start */}
      <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
        <div className="flex items-center justify-center space-x-20 pt-0">
          {currentStep > 0 ? (
            <Button
              style={{
                textTransform: 'none',
                fontSize: '21px',
                fontFamily: 'Roboto Condensed',
                color: '#00a651',
                backgroundColor: 'transparent',
                borderRadius: '13px',
                cursor: 'pointer',
              }}
              onClick={handleBack}
              type="button"
            >
              <FaArrowLeftLong
                style={{
                  fontSize: '20px',
                  color: '#00a651',
                }}
                className="mr-2 text-[20px] text-[#00a651]"
              />
              Previous
            </Button>
          ) : (
            <div style={{ width: '104px' }} /> // Placeholder with the width of the button
          )}
        </div>
        <Button
          style={{
            textTransform: 'none',
            fontSize: '21px',
            fontFamily: 'Roboto Condensed',
            color: isLastStep ? '#fff' : '#00a651',
            backgroundColor: isLastStep ? '#00a651' : 'transparent',
            borderRadius: isLastStep ? '13px' : '13px',
          }}
          onClick={handleArrowButtonClick}
          type="button"
        >
          {isLastStep ? 'Submit' : 'Next'}
          <FaArrowRightLong
            style={{
              fontSize: '20px',
              color: isLastStep ? 'text-white' : 'text-[#00a651]',
            }}
            className={`ml-2 text-[20px] ${isLastStep ? 'hidden' : 'text-[#00a651]'}`}
          />
        </Button>
      </div>
      {/* Footer Container End */}
    </div>
  );
}

export default AddDrug;
