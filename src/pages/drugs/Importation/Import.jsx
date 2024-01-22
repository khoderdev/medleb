// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import CloseIcon from "@mui/icons-material/Close";
// import Button from "@mui/material/Button";
// import axios from "axios";
// import { Step, Stepper, StepLabel } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import "./styles.css";
// import RFImporationForm from "./Forms/RFImporationForm";
// import ImportationProcessForm from "./Forms/ImportationProcessForm";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   stepperPaper: {
//     boxShadow: "none",
//     backgroundColor: "transparent",
//   },
// }));

// function ImportFormStepper({ currentStep, steps }) {
//   const classes = useStyles();
//   const getDotClassName = (index) =>
//     `dot ${currentStep === index ? "active" : ""}`;
//   return (
//     <Stepper
//       activeStep={currentStep}
//       alternativeLabel
//       style={{ background: "transparent", boxShadow: "none" }}
//     >
//       {steps.map((label, index) => (
//         <Step key={label}>
//           <StepLabel className={getDotClassName(index)} />
//         </Step>
//       ))}
//     </Stepper>
//   );
// }

// const validateCurrentForm = (
//   currentStep,
//   rfiFormData,
//   importProcessPFIData,
//   importProcessSWIFTData
// ) => {
//   if (currentStep === 0) {
//     // Validate the first form (RFI form)
//     return rfiFormData.RequestedDrug !== "" && true;
//   } else if (currentStep === 1) {
//     // Validate the second form (Importation Process form)
//     return (
//       importProcessPFIData.PFInumber !== "" &&
//       importProcessSWIFTData.swiftNumber !== "" &&
//       true
//     );
//   }

//   // Default to true if no specific validation is required
//   return true;
// };

// const steps = ["Fill Request for Importation (RFI)", "Importation Process"];

// function ImportDrug(props) {
//   const classes = useStyles();
//   const [currentStep, setCurrentStep] = useState(0);
//   const navigate = useNavigate();
//   const isLastStep = currentStep === 1;
//   const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [rfiFormData, setRfiFormData] = useState({
//     RequestedDrug: "",
//     quantityRequested: "",
//     offerType: "",
//     offerPercentage: "",
//     notes: "",
//   });

//   const [importProcessPFIData, setImportProcessPFIData] = useState({
//     PFInumber: "",
//     PFIdate: "",
//     PFIamount: "",
//     PFIdoc: "",
//   });

//   const [importProcessSWIFTData, setImportProcessSWIFTData] = useState({
//     swiftNumber: "",
//     swiftDate: "",
//     swiftAmount: "",
//     bankName: "",
//     SWIFTdoc: "",
//   });

//   const handleInputChange = (name, value) => {
//     // Update the state for the current form
//     if (currentStep === 0) {
//       setRfiFormData((prevData) => ({ ...prevData, [name]: value }));
//     } else if (currentStep === 1) {
//       setImportProcessPFIData((prevData) => ({ ...prevData, [name]: value }));
//       setImportProcessSWIFTData((prevData) => ({ ...prevData, [name]: value }));
//     }

//     // Check form validity and update the state
//     const isCurrentFormValid = validateCurrentForm(
//       currentStep,
//       rfiFormData,
//       importProcessPFIData,
//       importProcessSWIFTData
//     );
//     setIsNextButtonDisabled(!isCurrentFormValid);
//   };

//   const logFormData = () => {
//     if (currentStep === 0) {
//       // Submit the data for the first form
//       console.log("RFI Form Data:", rfiFormData);
//     } else if (currentStep === 1) {
//       // Submit the data for the second form
//       const finalFormData = {
//         ...importProcessPFIData,
//         ...importProcessSWIFTData,
//       };
//       console.log("Import Process Form Data:", finalFormData);
//       navigate("/import");
//     }

//     // Move to the next step
//     handleNextStep();
//   };

//   const handleNextStep = () => {
//     if (currentStep === 2) {
//     }

//     setCurrentStep(currentStep + 1);
//   };

//   const handleBack = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const handleArrowButtonClick = async () => {
//     if (!isLastStep) {
//       // Not the last step, move to the next step
//       setCurrentStep(currentStep + 1);
//     } else if (currentStep === 0 && !isFormSubmitted) {
//       // Handle submit logic for the first step
//       const isRFIFormValid = validateCurrentForm(
//         0,
//         rfiFormData,
//         importProcessPFIData,
//         importProcessSWIFTData
//       );

//       if (isRFIFormValid) {
//         // Submit the RFI form
//         await submitRFIForm();
//         setIsFormSubmitted(true);
//         setCurrentStep(currentStep + 1);
//       } else {
//         // RFI form is not valid, do not proceed
//         // You can also show an error message to the user
//       }
//     }
//   };

//   const submitRFIForm = async () => {
//     // Implement your logic to submit the RFI form
//     console.log("Submitting RFI form:", rfiFormData);
//     // Example: Call an API or perform any async operation
//   };

//   const forms = [
//     <div className="flex justify-center">
//       {currentStep === 0 && !isFormSubmitted && (
//         <RFImporationForm
//           handleInputChange={handleInputChange}
//           rfiFormData={rfiFormData}
//         />
//       )}
//     </div>,

//     <div className="flex justify-center">
//       {currentStep === 1 && (
//         <div className="flex justify-center">
//           <ImportationProcessForm
//             handleInputChange={handleInputChange}
//             importProcessPFIData={importProcessPFIData}
//             importProcessSWIFTData={importProcessSWIFTData}
//             isFormSubmitted={isFormSubmitted} // Make sure to pass the state
//           />
//         </div>
//       )}
//     </div>,
//   ];

//   return (
//     <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-2 px-2 sm:px-6 dark:text-white-500">
//       <div className="title py-4 pb-0 lg:mb-[-1rem] 2xl:mb-0 pl-0 flex w-full justify-center items-center">
//         <h1 className="text-3xl font-semibold text-center text-[#00a651]">
//           Importation
//         </h1>
//       </div>

//       <div className="flex w-full justify-end pr-2">
//         <Link to={`/list`} className="text-md  text-[#00a651]">
//           Close
//           <CloseIcon fontSize="small" />
//         </Link>
//       </div>

//       {/* Content Container Start */}
//       <div className="content w-full sm:h-full overflow-auto rounded-t-3xl px-2 py-6 text-center bg-white-contents dark:bg-black-contents">
//         <Paper elevation={3} className={classes.stepperPaper}>
//           <ImportFormStepper currentStep={currentStep} steps={steps} />
//         </Paper>
//         <form className="flex w-full flex-col">{forms[currentStep]}</form>
//       </div>

//       {/* Content Container End */}

//       {/* Footer Container Start */}
//       <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
//         <div className="flex items-center justify-center space-x-20 pt-0">
//           {currentStep > 0 && (
//             <div className="flex items-center justify-center space-x-20 pt-0">
//               <Button
//                 style={{
//                   textTransform: "none",
//                   fontSize: "21px",
//                   fontFamily: "Roboto Condensed",
//                   color: "#00a651",
//                   backgroundColor: "transparent",
//                   borderRadius: "13px",
//                   cursor: "pointer",
//                 }}
//                 onClick={handleBack}
//                 type="button"
//               >
//                 Previous
//               </Button>
//             </div>
//           )}

//           {!isLastStep && (
//             <Button
//               disabled={isNextButtonDisabled}
//               style={{
//                 textTransform: "none",
//                 fontSize: "21px",
//                 fontFamily: "Roboto Condensed",
//                 color: "#00a651",
//                 backgroundColor: "transparent",
//                 borderRadius: "13px",
//                 cursor: isNextButtonDisabled ? "not-allowed" : "pointer",
//               }}
//               onClick={handleArrowButtonClick}
//               type="button"
//             >
//               {currentStep === 0 ? "Next" : null}
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImportDrug;

// ////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    boxShadow: "none",
    backgroundColor: "transparent",
  },
}));

function ImportFormStepper({ currentStep, steps }) {
  const classes = useStyles();
  const getDotClassName = (index) =>
    `dot ${currentStep === index ? "active" : ""}`;
  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel
      style={{ background: "transparent", boxShadow: "none" }}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel className={getDotClassName(index)} />
        </Step>
      ))}
    </Stepper>
  );
}

const validateCurrentForm = (
  currentStep,
  rfiFormData,
  importProcessPFIData,
  importProcessSWIFTData
) => {
  if (currentStep === 0) {
    // Validate the first form (RFI form)
    return rfiFormData.RequestedDrug !== "" && true;
  } else if (currentStep === 1) {
    // Validate the second form (Importation Process form)
    return (
      importProcessPFIData.PFInumber !== "" &&
      importProcessSWIFTData.swiftNumber !== "" &&
      true
    );
  }
  // Default to true if no specific validation is required
  return true;
};

const steps = ["Fill Request for Importation (RFI)", "Importation Process"];

function ImportDrug(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isLastStep = currentStep === 1;
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [rfiFormData, setRfiFormData] = useState({
    RequestedDrug: "",
    quantityRequested: "",
    offerType: "",
    offerPercentage: "",
    notes: "",
  });

  const [importProcessPFIData, setImportProcessPFIData] = useState({
    PFInumber: "",
    PFIdate: "",
    PFIamount: "",
    PFIdoc: "",
  });

  const [importProcessSWIFTData, setImportProcessSWIFTData] = useState({
    swiftNumber: "",
    swiftDate: "",
    swiftAmount: "",
    bankName: "",
    SWIFTdoc: "",
  });

  const handleInputChange = (name, value) => {
    // Update the state for the current form
    if (currentStep === 0) {
      setRfiFormData((prevData) => ({ ...prevData, [name]: value }));
    } else if (currentStep === 1) {
      if (
        name === "PFIdoc" ||
        name === "PFInumber" ||
        name === "PFIdate" ||
        name === "PFIamount"
      ) {
        setImportProcessPFIData((prevData) => ({ ...prevData, [name]: value }));
      } else {
        setImportProcessSWIFTData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }

    // Check form validity and update the state
    const isCurrentFormValid = validateCurrentForm(
      currentStep,
      rfiFormData,
      importProcessPFIData,
      importProcessSWIFTData
    );
    setIsNextButtonDisabled(!isCurrentFormValid);
  };

  // const handleNextStep = () => {
  //   if (currentStep === 2) {
  //   }

  //   setCurrentStep(currentStep + 1);
  // };

  // const handleBack = () => {
  //   setCurrentStep(currentStep - 1);
  // };
  const handleBack = () => {
    if (currentStep === 1) {
      setIsFormSubmitted(false);
    }

    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  // RFI form submission function (logging to console)
  const submitRFIForm = (rfiFormData) => {
    try {
      // Log the values of the submitted data to the console
      console.log("Submitted RFI Form Data Values:");
      Object.entries(rfiFormData).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });

      // Handle the result, e.g., show success message
      console.log("RFI Form submitted successfully");
    } catch (error) {
      // Handle errors, e.g., show error message to the user
      console.error("Error submitting RFI form:", error.message);
      throw error;
    }
  };

  const handleArrowButtonClick = async () => {
    if (currentStep === 0) {
      // Handle submit logic for the first step
      const isRFIFormValid = validateCurrentForm(
        0,
        rfiFormData,
        importProcessPFIData,
        importProcessSWIFTData
      );

      if (isRFIFormValid) {
        // Submit the RFI form with the current form data
        submitRFIForm(rfiFormData); // Passing rfiFormData here
        setIsFormSubmitted(true);
      } else {
        return;
      }
    }
    // else if (currentStep === 1) {
    // }

    // Move to the next step
    setCurrentStep(currentStep + 1);
  };

  const forms = [
    <div className="flex justify-center">
      {currentStep === 0 && !isFormSubmitted && (
        <RFImporationForm
          handleInputChange={handleInputChange}
          rfiFormData={rfiFormData}
          handleBack={handleBack}
        />
      )}
    </div>,

    <div className="flex justify-center">
      {currentStep === 1 && (
        <div className="flex justify-center">
          <ImportationProcessForm
            currentStep={currentStep}
            handleInputChange={handleInputChange}
            importProcessPFIData={importProcessPFIData}
            importProcessSWIFTData={importProcessSWIFTData}
            isFormSubmitted={isFormSubmitted}
          />
        </div>
      )}
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
      <div className="content w-full sm:h-full overflow-auto rounded-t-3xl px-2 py-6 text-center bg-white-contents dark:bg-black-contents">
        <Paper elevation={3} className={classes.stepperPaper}>
          <ImportFormStepper currentStep={currentStep} steps={steps} />
        </Paper>
        <form className="flex w-full flex-col">{forms[currentStep]}</form>
      </div>

      {/* Content Container End */}

      {/* Footer Container Start */}
      <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
        <div className="flex items-center justify-center space-x-20 pt-0">
          {currentStep > 0 && (
            <div className="flex items-center justify-center space-x-20 pt-0">
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
                Previous
              </Button>
            </div>
          )}

          {!isLastStep && (
            <Button
              disabled={isNextButtonDisabled}
              style={{
                textTransform: "none",
                fontSize: "21px",
                fontFamily: "Roboto Condensed",
                color: "#00a651",
                backgroundColor: "transparent",
                borderRadius: "13px",
                cursor: isNextButtonDisabled ? "not-allowed" : "pointer",
              }}
              onClick={handleArrowButtonClick}
              type="button"
            >
              {currentStep === 0 ? "Next" : null}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImportDrug;
