// import React, { useState, useEffect, createContext, useContext } from "react";
// import axios from "axios";
// // import Axios from "../../api/axios";
// import { v4 as uuidv4 } from "uuid";

// // Create the context
// const DrugContext = createContext();

// // Function to generate GUID
// const generateGUID = () => uuidv4();

// // Function to generate initial form data
// const generateInitialFormData = () => {
//   return {
//     Guid: generateGUID(),
//     ATCGuid: generateGUID(),
//     DosageGuid: generateGUID(),
//     PresentationGuid: generateGUID(),
//     FormGuid: generateGUID(),
//     RouteGuid: generateGUID(),
//     StratumGuid: generateGUID(),
//     StratumTypeGuid: generateGUID(),
//     AgentGuid: generateGUID(),
//     BrandGuid: generateGUID(),
//     ManufacturerGuid: generateGUID(),
//     CountryGuid: generateGUID(),
//     ResponsiblePartyGuid: generateGUID(),
//     DrugLabelGuid: generateGUID(),
//     ATCName: "",
//     DosageName: "",
//     PresentationName: "",
//     FormName: "",
//     RouteName: "",
//     StratumName: "",
//     StratumTypeName: "",
//     AgentName: "",
//     BrandName: "",
//     ManufacturerName: "",
//     CountryName: "",
//     ResponsiblePartyName: "",
//     DrugLabelName: "",
//     Code: "",
//     RegistrationNumber: "",
//     CIF_FOB: "",
//     B_G: "",
//     NM: false,
//     GTIN: "",
//     Notes: "",
//     Description: "",
//     ActiveInactiveIngredient: "",
//     Indication: "",
//     Posology: "",
//     MethodOfAdministration: "",
//     Contraindications: "",
//     PrecautionForUse: "",
//     EffectOnFGN: "",
//     SideEffect: "",
//     Toxicity: "",
//     StorageCondition: "",
//     ShelfLife: "",
//     IngredientLabel: "",
//     IsBiological: false,
//     IsNarcotis: false,
//     IsOTC: false,
//     IsNSSF: false,
//     PriceFOREIGN: "",
//     currencyForeign: "",
//     PriceUSD: "",
//     PriceLBP: "",
//     ImagesPath: "",
//     ImageDefault: "",
//     InteractionIngredientName: "",
//   };
// };

// // Define the steps for the form
// const steps = [
//   "Step 1",
//   // "Step 2",
//   // "Step 3"
// ];

// // Create a context provider
// export const DrugProvider = ({ children }) => {
//   const [formData, setFormData] = useState(generateInitialFormData());
//   const [currentStep, setCurrentStep] = useState(0);
//   const [error, setError] = useState(null);
//   const [priceUSD, setPriceUSD] = useState("");
//   const [priceLBP, setPriceLBP] = useState("");
//   const [selectedDrugGuid, setSelectedDrugGuid] = useState(null); // State to store selected drug data

//   const exchangeRates = {
//     USD: 1,
//     CAD: 0.72,
//     EUR: 1.08,
//     CHF: 1.11,
//     DKK: 0.72,
//     GBP: 1.21,
//     SAR: 0.27,
//     JOD: 1.41,
//     LBP: 90000,
//   };

//   const convertToUSD = () => {
//     if (formData.PriceFOREIGN && formData.currencyForeign) {
//       const priceForeign = parseFloat(formData.PriceFOREIGN);
//       const exchangeRate = parseFloat(exchangeRates[formData.currencyForeign]);
//       if (!isNaN(priceForeign) && !isNaN(exchangeRate) && exchangeRate !== 0) {
//         const convertedPrice = priceForeign / exchangeRate;
//         console.log("Converted Price USD:", convertedPrice);
//         return convertedPrice.toFixed(2);
//       }
//     }
//     return "";
//   };

//   const convertToLBP = () => {
//     if (formData.PriceFOREIGN && formData.currencyForeign) {
//       const priceInUSD = convertToUSD();
//       const convertedPrice = priceInUSD * exchangeRates.LBP;
//       console.log("Converted Price LBP:", convertedPrice);
//       return convertedPrice.toFixed(0);
//     }
//     return "";
//   };

//   useEffect(() => {
//     // Calculate and set priceUSD whenever formData changes
//     const newPriceUSD = convertToUSD();
//     setPriceUSD(newPriceUSD);
//   }, [formData]);

//   useEffect(() => {
//     // Calculate and set priceLBP whenever formData changes
//     const newPriceLBP = convertToLBP();
//     setPriceLBP(newPriceLBP);
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === "checkbox" ? checked : value;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: fieldValue,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Calculate and update PriceUSD and PriceLBP in formData
//       const PriceUSD = convertToUSD();
//       const PriceLBP = convertToLBP();
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         PriceUSD,
//         PriceLBP,
//       }));

//       console.log("Converted Price USD:", PriceUSD);
//       console.log("Converted Price LBP:", PriceLBP);
//       console.log("Form Data after update:", formData);

//       // Submit form data
//       const response = await axios.post("http://localhost:3000/drugs/add", {
//         ...formData,
//       });
//       console.log(response.data); // Handle success response
//       setFormData(generateInitialFormData()); // Reset form after successful submission
//       setCurrentStep(0); // Reset to the first step after submission
//     } catch (error) {
//       setError(error.response.data.error || "An error occurred");
//     }
//   };

//   const handleNext = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   // Function to set selected drug
//   const selectDrug = (drugData) => {
//     setSelectedDrugGuid(drugData);
//   };

//   // Function to clear selected drug
//   const clearselectedDrugGuid = () => {
//     setSelectedDrugGuid(null);
//   };

//   // Context values
//   const contextValues = {
//     formData,
//     setFormData,
//     handleInputChange,
//     handleSubmit,
//     handleNext,
//     handlePrevious,
//     error,
//     currentStep,
//     steps,
//     exchangeRates,
//     priceUSD,
//     priceLBP,
//     selectedDrugGuid,
//     selectDrug,
//     clearselectedDrugGuid,
//   };

//   return (
//     <DrugContext.Provider value={contextValues}>
//       {children}
//     </DrugContext.Provider>
//   );
// };

// export const useDrugContext = () => useContext(DrugContext);
