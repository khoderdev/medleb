// // //////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { DrugProvider } from "../DrugContext";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@mui/material/Button";
import DeclerationForm from "./DeclerationForm";
import ShipmentForm from "./ShipmentForm";

import axios from "axios";
import { Step, Stepper, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";

import { makeStyles } from "@mui/styles";
import useCustomNavigation from "../../useCustomNavigation";
import { useDispatch } from "react-redux";

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

function Inspection(props) {
  const classes = useStyles();

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isLastStep = currentStep === 1;
  const { drugId } = useParams();
  const { goToListPage } = useCustomNavigation(false);
  const [isEditMode, setIsEditMode] = useState(false); // New state to track edit mode

  const steps = ["Shipment", "Decleration Status & Agent Stock "];

  const [formDataStep1, setFormDataStep1] = useState({
    // drugImages: "",
    // drugName: "",
    // type: "",
    // responsibleParty: "",
    // responsiblePartyCountry: "",
    // manufacturer: "",
    // manufacturingCountry: "",
    // cargoShippingTerms: "",
    // priceForeign: "",
    // currencyForeign: "USD",
    // convertToUSD: "",
    // convertToLBP: "",
    // registrationNumber: "",
    // registrationDate: "",
    // reviewDate: "",
    // mohCode: "",
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

  const dispatch = useDispatch();

  const handleInputChangeStep1 = (name, value) => {
    setFormDataStep1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Dispatch the action to update Redux store
    dispatch(updateFormStep1({ [name]: value }));
  };

  useEffect(() => {
    if (drugId) {
      // Fetch the existing drug data using the drugId
      axios
        .get(`http://1.1.1.252:3500/drugs/${drugId}`)
        .then((res) => {
          // Initialize the form data with existing drug data
          setFormDataStep1(res.data); // You might need to adjust this based on the actual structure of your data
          setIsEditMode(true); // Set edit mode to true
        })
        .catch((error) => {
          console.error("Error fetching drug data:", error);
          // Handle the error, such as redirecting to an error page
        });
    }
  }, [drugId]);

  const FetchData = async (finalFormData) => {
    try {
      if (isEditMode) {
        // If in edit mode, update the existing drug
        console.log("Updating an existing drug");
        await axios.put(
          `http://1.1.1.252:3500/drugs/${drugId}`,
          finalFormData
        );
      } else {
        // If not in edit mode, create a new drug
        console.log("Creating a new drug");
        await axios.post(
          "http://1.1.1.252:3500/drugs",
          finalFormData
        );
      }
      // You might want to add a success message or further handling here
      navigate("/list"); // Navigate to the list page after successful update/creation
    } catch (error) {
      console.error("Error updating/creating drug:", error);
      // Handle the error, such as showing an error message to the user
    }
  };

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;

    // Repeat the same logic for other form data steps
    setFormDataStep2((prevFormData) => ({
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

  const logFormData = () => {
    const finalFormData = {
      ...formDataStep1,
      ...formDataStep2,
    };

    console.log("Final Form Data:", finalFormData);

    // Perform submission or redirection here
    // navigate("/list");
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

  const handleChildArrowButtonClick = () => {
    handleNext();
  };

  const forms = [
    <div className="flex justify-center ">
      <ShipmentForm
        handleInputChange={handleInputChange}
        formDataStep1={formDataStep1}
        handleChildArrowButtonClick={handleChildArrowButtonClick}
      />
    </div>,

    <div className="flex justify-center">
      <DeclerationForm
        handleInputChange={handleInputChange}
        formDataStep2={formDataStep2}
      />
    </div>,
  ];

  return (
    /* Page Title Header Container (Outside the Box) Start */
    <DrugProvider>
      <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
        <div className="title py-4 pb-0 pl-0 flex w-full justify-center items-center">
          <h1 className="text-3xl font-semibold text-center text-[#00a651]">
            Inspection
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
    </DrugProvider>
  );
}

export default Inspection;

// //////////////////////////////////////////////////////////////////////
