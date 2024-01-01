// /* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect } from "react";
import { DrugProvider } from "../DrugContext";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@mui/material/Button";
import DrugRegistryForm from "./DrugRegistryForm";
import MarketingApprovalForm from "./MarketingApprovalForm";
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

  const currencySymbols = {
    USD: "$",
    CAD: "C$",
    EUR: "€",
    CHF: "CHF",
    DKK: "kr",
    GBP: "£",
    SAR: "﷼",
    JOD: "JD",
    LBP: "ل.ل",
  };

  const [formDataStep1, setFormDataStep1] = useState({
    drugImages: "",
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

  function convertToUSD() {
    if (
      formDataStep1 &&
      formDataStep1.priceForeign &&
      formDataStep1.currencyForeign
    ) {
      const convertedPrice =
        formDataStep1.priceForeign /
        exchangeRates[formDataStep1.currencyForeign];
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return "";
  }

  function convertToLBP() {
    if (
      formDataStep1 &&
      formDataStep1.priceForeign &&
      formDataStep1.currencyForeign
    ) {
      const priceInUSD = convertToUSD();
      const convertedPrice =
        (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return "";
  }

  const handleInputChangeStep1 = (name, value) => {
    setFormDataStep1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Handle other state updates
    if (name === "priceForeign" || name === "currencyForeign") {
      // Handle the currency conversion logic here and update convertToUSD and convertToLBP
      const convertedUSD = convertToUSD(value, formDataStep1.currencyForeign);
      const convertedLBP = convertToLBP(value, formDataStep1.currencyForeign);

      setFormDataStep1((prevFormData) => ({
        ...prevFormData,
        convertToUSD: convertedUSD,
        convertToLBP: convertedLBP,
      }));

      // console.log("Converted Price in USD:", convertedUSD);
      // console.log(
      //   "Converted Price in LBP:",
      //   parseFloat(convertedLBP.replace(".", "")).toLocaleString("en-LB")
      // );
    }
  };

  // ...

  // Log the values when the component mounts
  // useEffect(() => {
  //   console.log("Converted Price in USD:", convertToUSD());
  //   console.log(
  //     "Converted Price in LBP:",
  //     parseFloat(convertToLBP().replace(".", "")).toLocaleString("en-LB")
  //   );
  // }, []);

  const [formDataStep2, setFormDataStep2] = useState({
    // priceForeign: "",
    // currencyForeign: "USD",
    ingredientsAndstrength: "",
    // form: "",
    // primaryContainerPackage: "",
    // manufacturer: "",
    // manufacturingCountry: "",
    // agent: "",
  });

  // const UnifiedDrugInformations = ({ formDataStep3, handleInputChange }) => {
  //   // Ensure 'type' is defined somewhere in this component
  //   // ...
  // };

  const [formDataStep3, setFormDataStep3] = useState({
    registrationNumber: "",
    registrationDate: "",
    reviewDate: "",
    mohCode: "",
    type: "",
  });

  const [formDataStep4, setFormDataStep4] = useState({
    priceForeign: "",
    currencyForeign: "USD",
    convertToUSD: "",
    convertToLBP: "",
  });

  const [formDataStep5, setFormDataStep5] = useState({
    responsibleParty: "Leo Pharma",
    responsiblePartyCountry: "Sweden",
    responsiblePartyID: "213",
    manufacturer: "Astellas Pharma Europe BV",
    manufacturerID: "121",
    manufacturerCountry: "Europe",
    agent: "Omnipharma",
  });

  // const handleInputChangeStep1 = (name, value) => {
  //   setFormDataStep1((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  //   console.log(formDataStep1);
  // };

  const handleInputChangeStep2 = (name, value) => {
    setFormDataStep2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChangeStep3 = (name, value) => {
    setFormDataStep3((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChangeStep4 = (name, value) => {
    setFormDataStep4((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChangeStep5 = (name, value) => {
    setFormDataStep5((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
    FetchData(finalFormData);
  };

  const handleNext = () => {
    if (currentStep === 2) {
      // Perform any logic you need before moving to the next step
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

  const updateImageState = (index, newImageState) => {
    // Update image state if needed
  };

  const handleImageUpload = (newUploadedImages) => {
    setUploadedImages(newUploadedImages);
  };

  const forms = [
    <div className="flex justify-center ">
      <DrugRegistryForm
        handleInputChange={handleInputChangeStep1}
        formDataStep1={formDataStep1}
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
        handleInputChange={handleInputChangeStep2}
        formDataStep2={formDataStep2}
      />
    </div>,
    <div className="flex justify-center">
      <UnifiedDrugInformations
        handleInputChange={handleInputChangeStep3}
        formDataStep3={formDataStep3}
      />
    </div>,
    <div className="flex justify-center">
      <PricingInformations
        handleInputChange={handleInputChangeStep4}
        formDataStep4={formDataStep4}
      />
    </div>,
    <div className="flex justify-center">
      <ManufacturingAndImportingInfo
        handleInputChange={handleInputChangeStep5}
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
