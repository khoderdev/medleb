import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import axios from "axios";
import { Step, Stepper, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import "./styles.css";
import RFImporationForm from "./Forms/RFImporationForm";
import ImportationProcessForm from "./Forms/ImportationProcessForm";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  stepperPaper: {
    boxShadow: "none", // Remove box-shadow
    backgroundColor: "transparent", // Set background-color to transparent
  },
}));

function FormStepper({ currentStep, steps }) {
  const classes = useStyles();

  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel
      style={{ background: "transparent", boxShadow: "none" }}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel
            className={`dot  ${currentStep === index ? "active" : ""}`}
          />
        </Step>
      ))}
    </Stepper>
  );
}

function ImportDrug(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isLastStep = currentStep === 1;

  const steps = [
    "Fill Request for Importation (RFI)",
    "IED Permit Decision",
    // "Submit Proforma Invoice (PI)",
    // "IED Approval on PI",
    // "Attach Swift and Review",
  ];

  const [formDataStep1, setFormDataStep1] = useState({
    drugName: "",
    quantityRequested: "",
    offerType: "",
    offerPercentage: "",
    notes: "",
  });

  const [formDataStep2, setFormDataStep2] = useState({
    status: "Approved",
    qtyApproved: "50",
    PInumber: "123",
    PIdate: "15-12-2023",
    PIamount: "USD 15,000,000",
    proformaInvoice: "1145/78",
  });

  const [formDataStep3, setFormDataStep3] = useState({
    swiftNumber: "8794",
    swiftAmount: "USD 15,000,000",
    swiftDate: "15-12-2023",
    bankName: "Bemo",
    swift: "",
  });

  const handleInputChange = (name, value) => {
    handleInputChange((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleInputChangeStep1 = (name, value) => {
    setFormDataStep1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChangeStep2 = (name, value) => {
    setFormDataStep2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const logFormData = () => {
    const finalFormData = {
      ...formDataStep1,
      ...formDataStep2,
      ...formDataStep3,
    };

    console.log("Final Form Data:", finalFormData);

    navigate("/import");
  };



  const handleNextStep = () => {
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
      handleNextStep();
    }
  };

  const forms = [
    <div className="flex justify-center ">
      <RFImporationForm
        handleInputChange={handleInputChangeStep1}
        formDataStep1={formDataStep1}
      />
    </div>,
    <div className="flex justify-center">
      <ImportationProcessForm
        handleInputChange={handleInputChangeStep2}
        formDataStep2={formDataStep2}
      />
    </div>,

    <div className="flex justify-center">
      {/* <DrugSubstanceInformationsForm
        handleInputChange={handleInputChangeStep3}
        formDataStep3={formDataStep3}
      /> */}
    </div>,
  ];

  return (
    <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-2 px-2 sm:px-6 dark:text-white-500">
      <div className="title py-4 pb-0 lg:mb-[-1rem] 2xl:mb-0 pl-0 flex w-full justify-center items-center">
        <h1 className="text-3xl font-semibold text-center text-[#00a651]">
          Importation
        </h1>
      </div>

      <div className="flex w-full justify-end pr-2">
        <Link to={`/list`} className="text-md  text-[#00a651]">
          Close
          <CloseIcon fontSize="small" />
        </Link>
      </div>

      {/* Content Container Start */}
      <div className="content w-full sm:h-full overflow-auto rounded-t-3xl p-6 text-center bg-white-contents dark:bg-black-contents">
        <Paper elevation={3} className={classes.stepperPaper}>
          <FormStepper currentStep={currentStep} steps={steps} />
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
                fontFamily: "Roboto Condensed",
                color: "#00a651",
                backgroundColor: "transparent",
                borderRadius: "13px",
                cursor: "pointer",
              }}
              onClick={handleBack}
              type="button"
            >
              <FaArrowLeftLong
                style={{
                  fontSize: "20px",
                  color: "#00a651",
                }}
                className="mr-2 text-[20px] text-[#00a651]"
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
            fontFamily: "Roboto Condensed",
            color: isLastStep ? "#fff" : "#00a651",
            backgroundColor: isLastStep ? "#00a651" : "transparent",
            borderRadius: isLastStep ? "13px" : "13px",
          }}
          onClick={handleArrowButtonClick}
          type="button"
        >
          {isLastStep ? "Submit" : "Next"}
          <FaArrowRightLong
            style={{
              fontSize: "20px",
              color: isLastStep ? "text-white" : "text-[#00a651]",
            }}
            className={`ml-2 text-[20px] ${
              isLastStep ? "hidden" : "text-[#00a651]"
            }`}
          />
        </Button>
      </div>
      {/* Footer Container End */}
    </div>
  );
}

export default ImportDrug;

// ////////////////////////////////////////
