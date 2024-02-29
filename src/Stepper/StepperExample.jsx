// import React, { useState } from "react";
// import { StepperProvider, useStepperContext } from "./StepperContext";
// import DrugRegistryForm from "../pages/drugs/Forms/DrugRegistryForm";
// import DrugRegistryFormAddons from "../pages/drugs/Forms/DrugRegistryFormAddons";

// // Define handleInputChange function to update form data
// const handleInputChange = (event, setFormData) => {
//   const { name, value } = event.target;
//   setFormData((prevFormData) => ({
//     ...prevFormData,
//     [name]: value,
//   }));
// };

// // Define your forms array
// const forms = [
//   <div className="flex justify-center ">
//     <DrugRegistryForm />
//   </div>,

//   <div className="flex justify-center ">
//     <DrugRegistryFormAddons />
//   </div>,
//   // Add more forms as needed for additional steps
// ];

// // Component to display the current form based on the currentStep
// const CurrentFormDisplay = () => {
//   const { currentStep } = useStepperContext();
//   const { formData, setFormData } = useStepperContext();

//   return React.cloneElement(forms[currentStep], {
//     handleInputChange: (event) => handleInputChange(event, setFormData),
//     formData,
//   });
// };

// // Component to render the stepper controls
// const StepperControls = () => {
//   const { currentStep, nextStep, prevStep } = useStepperContext();
//   const isLastStep = currentStep === forms.length - 1;
//   const { formData } = useStepperContext();

//   const handleNextOrSubmit = () => {
//     if (isLastStep) {
//       // Trigger submit request here
//       console.log("Submitting form data");
//       fetch("http://localhost:3000/drugs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData), // Adjust formData to your actual form data
//       })
//         .then((response) => {
//           if (response.ok) {
//             console.log("Form submitted successfully");
//             // Optionally reset form data or navigate to a different page
//           } else {
//             console.error("Failed to submit form data");
//           }
//         })
//         .catch((error) => {
//           console.error("Error submitting form data:", error);
//         });
//     } else {
//       nextStep();
//     }
//   };

//   return (
//     <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
//       <div className="flex items-center justify-center space-x-20 pt-0">
//         <button
//           style={{
//             textTransform: "none",
//             fontSize: "21px",
//             fontFamily: "Roboto Condensed",
//             color: "#00a651",
//             backgroundColor: "transparent",
//             borderRadius: "13px",
//             cursor: "pointer",
//           }}
//           onClick={prevStep}
//           type="button"
//           disabled={currentStep === 0}
//         >
//           Previous
//         </button>
//       </div>
//       <button
//         style={{
//           textTransform: "none",
//           fontSize: "21px",
//           fontFamily: "Roboto Condensed",
//           color: "#00a651",
//           backgroundColor: "transparent",
//           borderRadius: "13px",
//           cursor: "pointer",
//         }}
//         onClick={handleNextOrSubmit}
//         type="button"
//       >
//         {isLastStep ? "Submit" : "Next"}
//       </button>
//     </div>
//   );
// };

// // Main component to render the stepper and controls
// const StepperExample = () => {
//   // Define state to hold form data
//   const [formData, setFormData] = useState({});

//   return (
//     <StepperProvider>
//       <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-2 px-2 sm:px-6 dark:text-white-500">
//         <div className="title py-4 pb-0 lg:mb-[-1rem] 2xl:mb-0 pl-0 flex w-full justify-center items-center">
//           <h1 className="text-3xl font-semibold text-center text-[#00a651]">
//             Registration
//           </h1>
//         </div>

//         <div className="flex w-full justify-end pr-2">
//           {/* Link component */}
//         </div>

//         {/* Content Container Start */}
//         <div className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents">
//           <CurrentFormDisplay />
//         </div>
//         {/* Content Container End */}

//         {/* Footer Container Start */}
//         <StepperControls />
//         {/* Footer Container End */}
//       </div>
//     </StepperProvider>
//   );
// };

// export default StepperExample;

// //////////////////
// //////////////////
// //////////////////
// //////////////////

import React, { useState } from "react";
import { StepperProvider, useStepperContext } from "./StepperContext";
import DrugRegistryForm from "../pages/drugs/Forms/DrugRegistryForm";
import DrugRegistryFormAddons from "../pages/drugs/Forms/DrugRegistryFormAddons";

// Define your forms array
const forms = [
  <div className="flex justify-center ">
    <DrugRegistryForm />
  </div>,

  <div className="flex justify-center ">
    <DrugRegistryFormAddons />
  </div>,
  // Add more forms as needed for additional steps
];

// Component to display the current form based on the currentStep
const CurrentFormDisplay = () => {
  const { currentStep, handleInputChange, formData } = useStepperContext();

  return React.cloneElement(forms[currentStep], {
    handleInputChange: handleInputChange,
    formData,
  });
};

// Component to render the stepper controls
const StepperControls = () => {
  const { currentStep, nextStep, prevStep, handleNextOrSubmit } =
    useStepperContext();
  const isLastStep = currentStep === forms.length - 1;

  return (
    <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
      <div className="flex items-center justify-center space-x-20 pt-0">
        <button
          style={{
            textTransform: "none",
            fontSize: "21px",
            fontFamily: "Roboto Condensed",
            color: "#00a651",
            backgroundColor: "transparent",
            borderRadius: "13px",
            cursor: "pointer",
          }}
          onClick={prevStep}
          type="button"
          disabled={currentStep === 0}
        >
          Previous
        </button>
      </div>
      <button
        style={{
          textTransform: "none",
          fontSize: "21px",
          fontFamily: "Roboto Condensed",
          color: "#00a651",
          backgroundColor: "transparent",
          borderRadius: "13px",
          cursor: "pointer",
        }}
        onClick={handleNextOrSubmit}
        type="button"
      >
        {isLastStep ? "Submit" : "Next"}
      </button>
    </div>
  );
};

// Main component to render the stepper and controls
const StepperExample = () => {
  return (
    <StepperProvider>
      <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-2 px-2 sm:px-6 dark:text-white-500">
        <div className="title py-4 pb-0 lg:mb-[-1rem] 2xl:mb-0 pl-0 flex w-full justify-center items-center">
          <h1 className="text-3xl font-semibold text-center text-[#00a651]">
            Registration
          </h1>
        </div>

        <div className="flex w-full justify-end pr-2">
          {/* Link component */}
        </div>

        {/* Content Container Start */}
        <div className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents">
          <CurrentFormDisplay />
        </div>
        {/* Content Container End */}

        {/* Footer Container Start */}
        <StepperControls />
        {/* Footer Container End */}
      </div>
    </StepperProvider>
  );
};

export default StepperExample;
