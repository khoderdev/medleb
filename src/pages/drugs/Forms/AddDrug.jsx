// // //////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { DrugProvider } from "../DrugContext";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "@mui/material/Button";
import DrugRegistryForm from "./DrugRegistryForm";
import DrugRegistryFormAddons from "./DrugRegistryFormAddons";
import DrugSubstanceInformationsForm from "./DrugSubstanceInformationsForm";
import UnifiedDrugInformations from "./UnifiedDrugInformations";
import PricingInformations from "./PricingInformations";
import ManufacturingAndImportingInfo from "./ManufacturingAndImportingInfo";
import axios from "axios";
import DrugImages from "./DrugImages";
import DrugDocuments from "./DrugDocuments";
import { Step, Stepper, StepLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  stepperPaper: {
    boxShadow: "none",
    backgroundColor: "transparent",
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

function AddDrug(props) {
  const classes = useStyles();
  const [drugImagesList, setImagesList] = useState(
    Array.from({ length: 6 }, () => [])
  );
  const [drugDocumentsList, setDrugDocumentsList] = useState(
    Array.from({ length: 15 }, () => [])
  );
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const isLastStep = currentStep === 6;
  const { drugId } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);

  const steps = [
    "Drug Registry",
    "Drug Registry Addons",
    "Drug Images",
    "Pricing Approval",
    "Marketing Approval",
    "Substance Information",
    "Unified Drug Information",
  ];

  // const exchangeRates = {
  //   USD: 1,
  //   CAD: 0.72,
  //   EUR: 1.06,
  //   CHF: 1.11,
  //   DKK: 0.72,
  //   GBP: 1.21,
  //   SAR: 0.27,
  //   JOD: 1.41,
  //   LBP: 900,
  // };

  const currencySymbols = {
    USD: "$",
    CAD: "C$",
    EUR: "€",
    CHF: "CHF",
    DKK: "kr",
    GBP: "£",
    SAR: "SAR",
    JOD: "JD",
    LBP: "LBP",
  };

  const [formDataStep1, setFormDataStep1] = useState({
    drugImages: "",
    drugName: "Panadol",
    type: "Brand",
    responsibleParty: "",
    responsiblePartyCountry: "",
    manufacturer: "",
    manufacturingCountry: "",
    cargoShippingTerms: "",
    priceForeign: "13",
    currencyForeign: "CAD",
    convertToUSD: "",
    convertToLBP: "",
    registrationNumber: "",
    registrationDate: "",
    reviewDate: "",
    mohCode: "",
  });

  const [formDataStep11, setFormDataStep11] = useState({
    productDesc: "",
    activeInactiveIngredients: "",
    indications: "",
    posology: "",
    methodOfAdministration: "",
    contraindications: "",
    precautionsForUse: "",
    effectsOnFGN: "",
    sideEffects: "",
    toxicity: "",
    storageConditions: "",
    shelfLife: "",
  });
  const [formDataStep12, setFormDataStep12] = useState({
    drugImages: "",
  });

  const [formDataStep2, setFormDataStep2] = useState({
    ingredientsAndstrength: "Paracetamol",
    form: "Tablet",
    primaryContainerPackage: "Sachet",
    manufacturer: "",
    manufacturingCountry: "",
    agent: "Omnipharma",
    atcCode: "AB001",
    atcRelatedIngredients: "Caffeine",
  });

  const [formDataStep3, setFormDataStep3] = useState({
    atcRelatedIngredients: "Caffeine",
    registrationNumber: "1234/A01",
    registrationDate: "",
    dosageValueN: "500",
    dosageUnitN: "mg/g",
    dosageUnit: "",
    doseForm: "concentrated",
    route: "Rectal",
    presentationContentQty: "24",
    contentUnitType: "mg",
    presentationContainerQty: "100",
    containerUnitType: "Box",
    prescriptionAndDispensingCondition: "",
    drugName: "Panadol",
    mohCode: "",
    type: "Brand",
    atcCode: "AB001",
  });

  const [formDataStep4, setFormDataStep4] = useState({
    priceForeign: "13",
    currencyForeign: "CAD",
    convertToUSD: "",
    convertToLBP: "",
    stratum: "E1",
    cargoShipping: "8%",
    douanes: "",
    subsidizationLabel: "",
    agentProfitMargin: "8",
    pharmacistProfitMargin: "8.5",
    hospitalPriceLBP: "900,000",
  });

  const [formDataStep5, setFormDataStep5] = useState({
    responsibleParty: "",
    responsiblePartyCountry: "",
    responsiblePartyID: "123321",
    manufacturer: "",
    manufacturerID: "321123",
    manufacturingCountry: "",
    agent: "Omnipharma",
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
    }
  };

  const handleInputChangeStep12 = (name, value) => {
    setFormDataStep12((prevFormData) => ({
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
        await axios.put(`http://1.1.1.252:3500/drugs/${drugId}`, finalFormData);
      } else {
        // If not in edit mode, create a new drug
        console.log("Creating a new drug");
        await axios.post("http://1.1.1.252:3500/drugs", finalFormData);
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

    if (
      name === "priceForeign" ||
      name === "convertToLBP" ||
      name === "convertToUSD"
    ) {
      // Parse the value as a number or handle empty strings appropriately
      const numericValue = parseFloat(value) || 0;

      setFormDataStep1((prevDrug) => ({
        ...prevDrug,
        [name]: numericValue,
      }));
    } else if (type === "checkbox") {
      // Update checkbox state based on the current value of checked
      setFormDataStep1((prevDrug) => ({
        ...prevDrug,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      setFormDataStep1((prevDrug) => ({
        ...prevDrug,
        [name]: value,
      }));
    }

    setFormDataStep11((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep12((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep3((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormDataStep4((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

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

  const [newUploadedImages, setNewUploadedImages] = useState([]);
  const [newUploadedDocuments, setNewUploadedDocuments] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const updateImageState = (index, newImageState) => {};
  const updateDocumentState = (index, newDocumentState) => {};

  const handleImageUpload = (newUploadedImages) => {
    setUploadedImages(newUploadedImages);

    // Assuming formDataStep2 is the form data object for step 2
    setFormDataStep12((prevFormDataStep12) => ({
      ...prevFormDataStep12,
      drugImages: newUploadedImages.map((image) => ({
        imageUrl: image.imageUrl,
      })),
    }));
  };
  const handleDocumentUpload = (newUploadedDocuments) => {
    setUploadedDocuments(newUploadedDocuments);

    // Assuming formDataStep2 is the form data object for step 2
    setFormDataStep12((prevFormDataStep12) => ({
      ...prevFormDataStep12,
      drugDocuments: newUploadedDocuments.map((image) => ({
        documentUrl: image.imageUrl,
      })),
    }));
  };

  const forms = [
    <div className="flex justify-center ">
      <DrugRegistryForm
        handleInputChange={handleInputChange}
        formDataStep1={formDataStep1}
        handleChildArrowButtonClick={handleChildArrowButtonClick}
      />
    </div>,

    <div className="flex justify-center ">
      <DrugRegistryFormAddons
        handleInputChange={handleInputChange}
        formDataStep11={formDataStep11}
      />
    </div>,

    <div className="flex flex-col justify-center h-full pb-16 gap-3">
      {currentStep === 2 && (
        <>
          <DrugDocuments
            drugDocumentsList={drugDocumentsList}
            setDrugDocumentsList={setDrugDocumentsList}
            formDataStep12={formDataStep12}
            handleInputChangeStep1={handleInputChangeStep1}
            updateDocumentState={updateDocumentState}
            uploadedDocuments={uploadedDocuments}
            newUploadedDocuments={newUploadedDocuments}
            handleDocumentUpload={handleDocumentUpload}
          />
          <DrugImages
            drugImagesList={drugImagesList}
            setImagesList={setImagesList}
            formDataStep12={formDataStep12}
            handleInputChangeStep1={handleInputChangeStep1}
            updateImageState={updateImageState}
            uploadedImages={uploadedImages}
            newUploadedImages={newUploadedImages}
            handleImageUpload={handleImageUpload}
          />
        </>
      )}
    </div>,

    <div className="flex justify-center">
      <DrugSubstanceInformationsForm
        handleInputChange={handleInputChange}
        formDataStep2={formDataStep2}
      />
    </div>,

    <div className="flex justify-center">
      <UnifiedDrugInformations
        handleInputChange={handleInputChange}
        formDataStep3={formDataStep3}
      />
    </div>,

    <div className="flex justify-center">
      <PricingInformations
        handleInputChange={handleInputChange}
        formDataStep4={formDataStep4}
      />
    </div>,

    <div className="flex justify-center">
      <ManufacturingAndImportingInfo
        handleInputChange={handleInputChange}
        formDataStep5={formDataStep5}
      />
    </div>,
  ];

  return (
    /* Page Title Header Container (Outside the Box) Start */
    <DrugProvider>
      <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-2 px-2 sm:px-6 dark:text-white-500">
        <div className="title py-4 pb-0 lg:mb-[-1rem] 2xl:mb-0 pl-0 flex w-full justify-center items-center">
          <h1 className="text-3xl font-semibold text-center text-[#00a651]">
            Registration
          </h1>
        </div>

        <div className="flex w-full justify-end pr-2">
          <Link to={`/list`} className="text-md  text-[#00a651]">
            Close
            <CloseIcon fontSize="small" />
          </Link>
        </div>

        {/* Content Container Start */}
        <div className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents">
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

export default AddDrug;

// // //////////////////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////

// // //////////////////////////////////////////////////////////////////////

// import { useNavigate, Link, useParams } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import Button from "@mui/material/Button";
// import { Step, Stepper, StepLabel } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { makeStyles } from "@mui/styles";
// import CloseIcon from "@mui/icons-material/Close";
// import DrugRegistryForm from "./DrugRegistryForm";
// import { DrugProvider, useDrugContext } from "../DrugContext";

// const useStyles = makeStyles((theme) => ({
//   stepperPaper: {
//     boxShadow: "none",
//     backgroundColor: "transparent",
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

// function AddDrug() {
//   const classes = useStyles();
//   const {
//     drugsData,
//     drugDataWithGuid,
//     setDrugsData,
//     imageState,
//     updateImageState,
//     handleInputChange,
//     handleSubmit,
//     handleNext,
//     handlePrevious,
//     handleArrowButtonClick,
//     error,
//     currentStep,
//     isLastStep,
//     steps,
//     generateGUID,
//     exchangeRates,
//     currencySymbols,
//     currencyForeign,
//     convertToUSD,
//     convertToLBP,
//   } = useDrugContext();

//   const forms = [
//     <div className="flex justify-center ">
//       <DrugRegistryForm
//         handleInputChange={handleInputChange}
//         drugsData={drugsData}
//       />
//     </div>,
//   ];

//   return (
//     /* Page Title Header Container (Outside the Box) Start */
//     <DrugProvider>
//       <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-2 px-2 sm:px-6 dark:text-white-500">
//         <div className="title py-4 pb-0 lg:mb-[-1rem] 2xl:mb-0 pl-0 flex w-full justify-center items-center">
//           <h1 className="text-3xl font-semibold text-center text-[#00a651]">
//             Registration
//           </h1>
//         </div>

//         <div className="flex w-full justify-end pr-2">
//           <Link to={`/list`} className="text-md  text-[#00a651]">
//             Close
//             <CloseIcon fontSize="small" />
//           </Link>
//         </div>

//         {/* Content Container Start */}
//         {/* <div className="content w-full sm:h-full overflow-auto rounded-t-3xl py-6 pb-0 text-center bg-white-contents dark:bg-black-contents">
//           <Paper elevation={3} className={classes.stepperPaper}>
//             <FormStepper currentStep={currentStep} steps={steps} />
//           </Paper>
//           <form className="flex w-full flex-col">{forms[currentStep]}</form>
//         </div> */}

//         {/* Content Container End */}

//         {/* Footer Container Start */}
//         <div className="footer w-full flex justify-center space-x-20 rounded-b-3xl py-0 text-center text-2xl bg-white-contents dark:bg-black-contents sm:pb-0">
//           <div className="flex items-center justify-center space-x-20 pt-0">
//             {currentStep > 0 ? (
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
//                 onClick={handlePrevious}
//                 type="button"
//               >
//                 <FaArrowLeftLong
//                   style={{
//                     fontSize: "20px",
//                     color: "#00a651",
//                   }}
//                   className="mr-2 text-[20px] text-[#00a651]"
//                 />
//                 Previous
//               </Button>
//             ) : (
//               <div style={{ width: "104px" }}></div> // Placeholder with the width of the button
//             )}
//           </div>
//           <Button
//             style={{
//               textTransform: "none",
//               fontSize: "21px",
//               fontFamily: "Roboto Condensed",
//               color: isLastStep ? "#fff" : "#00a651",
//               backgroundColor: isLastStep ? "#00a651" : "transparent",
//               borderRadius: isLastStep ? "13px" : "13px",
//             }}
//             onClick={handleArrowButtonClick}
//             type="button"
//           >
//             {isLastStep ? "Submit" : "Next"}
//             <FaArrowRightLong
//               style={{
//                 fontSize: "20px",
//                 color: isLastStep ? "text-white" : "text-[#00a651]",
//               }}
//               className={`ml-2 text-[20px] ${
//                 isLastStep ? "hidden" : "text-[#00a651]"
//               }`}
//             />
//           </Button>
//         </div>
//         {/* Footer Container End */}
//       </div>
//     </DrugProvider>
//   );
// }

// export default AddDrug;

// // //////////////////////////////////////////////////////////////////////
