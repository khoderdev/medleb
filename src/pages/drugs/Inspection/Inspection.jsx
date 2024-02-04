import React, { useState } from "react";
import { DrugProvider } from "../DrugContext";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@mui/material/Button";
import ShipmentForm from "./Forms/ShipmentForm";
import { Step, Stepper, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  stepperPaper: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
}));

function FormStepper({ currentStep, steps }) {
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

function Inspection() {
  const [batchComponents, setBatchComponents] = useState([]);
  const [shipmentFormData, setShipmentFormData] = useState({});
  const steps = ["Shipment", "Decleration Status & Agent Stock "];
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const [batchesQty, setBatchesQty] = useState(0);
  const isLastStep = currentStep === 1;

  const handleShipmentFormChange = (data) => {
    setShipmentFormData((prevData) => ({
      ...prevData,
      ...data, // Merge new form data with existing form data
    }));
  };

  const handleBatchesQtyChange = (qty) => {
    setBatchesQty(qty);

    // Update batch components state based on the new quantity
    setBatchComponents((prevBatchComponents) => {
      const updatedBatchComponents = [...prevBatchComponents];

      // Remove excess batch components if decreasing quantity
      if (qty < updatedBatchComponents.length) {
        updatedBatchComponents.splice(qty);
      }

      // Add new batch components if increasing quantity
      if (qty > updatedBatchComponents.length) {
        for (let i = updatedBatchComponents.length; i < qty; i++) {
          updatedBatchComponents.push({});
        }
      }

      return updatedBatchComponents;
    });
  };

  const handleBatchComponentChange = (index, newData) => {
    const updatedBatchComponents = [...batchComponents];
    updatedBatchComponents[index] = newData;
    setBatchComponents(updatedBatchComponents);
  };

  const handleNext = () => {
    if (currentStep === 2) {
    }

    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const logFormData = () => {
    const finalFormData = {
      ...shipmentFormData,
      batchComponents: batchComponents, // Ensure batchComponents is included in final form data
    };

    console.log("Final Form Data:", finalFormData);
  };

  const handleArrowButtonClick = () => {
    if (isLastStep) {
      logFormData();
    } else {
      handleNext();
    }
  };

  return (
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

        <div className="content w-full sm:h-full overflow-auto rounded-t-3xl p-6 text-center bg-white-contents dark:bg-black-contents">
          <Paper elevation={3} className={classes.stepperPaper}>
            <FormStepper currentStep={currentStep} steps={steps} />
          </Paper>

          {/* Shipement form rendering */}
          {currentStep === 0 && (
            <div className="flex justify-center ">
              <ShipmentForm
                formData={shipmentFormData}
                onFormChange={handleShipmentFormChange}
                batchesQty={batchesQty}
                onBatchesQtyChange={handleBatchesQtyChange}
                batchComponents={batchComponents} // Make sure batchComponents is passed down as a prop
                onBatchComponentChange={handleBatchComponentChange}
              />
            </div>
          )}
        </div>

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
      </div>
    </DrugProvider>
  );
}

export default Inspection;
