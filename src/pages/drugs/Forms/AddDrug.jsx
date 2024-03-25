/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// // //////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
// import { DrugProvider } from "../DrugContext";
import { Link, useParams, useNavigate } from 'react-router-dom';
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
// import { useDispatch } from "react-redux";
import useCustomNavigation from '../../useCustomNavigation';
import DrugRegistryFormAddons from './DrugRegistryFormAddons';
import UnifiedDrugInformations from './UnifiedDrugInformations';
import DrugSubstanceInformationsForm from './DrugSubstanceInformationsForm';
import ManufacturingAndImportingInfo from './ManufacturingAndImportingInfo';
import {
  useAddDrugMutation,
  useUpdateDrugMutation,
  useDeleteDrugMutation,
  useAddPharmacyDrugMutation,
} from '../../../app/slices/apiSlice';

const useStyles = makeStyles((theme) => ({
  stepperPaper: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
}));

function FormStepper({ currentStep, steps }) {
  const classes = useStyles();

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
  const [drugImagesList, setImagesList] = useState(Array.from({ length: 6 }, () => []));
  const [drugDocumentsList, setDrugDocumentsList] = useState(Array.from({ length: 15 }, () => []));
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isLastStep = currentStep === 7;
  const { drugId } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const { goBack } = useCustomNavigation();
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

  const [addDrugMutation] = useAddDrugMutation();
  const [updateDrugMutation] = useUpdateDrugMutation();
  const [deleteDrugMutation] = useDeleteDrugMutation();
  const [addPharmacyDrugMutation] = useAddPharmacyDrugMutation();

  const currencySymbols = {
    USD: '$',
    CAD: 'C$',
    EUR: '€',
    CHF: 'CHF',
    DKK: 'kr',
    GBP: '£',
    SAR: 'SAR',
    JOD: 'JD',
    LBP: 'LBP',
  };

  const [formDataStep1, setFormDataStep1] = useState({
    drugImages: '',
    drugName: 'Panadol',
    type: 'Brand',
    responsibleParty: '',
    responsiblePartyCountry: '',
    manufacturer: '',
    manufacturingCountry: '',
    cargoShippingTerms: '',
    priceForeign: '13',
    currencyForeign: 'CAD',
    convertToUSD: '',
    convertToLBP: '',
    registrationNumber: '',
    REP_date: '',
    LASTEffective_Date: '',
    mohCode: '',
  });

  const [formDataPriceCompare, setFormDataPriceCompare] = useState({
    productDesc: '',
    activeInactiveIngredients: '',
    indications: '',
    posology: '',
    methodOfAdministration: '',
    contraindications: '',
    precautionsForUse: '',
    effectsOnFGN: '',
    sideEffects: '',
    toxicity: '',
    storageConditions: '',
    shelfLife: '',
  });

  const [formDataStep11, setFormDataStep11] = useState({
    productDesc: '',
    activeInactiveIngredients: '',
    indications: '',
    posology: '',
    methodOfAdministration: '',
    contraindications: '',
    precautionsForUse: '',
    effectsOnFGN: '',
    sideEffects: '',
    toxicity: '',
    storageConditions: '',
    shelfLife: '',
  });
  const [formDataStep12, setFormDataStep12] = useState({
    drugImages: '',
  });

  const [formDataStep2, setFormDataStep2] = useState({
    ingredientsAndstrength: 'Paracetamol',
    form: 'Tablet',
    primaryContainerPackage: 'Sachet',
    manufacturer: '',
    manufacturingCountry: '',
    agent: 'Omnipharma',
    atcCode: 'AB001',
    atcRelatedIngredients: 'Caffeine',
  });

  const [formDataStep3, setFormDataStep3] = useState({
    atcRelatedIngredients: 'Caffeine',
    registrationNumber: '1234/A01',
    registrationDate: '',
    dosageValueN: '500',
    dosageUnitN: 'mg/g',
    dosageUnit: '',
    doseForm: 'concentrated',
    route: 'Rectal',
    presentationContentQty: '24',
    contentUnitType: 'mg',
    presentationContainerQty: '100',
    containerUnitType: 'Box',
    prescriptionAndDispensingCondition: '',
    drugName: 'Panadol',
    mohCode: '',
    type: 'Brand',
    atcCode: 'AB001',
  });

  const [formDataStep4, setFormDataStep4] = useState({
    priceForeign: '13',
    currencyForeign: 'CAD',
    convertToUSD: '',
    convertToLBP: '',
    stratum: 'E1',
    cargoShipping: '8%',
    douanes: '',
    subsidizationLabel: '',
    agentProfitMargin: '8',
    pharmacistProfitMargin: '8.5',
    hospitalPriceLBP: '900,000',
  });

  const [formDataStep5, setFormDataStep5] = useState({
    responsibleParty: '',
    responsiblePartyCountry: '',
    responsiblePartyID: '123321',
    manufacturer: '',
    manufacturerID: '321123',
    manufacturingCountry: '',
    agent: 'Omnipharma',
  });

  function convertToUSD() {
    if (formDataStep1 && formDataStep1.priceForeign && formDataStep1.currencyForeign) {
      const convertedPrice =
        formDataStep1.priceForeign / exchangeRates[formDataStep1.currencyForeign];
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return '';
  }

  function convertToLBP() {
    if (formDataStep1 && formDataStep1.priceForeign && formDataStep1.currencyForeign) {
      const priceInUSD = convertToUSD();
      const convertedPrice = (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return '';
  }

  // const dispatch = useDispatch();

  const handleInputChangeStep1 = (name, value) => {
    setFormDataStep1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Dispatch the action to update Redux store
    dispatch(updateFormStep1({ [name]: value }));

    // Handle other state updates
    if (name === 'priceForeign' || name === 'currencyForeign') {
      // Handle the currency conversion logic here and update convertToUSD and convertToLBP
      const convertedUSD = convertToUSD(value, formDataStep1.currencyForeign);
      const convertedLBP = convertToLBP(value, formDataStep1.currencyForeign);

      setFormDataStep1((prevFormData) => ({
        ...prevFormData,
        convertToUSD: convertedUSD,
        convertToLBP: convertedLBP,
      }));
    }
  };

  const handleInputChangeStep12 = (name, value) => {
    setFormDataStep12((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Dispatch the action to update Redux store
    dispatch(updateFormStep1({ [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;

    if (name === 'priceForeign' || name === 'convertToLBP' || name === 'convertToUSD') {
      // Parse the value as a number or handle empty strings appropriately
      const numericValue = parseFloat(value) || 0;

      setFormDataStep1((prevDrug) => ({
        ...prevDrug,
        [name]: numericValue,
      }));
    } else if (type === 'checkbox') {
      // Update checkbox state based on the current value of checked
      setFormDataStep1((prevDrug) => ({
        ...prevDrug,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      setFormDataStep1((prevDrug) => ({
        ...prevDrug,
        [name]: value,
      }));
    }

    setFormDataPriceCompare((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep11((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormDataStep11((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep12((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep3((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep4((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep5((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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

  const [newUploadedImages, setNewUploadedImages] = useState([]);
  const [newUploadedDocuments, setNewUploadedDocuments] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const updateImageState = (index, newImageState) => {};
  const updateDocumentState = (index, newDocumentState) => {};

  const handleImageUpload = (newUploadedImages) => {
    setUploadedImages(newUploadedImages);

    // Assuming formDataStep2 is the form data object for step 2
    setFormDataStep12((prevFormDataStep12) => ({
      ...prevFormDataStep12,
      drugImages: newUploadedImages.map((image) => ({
        imageUrl: image.imageUrl,
      })),
    }));
  };
  const handleDocumentUpload = (newUploadedDocuments) => {
    setUploadedDocuments(newUploadedDocuments);

    // Assuming formDataStep2 is the form data object for step 2
    setFormDataStep12((prevFormDataStep12) => ({
      ...prevFormDataStep12,
      drugDocuments: newUploadedDocuments.map((image) => ({
        documentUrl: image.imageUrl,
      })),
    }));
  };
  // console.log("Brands state:", brands);

  const forms = [
    <div className="flex justify-center ">
      <DrugRegistryForm
        // brands={brands}
        handleInputChange={handleInputChange}
        formDataStep1={formDataStep1}
        handleChildArrowButtonClick={handleChildArrowButtonClick}
      />
    </div>,

    <div className="flex justify-center ">
      <PricesComparison
        handleInputChange={handleInputChange}
        formDataPriceCompare={formDataPriceCompare}
      />
    </div>,

    <div className="flex justify-center ">
      <DrugRegistryFormAddons
        handleInputChange={handleInputChange}
        formDataStep11={formDataStep11}
      />
    </div>,

    <div className="flex flex-col justify-center h-full pb-16 gap-3">
      {/* {currentStep === 2 && ( */}
      <DrugDocuments
        drugDocumentsList={drugDocumentsList}
        setDrugDocumentsList={setDrugDocumentsList}
        formDataStep12={formDataStep12}
        handleInputChangeStep1={handleInputChangeStep1}
        updateDocumentState={updateDocumentState}
        uploadedDocuments={uploadedDocuments}
        newUploadedDocuments={newUploadedDocuments}
        handleDocumentUpload={handleDocumentUpload}
      />
      <DrugImages
        drugImagesList={drugImagesList}
        setImagesList={setImagesList}
        formDataStep12={formDataStep12}
        handleInputChangeStep1={handleInputChangeStep1}
        updateImageState={updateImageState}
        uploadedImages={uploadedImages}
        newUploadedImages={newUploadedImages}
        handleImageUpload={handleImageUpload}
      />
      {/* )} */}
    </div>,

    <div className="flex justify-center">
      <DrugSubstanceInformationsForm
        handleInputChange={handleInputChange}
        formDataStep2={formDataStep2}
      />
    </div>,

    <div className="flex justify-center">
      <UnifiedDrugInformations
        handleInputChange={handleInputChange}
        formDataStep3={formDataStep3}
      />
    </div>,

    <div className="flex justify-center">
      <PricingInformations handleInputChange={handleInputChange} formDataStep4={formDataStep4} />
    </div>,

    <div className="flex justify-center">
      <ManufacturingAndImportingInfo
        handleInputChange={handleInputChange}
        formDataStep5={formDataStep5}
      />
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
