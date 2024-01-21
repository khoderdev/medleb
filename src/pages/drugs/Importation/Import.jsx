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
import RFDeclerationForm from "./Forms/RFDeclerationForm";
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

  const handleInputChangeStep3 = (name, value) => {
    setFormDataStep3((prevFormData) => ({
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

  // const handleNextStep = () => {
  //   if (currentStep < steps.length - 1) {
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

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
      <RFDeclerationForm
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
    <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
      <div className="title py-4 pb-0 pl-0 flex w-full justify-center items-center">
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

// import React, { useState, useEffect } from "react";
// import { DrugProvider } from "../DrugContext";
// import { useNavigate, Link } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import CloseIcon from "@mui/icons-material/Close";
// import Button from "@mui/material/Button";
// import axios from "axios";
// import { Step, Stepper, StepLabel } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import "./styles.css";

// import { makeStyles } from "@mui/styles";
// import RFImporationForm from "./Forms/RFImporationForm";
// import RFDeclerationForm from "./Forms/RFDeclerationForm";
// import ShipmentForm from "./Forms/ShipmentForm";
// import DistributeForm from "./Forms/DistributeForm";
// import Tracking from "../Tracking/Tracking";

// const useStyles = makeStyles((theme) => ({
//   stepperPaper: {
//     boxShadow: "none", // Remove box-shadow
//     backgroundColor: "transparent", // Set background-color to transparent
//   },
// }));

// function FormStepper({ currentStep, steps }) {
//   const classes = useStyles();

//   return (
//     <Stepper
//       activeStep={currentStep}
//       alternativeLabel
//       style={{ background: "transparent", boxShadow: "none" }}
//     >
//       {steps.map((label, index) => (
//         <Step key={label}>
//           <StepLabel
//             className={`dot  ${currentStep === index ? "active" : ""}`}
//           />
//         </Step>
//       ))}
//     </Stepper>
//   );
// }

// function ImportDrug(props) {
//   const classes = useStyles();
//   const [currentStep, setCurrentStep] = useState(0);
//   const navigate = useNavigate();
//   const isLastStep = currentStep === 3;

//   const steps = [
//     "Fill Request for Importation (RFI)",
//     "IED Permit Decision",
//     "Submit Proforma Invoice (PI)",
//     "IED Approval on PI",
//     "Attach Swift and Review",
//   ];

//   const [formDataStep1, setFormDataStep1] = useState({
//     drugName: "",
//     quantityRequested: "",
//     offerType: "",
//     offerPercentage: "",
//     notes: "",
//   });

//   const [formDataStep2, setFormDataStep2] = useState({
//     status: "Approved",
//     qtyApproved: "50",
//     PInumber: "123",
//     PIdate: "15-12-2023",
//     PIamount: "USD 15,000,000",
//     proformaInvoice: "1145/78",
//   });

//   const [formDataStep3, setFormDataStep3] = useState({
//     swiftNumber: "8794",
//     swiftAmount: "USD 15,000,000",
//     swiftDate: "15-12-2023",
//     bankName: "Bemo",
//     swift: "",
//   });

//   const handleInputChangeStep1 = (name, value) => {
//     setFormDataStep1((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleInputChangeStep2 = (name, value) => {
//     setFormDataStep2((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleInputChangeStep3 = (name, value) => {
//     setFormDataStep3((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const logFormData = () => {
//     const finalFormData = {
//       ...formDataStep1,
//       ...formDataStep2,
//       ...formDataStep3,
//     };

//     console.log("Final Form Data:", finalFormData);

//     navigate("/import");
//   };

//   const handleNextStep = () => {
//     if (currentStep === 2) {
//     }

//     setCurrentStep(currentStep + 1);
//   };

//   const handleBack = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const handleArrowButtonClick = () => {
//     if (isLastStep) {
//       logFormData();
//     } else {
//       handleNextStep();
//     }
//   };

//   const forms = [
//     <div className="flex justify-center ">
//       <RFImporationForm
//         handleInputChange={handleInputChangeStep1}
//         formDataStep1={formDataStep1}
//       />
//     </div>,
//     <div className="flex justify-center">
//       <RFDeclerationForm
//         handleInputChange={(handleInputChangeStep2, handleInputChangeStep3)}
//         formDataStep2={formDataStep2}
//         formDataStep3={formDataStep3}
//       />
//     </div>,
//   ];

//   return (
//     <DrugProvider>
//       <Tracking>
//         <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
//           <div className="title py-4 pb-0 pl-0 flex w-full justify-center items-center">
//             <h1 className="text-3xl font-semibold text-center text-[#00a651]">
//               Registration
//             </h1>
//           </div>

//           <div className="flex w-full justify-end pr-2">
//             <Link to={`/list`} className="text-md  text-[#00a651]">
//               Close
//               <CloseIcon fontSize="small" />
//             </Link>
//           </div>

//           {/* Content Container Start */}
//           <div className="content w-full sm:h-full overflow-auto rounded-t-3xl p-6 text-center bg-white-contents dark:bg-black-contents">
//             <Paper elevation={3} className={classes.stepperPaper}>
//               <FormStepper currentStep={currentStep} steps={steps} />
//             </Paper>
//             <form className="flex w-full flex-col">{forms[currentStep]}</form>
//           </div>

//           {/* Content Container End */}

//           {/* Footer Container Start */}
//           <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
//             <div className="flex items-center justify-center space-x-20 pt-0">
//               {currentStep > 0 ? (
//                 <Button
//                   style={{
//                     textTransform: "none",
//                     fontSize: "21px",
//                     fontFamily: "Roboto Condensed",
//                     color: "#00a651",
//                     backgroundColor: "transparent",
//                     borderRadius: "13px",
//                     cursor: "pointer",
//                   }}
//                   onClick={handleBack}
//                   type="button"
//                 >
//                   <FaArrowLeftLong
//                     style={{
//                       fontSize: "20px",
//                       color: "#00a651",
//                     }}
//                     className="mr-2 text-[20px] text-[#00a651]"
//                   />
//                   Previous
//                 </Button>
//               ) : (
//                 <div style={{ width: "104px" }}></div> // Placeholder with the width of the button
//               )}
//             </div>
//             <Button
//               style={{
//                 textTransform: "none",
//                 fontSize: "21px",
//                 fontFamily: "Roboto Condensed",
//                 color: isLastStep ? "#fff" : "#00a651",
//                 backgroundColor: isLastStep ? "#00a651" : "transparent",
//                 borderRadius: isLastStep ? "13px" : "13px",
//               }}
//               onClick={handleArrowButtonClick}
//               type="button"
//             >
//               {isLastStep ? "Submit" : "Next"}
//               <FaArrowRightLong
//                 style={{
//                   fontSize: "20px",
//                   color: isLastStep ? "text-white" : "text-[#00a651]",
//                 }}
//                 className={`ml-2 text-[20px] ${
//                   isLastStep ? "hidden" : "text-[#00a651]"
//                 }`}
//               />
//             </Button>
//           </div>
//           {/* Footer Container End */}
//         </div>
//       </Tracking>
//     </DrugProvider>
//   );
// }

// export default ImportDrug;

// //////////////////////////////

// import React, { useState, useEffect } from "react";
// import { DrugProvider } from "../DrugContext";
// import { useNavigate, Link } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import CloseIcon from "@mui/icons-material/Close";
// import Button from "@mui/material/Button";
// import axios from "axios";
// import { Step, Stepper, StepLabel } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import "./styles.css";
// import { makeStyles } from "@mui/styles";
// import RFImporationForm from "./Forms/RFImporationForm";
// import RFDeclerationForm from "./Forms/RFDeclerationForm";
// import ShipmentForm from "./Forms/ShipmentForm";
// import DistributeForm from "./Forms/DistributeForm";
// import Tracking from "../Tracking/Tracking";

// const ImportDrug = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const navigate = useNavigate();
//   const isLastStep = currentStep === 2; // Update the number of steps

//   // Add your steps data here
//   const steps = [
//     "Fill Request for Importation (RFI)",
//     "IED Permit Decision",
//     "Submit Proforma Invoice (PI)",
//     // Add more steps if needed
//   ];

//   const [formDataStep1, setFormDataStep1] = useState({
//     RequestedDrug: "",
//     quantityRequested: "",
//     offerType: "",
//     offerPercentage: "",
//     notes: "",
//   });

//   const [formDataStep2, setFormDataStep2] = useState({
//     status: "Approved",
//     qtyApproved: "50",
//     PInumber: "123",
//     PIdate: "15-12-2023",
//     PIamount: "USD 15,000,000",
//     proformaInvoice: "1145/78",
//   });

//   const handleInputChange = (name, value) => {
//     // Update the corresponding form data state based on the current step
//     switch (currentStep) {
//       case 0:
//         setFormDataStep1((prevFormData) => ({
//           ...prevFormData,
//           [name]: value,
//         }));
//         break;
//       case 1:
//         setFormDataStep2((prevFormData) => ({
//           ...prevFormData,
//           [name]: value,
//         }));
//         break;
//       // Add cases for more steps
//       default:
//         break;
//     }
//   };

//   const handleNextStep = () => {
//     // Add your logic to validate form data and proceed to the next step
//     if (validateFormData()) {
//       if (currentStep < steps.length - 1) {
//         setCurrentStep(currentStep + 1);
//       }
//     }
//   };

//   const validateFormData = () => {
//     // Implement your form validation logic here
//     // Return true if the form data is valid, otherwise, return false
//     return true;
//   };

//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleArrowButtonClick = () => {
//     if (isLastStep) {
//       logFormData();
//     } else {
//       handleNextStep();
//     }
//   };

//   const logFormData = () => {
//     // Log or submit your final form data
//     const finalFormData = {
//       ...formDataStep1,
//       ...formDataStep2,
//       // Add more form data if needed
//     };

//     console.log("Final Form Data:", finalFormData);

//     // Redirect or perform any other action
//     navigate("/import");
//   };

//   // Dynamically render the form component based on the current step
//   const forms = [
//     <div className="flex justify-center">
//       <RFImporationForm
//         handleInputChange={handleInputChange}
//         formDataStep1={formDataStep1}
//       />
//     </div>,
//     <div className="flex justify-center">
//       <RFDeclerationForm
//         handleInputChange={handleInputChange}
//         formDataStep2={formDataStep2}
//       />
//     </div>,
//   ];

//   return (
//     <div>
//       <h1>Drug Order Process</h1>
//       <Tracking steps={steps} currentStep={currentStep} />
//       <form className="flex w-full flex-col">{forms[currentStep]}</form>
//       <button onClick={handleBack}>Back</button>
//       <button onClick={handleArrowButtonClick}>
//         {isLastStep ? "Submit" : "Next"}
//       </button>
//     </div>
//   );
// };

// export default ImportDrug;
