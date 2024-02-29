import React, { useContext } from "react";
import "./DrugForm.css";
import { DrugProvider, useDrugContext } from "./DrugContext";
import AddDrugForm from "./AddDrugForm";
import DrugRegistryFormAddons from "./DrugRegistryFormAddons";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { Step, Stepper, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

const DrugForm = () => {
  const {
    formData,
    handleSubmit,
    handleNext,
    handlePrevious,
    error,
    currentStep,
    steps,
    exchangeRates,
    currencySymbols,
    handleInputChange,
  } = useDrugContext();

  return (
    <form
      className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents"
      onSubmit={handleSubmit}
    >
      {error && <div className="error-message">{error}</div>}

      {/* Render current step */}
      {/* {renderStep(currentStep)} */}
      <div className="relative">
        <AddDrugForm
          formData={formData}
          handleInputChange={handleInputChange}
          currencySymbols={currencySymbols}
          exchangeRates={exchangeRates}
        />
      </div>

      <div className="buttons-container flex justify-evenly">
        {/* Previous Button */}
        {currentStep > 0 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="previous-button med-btn-pri-sm"
          >
            Previous
          </button>
        )}

        {/* Next Button */}
        {currentStep < steps.length - 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="med-btn-pri-sm next-button"
          >
            Next
          </button>
        )}

        {/* Submit Button */}
        <div className="absolute bottom-0">
          {currentStep === steps.length - 1 && (
            <button type="submit" className="submit-button med-btn-pri-sm">
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default DrugForm;
