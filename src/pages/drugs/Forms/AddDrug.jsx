// /* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect } from "react";
import { DrugProvider } from "../DrugContext";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@mui/material/Button";
import DrugRegistryForm from "./DrugRegistryForm";
import DrugSubstanceInformationsForm from "./DrugSubstanceInformationsForm";
import UnifiedDrugInformations from "./UnifiedDrugInformations";
import PricingInformations from "./PricingInformations";
import ManufacturingAndImportingInfo from "./ManufacturingAndImportingInfo";
import axios from "axios";
import ImageUploader from "./ImageUploader";
import { Step, Stepper, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  stepperPaper: {
    boxShadow: "none", // Remove box-shadow
    backgroundColor: "transparent", // Set background-color to transparent
  },
}));

function CustomStepper({ currentStep, steps }) {
  const classes = useStyles();

  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel
      style={{ background: "none", boxShadow: "none" }}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel
            className={`dot ${currentStep === index ? "active" : ""}`}
          />
        </Step>
      ))}
    </Stepper>
  );
}

function AddDrug(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isLastStep = currentStep === 5;
  const [isFieldModified, setIsFieldModified] = useState(false);

  const steps = [
    "Drug Registry",
    "Drug Images",
    "Pricing Approval",
    "Marketing Approval",
    "Substance Information",
    "Unified Drug Information",
  ];

  const exchangeRates = {
    USD: 1,
    CAD: 0.72,
    EUR: 1.06,
    CHF: 1.11,
    DKK: 0.72,
    GBP: 1.21,
    SAR: 0.27,
    JOD: 1.41,
    LBP: 900,
  };

  function convertToUSD(priceForeign, currencyForeign) {
    if (priceForeign && currencyForeign) {
      const convertedPrice = priceForeign / exchangeRates[currencyForeign];
      return convertedPrice.toFixed(2);
    }
    return "";
  }

  function convertToLBP(priceForeign, currencyForeign) {
    if (priceForeign && currencyForeign) {
      const priceInUSD = convertToUSD(priceForeign, currencyForeign);
      const convertedPrice = priceInUSD * exchangeRates.LBP;
      return convertedPrice.toFixed(2);
    }
    return "";
  }

  // Changed handleInputChange to update both formDataStep1 and formDataStep5
  const handleInputChange = (name, value) => {
    setFormDataStep1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Set isFieldModified to true when the user modifies the field
    setIsFieldModified(true);

    // similar logic for formDataStep2
    setFormDataStep2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // similar logic for formDataStep2
    setFormDataStep3((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // similar logic for formDataStep2
    setFormDataStep4((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // similar logic for formDataStep2
    setFormDataStep5((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [formDataStep1, setFormDataStep1] = useState({
    drugName: "",
    type: "",
    responsibleParty: "",
    responsiblePartyCountry: "",
    manufacturer: "",
    manufacturingCountry: "",
    cargoShippingTerms: "",
    priceForeign: "",
    currencyForeign: "USD",
    convertToUSD: "",
    convertToLBP: "",
    registrationNumber: "",
    registrationDate: "",
    reviewDate: "",
    mohCode: "",
  });

  const handleInputChangeStep1 = (name, value) => {
    if (name === "priceForeign" || name === "currencyForeign") {
      const convertedUSD = convertToUSD(value, formDataStep1.currencyForeign);
      const convertedLBP = convertToLBP(value, formDataStep1.currencyForeign);

      setFormDataStep1((prevFormData) => ({
        ...prevFormData,
        convertToUSD: convertedUSD,
        convertToLBP: convertedLBP,
      }));

      // Log the values directly after the state update
      console.log("convertToUSD:", convertedUSD);
      console.log("convertToLBP:", convertedLBP);
    }

    setFormDataStep1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [formDataStep2, setFormDataStep2] = useState({
    ingredientsAndstrength: "",
    form: "",
    primaryContainerPackage: "",
    manufacturer: "",
    manufacturingCountry: "",
    agent: "",
    atcCode: "",
    atcRelatedIngredients: "Paracetamol",
  });

  const [formDataStep3, setFormDataStep3] = useState({
    atcRelatedIngredients: "Paracetamol",
    // registrationNumber: "",
    // registrationDate: "",
    // reviewDate: "",
    // mohCode: "",
    // type: "",
  });

  const [formDataStep4, setFormDataStep4] = useState({
    priceForeign: "",
    currencyForeign: "USD",
    convertToUSD: "",
    convertToLBP: "",
    stratum: "E1",
    cargoShipping: "8%",
    douanes: "",
    subsidizationLabel: "",
    agentProfitMargin: "8",
    pharmacistProfitMargin: "8.5",
    hospitalPriceLBP: "900,000",
  });

  const [formDataStep5, setFormDataStep5] = useState({
    responsibleParty: "",
    responsiblePartyCountry: "",
    responsiblePartyID: "123321",
    manufacturer: "",
    manufacturerID: "321123",
    manufacturingCountry: "",
    agent: "",
  });

  const logFormData = () => {
    const finalFormData = {
      ...formDataStep1,
      ...formDataStep2,
      ...formDataStep3,
      ...formDataStep4,
      ...formDataStep5,
    };

    console.log("Final Form Data:", finalFormData);

    // Perform submission or redirection here
    navigate("/list");
    // FetchData(finalFormData);
  };

  const handleNext = () => {
    if (currentStep === 2) {
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

  const [uploadedImages, setUploadedImages] = useState([]);

  const updateImageState = (index, newImageState) => {};

  const handleImageUpload = (newUploadedImages) => {
    setUploadedImages(newUploadedImages);
  };

  const handleChildArrowButtonClick = () => {
    if (isLastStep) {
      logFormData();
    } else {
      handleNext();
    }
  };

  const forms = [
    <div className="flex justify-center ">
      <DrugRegistryForm
        handleInputChange={handleInputChange}
        formDataStep1={formDataStep1}
        handleChildArrowButtonClick={handleChildArrowButtonClick}
      />
    </div>,
    <div className="flex justify-center">
      <ImageUploader
        formDataStep1={formDataStep1}
        handleInputChangeStep1={handleInputChangeStep1}
        updateImageState={updateImageState}
        uploadedImages={uploadedImages}
        handleImageUpload={handleImageUpload}
      />
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
      <PricingInformations
        handleInputChange={handleInputChange}
        formDataStep4={formDataStep4}
        setFormDataStep1={setFormDataStep1}
        formDataStep1={formDataStep1}
        // convertToUSD={convertToUSD(
        //   formDataStep1.priceForeign,
        //   formDataStep1.currencyForeign
        // )}
        // convertToLBP={convertToLBP(
        //   formDataStep1.priceForeign,
        //   formDataStep1.currencyForeign
        // )}
        // isAutoInserted={!isFieldModified}
      />
    </div>,
    <div className="flex justify-center">
      <ManufacturingAndImportingInfo
        handleInputChange={handleInputChange}
        formDataStep5={formDataStep5}
      />
    </div>,
  ];

  const FetchData = async (finalFormData) => {
    try {
      // Send form data to the server
      await axios.post("http://localhost:3500/drugs", finalFormData);
      console.log("Form data submitted successfully");

      // Log to check if this block is executed
      console.log("Navigating to /list");

      // Redirect to /list
      navigate("/list");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    /* Page Title Header Container (Outside the Box) Start */
    <DrugProvider>
      <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col sm:pt-4 pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
        <div className="title py-4 pl-4 flex w-full justify-center items-center">
          <h1 className="text-3xl font-semibold text-center text-[#259f83]">
            Add New Medicines
          </h1>
        </div>

        <div className="flex w-full justify-end pr-2">
          <Link to={`/list`} className="text-md  text-[#259f83]">
            Close
            <CloseIcon fontSize="small" className="arrowLeft" />
          </Link>
        </div>

        {/* Content Container Start */}
        <div className="content w-full sm:h-full overflow-auto rounded-t-3xl p-6 text-center bg-white-contents dark:bg-black-contents">
          <Paper elevation={3} className={classes.stepperPaper}>
            <CustomStepper currentStep={currentStep} steps={steps} />
          </Paper>
          <form className="flex w-full flex-col">{forms[currentStep]}</form>
        </div>

        {/* Content Container End */}

        {/* Footer Container Start */}
        <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
          <div className="flex items-center justify-center space-x-20 pt-0">
            {currentStep > 0 ? (
              <Button
                style={{
                  textTransform: "none",
                  fontSize: "21px",
                  fontFamily: "BebasNeue-Regular",
                  color: "#259F83",
                  backgroundColor: "transparent",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={handleBack}
                type="button"
              >
                <FaArrowLeftLong
                  style={{
                    fontSize: "20px",
                    color: "#259F83",
                  }}
                  className="mr-2 text-[20px] text-[#259F83]"
                />
                Previous
              </Button>
            ) : (
              <div style={{ width: "104px" }}></div> // Placeholder with the width of the button
            )}
          </div>
          <Button
            style={{
              textTransform: "none",
              fontSize: "21px",
              fontFamily: "BebasNeue-Regular",
              color: isLastStep ? "#fff" : "#259F83",
              backgroundColor: isLastStep ? "#259F83" : "transparent",
              borderRadius: isLastStep ? "8px" : "8px",
              marginTop: isLastStep ? "4px" : "4px",
              marginBottom: isLastStep ? "4px" : "4px",
              paddingRight: isLastStep ? "13px" : "13px",
              paddingLeft: isLastStep ? "13px" : "13px",
            }}
            onClick={handleArrowButtonClick}
            type="button"
          >
            {isLastStep ? "Submit" : "Next"}
            <FaArrowRightLong
              style={{
                fontSize: "20px",
                color: isLastStep ? "text-white" : "text-[#259F83]",
              }}
              className={`ml-2 text-[20px] ${
                isLastStep ? "hidden" : "text-[#259F83]"
              }`}
            />
          </Button>
        </div>
        {/* Footer Container End */}
      </div>
    </DrugProvider>
  );
}

export default AddDrug;
