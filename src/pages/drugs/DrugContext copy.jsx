// // // import { createContext, useContext, useState } from 'react';

// // // const DrugContext = createContext();

// // // const useDrugContext = () => {
// // //   const context = useContext(DrugContext);
// // //   if (!context) {
// // //     throw new Error('useDrugContext must be used within a DrugContextProvider');
// // //   }
// // //   return context;
// // // };

// // // const DrugProvider = ({ children }) => {
// // //   const [drugs, setDrugs] = useState([]);
// // //   const [imageState, setImageState] = useState(Array(6).fill([]));

// // //   const updateImageState = (index, newImageState) => {
// // //     setImageState((prevImageState) => {
// // //       const newImageList = [...prevImageState];
// // //       newImageList[index] = newImageState;
// // //       return newImageList;
// // //     });
// // //   };

// // //   const value = {
// // //     drugs,
// // //     setDrugs,
// // //     imageState,
// // //     updateImageState,
// // //   };

// // //   return <DrugContext.Provider value={value}>{children}</DrugContext.Provider>;
// // // };

// // // export { DrugContext, DrugProvider, useDrugContext };

// // // ///////////////////////////////
// // // ///////////////////////////////
// // // ///////////////////////////////
// // // ///////////////////////////////

// import { createContext, useState,  useContext} from "react";
// import Axios from "../../api/axios";
// import { v4 as uuidv4 } from "uuid";

// const DrugContext = createContext();

// const useDrugContext = () => {
//   const context = useContext(DrugContext);
//   if (!context) {
//     throw new Error("useDrugContext must be used within a DrugContextProvider");
//   }
//   return context;
// };

// const generateGUID = () => uuidv4();

// // Function to generate initial form data
// // const generateInitialDrugData = () => {
// //   return {
// //     Guid: generateGUID(),
// //     ATCGuid: generateGUID(),
// //     DosageGuid: generateGUID(),
// //     PresentationGuid: generateGUID(),
// //     FormGuid: generateGUID(),
// //     RouteGuid: generateGUID(),
// //     StratumGuid: generateGUID(),
// //     StratumTypeGuid: generateGUID(),
// //     AgentGuid: generateGUID(),
// //     BrandGuid: generateGUID(),
// //     ManufacturerGuid: generateGUID(),
// //     CountryGuid: generateGUID(),
// //     ResponsiblePartyGuid: generateGUID(),
// //     DrugLabelGuid: generateGUID(),
// //     ATCName: "",
// //     DosageName: "",
// //     PresentationName: "",
// //     FormName: "",
// //     RouteName: "",
// //     StratumName: "",
// //     StratumTypeName: "",
// //     AgentName: "",
// //     BrandName: "",
// //     ManufacturerName: "",
// //     CountryName: "",
// //     ResponsiblePartyName: "",
// //     DrugLabelName: "",
// //     Code: "",
// //     RegistrationNumber: "",
// //     CIF_FOB: "",
// //     B_G: "",
// //     NM: false,
// //     GTIN: "",
// //     Notes: "",
// //     Description: "",
// //     ActiveInactiveIngredient: "",
// //     Indication: "",
// //     Posology: "",
// //     MethodOfAdministration: "",
// //     Contraindications: "",
// //     PrecautionForUse: "",
// //     EffectOnFGN: "",
// //     SideEffect: "",
// //     Toxicity: "",
// //     StorageCondition: "",
// //     ShelfLife: "",
// //     IngredientLabel: "",
// //     IsBiological: false,
// //     IsNarcotis: false,
// //     IsOTC: false,
// //     IsNSSF: false,
// //     PriceUSD: "",
// //     PriceLBP: "",
// //     ImagesPath: "",
// //     ImageDefault: "",
// //     InteractionIngredientName: "",
// //   };
// // };

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

// const currencySymbols = {
//   USD: "$",
//   CAD: "C$",
//   EUR: "€",
//   CHF: "CHF",
//   DKK: "kr",
//   GBP: "£",
//   SAR: "SAR",
//   JOD: "JD",
//   LBP: "LBP",
// };

// // Define the steps for the form
// const steps = [
//   "Step 1",
//   "Step 2",
//   "Step 3",
//   // "Step 4",
//   // "Step 5",
//   // "Step 6",
//   // "Step 7",
// ];

// const DrugProvider = ({ children }) => {
//   const [drugsData, setDrugsData] = useState({
//     Code: "",
//     BrandName: "",
//     DosageName: "",
//     FormName: "",
//     RouteName: "",
//     priceForeign: "",
//     PriceUSD: "",
//     PriceLBP: "",
//     currencyForeign: "USD",
//   });
//   const [drugDataWithGuid, setDrugDataWithGuid] = useState([]);
//   const [imageState, setImageState] = useState(Array(6).fill([]));
//   const [currentStep, setCurrentStep] = useState(0);
//   const isLastStep = currentStep === 2;
//   const [error, setError] = useState(null);
//   const [currencyForeign, setCurrencyForeign] = useState(null);

//   const updateImageState = (index, newImageState) => {
//     setImageState((prevImageState) => {
//       const newImageList = [...prevImageState];
//       newImageList[index] = newImageState;
//       return newImageList;
//     });
//   };

//   function convertToUSD() {
//     if (drugsData && drugsData.priceForeign && drugsData.currencyForeign) {
//       const convertedPrice =
//         drugsData.priceForeign / exchangeRates[drugsData.currencyForeign];
//       return convertedPrice.toFixed(2); // Display with 2 decimal places
//     }
//     return "";
//   }

//   function convertToLBP() {
//     if (drugsData && drugsData.priceForeign && drugsData.currencyForeign) {
//       const priceInUSD = convertToUSD();
//       const convertedPrice =
//         (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
//       return convertedPrice.toFixed(2);
//     }
//     return "";
//   }

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     console.log(`Updating state for ${name}: ${value}`);
//     const fieldValue = type === "checkbox" ? checked : value;
//     setDrugsData((prevData) => {
//       const newData = {
//         ...prevData,
//         [name]: fieldValue,
//       };
//       console.log("New data state:", newData); // Log updated state
//       return newData;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const PriceUSD = convertToUSD();
//       const PriceLBP = convertToLBP();

//       const drugDataWithGuid = {
//         ...drugsData,
//         Guid: generateGUID(),
//         ATCGuid: generateGUID(),
//         DosageGuid: generateGUID(),
//         PresentationGuid: generateGUID(),
//         FormGuid: generateGUID(),
//         RouteGuid: generateGUID(),
//         StratumGuid: generateGUID(),
//         StratumTypeGuid: generateGUID(),
//         AgentGuid: generateGUID(),
//         BrandGuid: generateGUID(),
//         ManufacturerGuid: generateGUID(),
//         CountryGuid: generateGUID(),
//         ResponsiblePartyGuid: generateGUID(),
//         DrugLabelGuid: generateGUID(),
//         ATCName: "",
//         DosageName: "",
//         PresentationName: "",
//         FormName: "",
//         RouteName: "",
//         StratumName: "",
//         StratumTypeName: "",
//         AgentName: "",
//         BrandName: "",
//         ManufacturerName: "",
//         CountryName: "",
//         ResponsiblePartyName: "",
//         DrugLabelName: "",
//         Code: "",
//         RegistrationNumber: "",
//         CIF_FOB: "",
//         B_G: "",
//         NM: false,
//         GTIN: "",
//         Notes: "",
//         Description: "",
//         ActiveInactiveIngredient: "",
//         Indication: "",
//         Posology: "",
//         MethodOfAdministration: "",
//         Contraindications: "",
//         PrecautionForUse: "",
//         EffectOnFGN: "",
//         SideEffect: "",
//         Toxicity: "",
//         StorageCondition: "",
//         ShelfLife: "",
//         IngredientLabel: "",
//         IsBiological: false,
//         IsNarcotis: false,
//         IsOTC: false,
//         IsNSSF: false,
//         PriceUSD,
//         PriceLBP,
//         ImagesPath: "",
//         ImageDefault: "",
//         InteractionIngredientName: "",
//       };

//       console.log("After creating object:", drugDataWithGuid); // Log object after creation

//       // Now, all the fields, including the empty ones, are updated in the state
//       setDrugsData(drugDataWithGuid);

//       console.log("After setting state:", drugsData); // Log state after setting

//       const response = await Axios.post(
//         "http://localhost:3000/drugs/add",
//         drugDataWithGuid
//       );
//       console.log(response.data); // Handle success response
//       setCurrentStep(0); // Reset to the first step after submission
//     } catch (error) {
//       setError(error.response?.data?.error || "An error occurred");
//     }
//   };

//   const handleNext = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   const handleArrowButtonClick = async (e) => {
//     if (isLastStep) {
//       // Check if Code and BrandName are not empty
//       if (drugsData.Code.trim() !== "" && drugsData.BrandName.trim() !== "") {
//         try {
//           await handleSubmit(e);
//           // If handleSubmit succeeds, reset the form
//           setDrugsData({
//             Code: "",
//             BrandName: "",
//             DosageName: "",
//             FormName: "",
//             RouteName: "",
//             priceForeign: "",
//             PriceUSD: "",
//             PriceLBP: "",
//             currencyForeign: "USD",
//           });
//         } catch (error) {
//           // Handle any error from handleSubmit
//           setError(error.response?.data?.error || "An error occurred");
//         }
//       } else {
//         // Display an error message or handle the empty fields as needed
//         setError("Code and BrandName cannot be empty");
//       }
//     } else {
//       handleNext();
//     }
//   };

//   const value = {
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
//   };

//   return <DrugContext.Provider value={value}>{children}</DrugContext.Provider>;
// };

// export { DrugContext, DrugProvider, useDrugContext };

// //////////////////////////////
// //////////////////////////////
// //////////////////////////////


