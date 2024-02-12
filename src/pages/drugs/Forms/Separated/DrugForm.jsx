// import React, { useContext } from "react";
// import "./DrugForm.css";
// // import { useDrugFormContext } from "./drugs/DrugFormProvider";
// import { DrugProvider, useDrugContext } from "../../../drugs/DrugContext";
// import DrugRegistryForm from "../DrugRegistryForm";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import Button from "@mui/material/Button";
// import { Step, Stepper, StepLabel } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { makeStyles } from "@mui/styles";
// import CloseIcon from "@mui/icons-material/Close";

// const DrugForm = () => {
//   const {
//     formData,
//     handleInputChange,
//     handleSubmit,
//     handleNext,
//     handlePrevious,
//     error,
//     currentStep,
//     steps,
//   } = useDrugContext();

//   const renderStep = (stepIndex) => {
//     switch (stepIndex) {
//       case 0:
//         return (
//           <div className="step-0">
//             <div className="input-group">
//               <label className="drug-label" htmlFor="Code">
//                 Code:
//               </label>
//               <input
//                 type="text"
//                 id="Code"
//                 name="Code"
//                 value={formData.Code}
//                 onChange={handleInputChange}
//                 className="drug-input"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label className="drug-label" htmlFor="BrandName">
//                 Brand Name:
//               </label>
//               <input
//                 type="text"
//                 id="BrandName"
//                 name="BrandName"
//                 value={formData.BrandName}
//                 onChange={handleInputChange}
//                 className="drug-input"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label className="drug-label" htmlFor="DosageName">
//                 Dosage Name:
//               </label>
//               <input
//                 type="text"
//                 id="DosageName"
//                 name="DosageName"
//                 value={formData.DosageName}
//                 onChange={handleInputChange}
//                 className="drug-input"
//                 required
//               />
//             </div>
//           </div>
//         );
//       case 1:
//         return (
//           <div className="step-1">
//             <div className="input-group">
//               <label className="drug-label" htmlFor="FormName">
//                 Form Name:
//               </label>
//               <input
//                 type="text"
//                 id="FormName"
//                 name="FormName"
//                 value={formData.FormName}
//                 onChange={handleInputChange}
//                 className="drug-input"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label className="drug-label" htmlFor="RouteName">
//                 Route Name:
//               </label>
//               <input
//                 type="text"
//                 id="RouteName"
//                 name="RouteName"
//                 value={formData.RouteName}
//                 onChange={handleInputChange}
//                 className="drug-input"
//                 required
//               />
//             </div>
//           </div>
//         );
//       case 2:
//         return (
//           <div className="step-2">
//             <div className="input-group">
//               <label className="drug-label" htmlFor="PriceUSD">
//                 Price USD:
//               </label>
//               <input
//                 type="number"
//                 id="PriceUSD"
//                 name="PriceUSD"
//                 value={formData.PriceUSD}
//                 onChange={handleInputChange}
//                 className="drug-input"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label className="drug-label" htmlFor="PriceLBP">
//                 Price LBP:
//               </label>
//               <input
//                 type="number"
//                 id="PriceLBP"
//                 name="PriceLBP"
//                 value={formData.PriceLBP}
//                 onChange={handleInputChange}
//                 className="drug-input"
//                 required
//               />
//             </div>
//           </div>
//         );
//       // Add cases for other steps
//       default:
//         return null;
//     }
//   };

//   return (
//     <form
//       className="drug-form grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-14 gap-8 mx-auto w-[80%] "
//       onSubmit={handleSubmit}
//     >
//       {error && <div className="error-message">{error}</div>}

//       {/* Render current step */}
//       {renderStep(currentStep)}

//       <div className="buttons-container">
//         {/* Previous Button */}
//         {currentStep > 0 && (
//           <button
//             type="button"
//             onClick={handlePrevious}
//             className="previous-button"
//           >
//             Previous
//           </button>
//         )}

//         {/* Next Button */}
//         {currentStep < steps.length - 1 && (
//           <button type="button" onClick={handleNext} className="next-button">
//             Next
//           </button>
//         )}

//         {/* Submit Button */}
//         {currentStep === steps.length - 1 && (
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         )}
//       </div>
//     </form>
//   );
// };

// export default DrugForm;

// //////////////////////////
// //////////////////////////
// //////////////////////////
// //////////////////////////

import React, { useContext } from "react";
import "./DrugForm.css";
// import { useDrugFormContext } from "./drugs/DrugFormProvider";
import { DrugProvider, useDrugContext } from "../../../drugs/DrugContext";
import DrugRegistryFormTest from "../DrugRegistryFormTest";
import DrugRegistryFormAddons from "../DrugRegistryFormAddons";
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

  // const renderStep = (stepIndex, formData, setFormData, handleInputChange) => {
  //   switch (stepIndex) {
  //     case 0:
  //       return (
  //         <div className="relative">
  //           <DrugRegistryFormTest
  //             formData={formData}
  //             handleInputChange={handleInputChange}
  //             currencySymbols={currencySymbols}
  //             exchangeRates={exchangeRates}
  //           />
  //         </div>
  //       );
  //     // case 1:
  //     //   return (
  //     //     <div className="relative">
  //     //       <DrugRegistryFormAddons
  //     //         formData={formData}
  //     //         handleInputChange={handleInputChange}
  //     //       />
  //     //     </div>
  //     //   );
  //     default:
  //       return null;
  //   }
  // };
  return (
    <form
      className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents"
      onSubmit={handleSubmit}
    >
      {error && <div className="error-message">{error}</div>}

      {/* Render current step */}
      {/* {renderStep(currentStep)} */}
      <div className="relative">
        <DrugRegistryFormTest
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
        {currentStep === steps.length - 1 && (
          <button type="submit" className="submit-button med-btn-pri-sm">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default DrugForm;
