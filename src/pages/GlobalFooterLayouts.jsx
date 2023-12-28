import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@mui/material/Button";

const GlobalFooterLayouts = ({
  currentStep,
  isLastStep,
  handleBack,
  handleArrowButtonClick,
}) => {
  return (
    <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-[#292929] sm:pb-0">
      <div className="flex items-center justify-center space-x-20 pt-0">
        {currentStep > 0 ? (
          <Button
            style={{
              textTransform: "none",
              fontSize: "21px",
              fontFamily: "BebasNeue-Regular",
              color: "#259F83",
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
                color: "#259F83",
              }}
              className="mr-2 text-[20px] text-[#259F83]"
            />
            Previous
          </Button>
        ) : (
          <div style={{ width: "104px" }}></div>
        )}
      </div>
      <Button
        style={{
          textTransform: "none",
          fontSize: "21px",
          fontFamily: "BebasNeue-Regular",
          color: isLastStep ? "#fff" : "#259F83",
          backgroundColor: isLastStep ? "#259F83" : "transparent",
          borderRadius: isLastStep ? "13px" : "13px",
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
            isLastStep ? "text-white " : "text-[#259F83]"
          }`}
        />
      </Button>
    </div>
  );
};

export default GlobalFooterLayouts;
