import React, { useState, useEffect, createContext, useContext } from "react";
import Axios from "../../api/axios";
import { v4 as uuidv4 } from "uuid";
// import "../../DrugForm.css";

// Create the context
const DrugContext = createContext();

// Function to generate GUID
const generateGUID = () => uuidv4();

// Function to generate initial form data
const generateInitialFormData = () => {
  return {
    Guid: generateGUID(),
    ATCGuid: generateGUID(),
    DosageGuid: generateGUID(),
    PresentationGuid: generateGUID(),
    FormGuid: generateGUID(),
    RouteGuid: generateGUID(),
    StratumGuid: generateGUID(),
    StratumTypeGuid: generateGUID(),
    AgentGuid: generateGUID(),
    BrandGuid: generateGUID(),
    ManufacturerGuid: generateGUID(),
    CountryGuid: generateGUID(),
    ResponsiblePartyGuid: generateGUID(),
    DrugLabelGuid: generateGUID(),
    ATCName: "",
    DosageName: "",
    PresentationName: "",
    FormName: "",
    RouteName: "",
    StratumName: "",
    StratumTypeName: "",
    AgentName: "",
    BrandName: "",
    ManufacturerName: "",
    CountryName: "",
    ResponsiblePartyName: "",
    DrugLabelName: "",
    Code: "",
    RegistrationNumber: "",
    CIF_FOB: "",
    B_G: "",
    NM: false,
    GTIN: "",
    Notes: "",
    Description: "",
    ActiveInactiveIngredient: "",
    Indication: "",
    Posology: "",
    MethodOfAdministration: "",
    Contraindications: "",
    PrecautionForUse: "",
    EffectOnFGN: "",
    SideEffect: "",
    Toxicity: "",
    StorageCondition: "",
    ShelfLife: "",
    IngredientLabel: "",
    IsBiological: false,
    IsNarcotis: false,
    IsOTC: false,
    IsNSSF: false,
    PriceFOREIGN: "",
    currencyForeign: "",
    PriceUSD: "",
    PriceLBP: "",
    ImagesPath: "",
    ImageDefault: "",
    InteractionIngredientName: "",
  };
};

// Define the steps for the form
const steps = [
  "Step 1",
  // "Step 2",
  // "Step 3"
];

// Create a context provider
export const DrugProvider = ({ children }) => {
  const [formData, setFormData] = useState(generateInitialFormData());
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);
  const [priceUSD, setPriceUSD] = useState("");
  const [priceLBP, setPriceLBP] = useState("");

  const exchangeRates = {
    USD: 1,
    CAD: 0.72,
    EUR: 1.06,
    CHF: 1.11,
    DKK: 0.72,
    GBP: 1.21,
    SAR: 0.27,
    JOD: 1.41,
    LBP: 90000,
  };

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

  const convertToUSD = () => {
    if (formData.PriceFOREIGN && formData.currencyForeign) {
      const convertedPrice =
        formData.PriceFOREIGN / exchangeRates[formData.currencyForeign];
      console.log("Converted Price USD:", convertedPrice);
      return convertedPrice.toFixed(2);
    }
    return "";
  };

  const convertToLBP = () => {
    if (formData.PriceFOREIGN && formData.currencyForeign) {
      const priceInUSD = convertToUSD();
      const convertedPrice = priceInUSD * exchangeRates.LBP;
      console.log("Converted Price LBP:", convertedPrice);
      return convertedPrice.toFixed(2);
    }
    return "";
  };

  useEffect(() => {
    // Calculate and set priceUSD whenever formData changes
    const newPriceUSD = convertToUSD();
    setPriceUSD(newPriceUSD);
  }, [formData]);

  useEffect(() => {
    // Calculate and set priceLBP whenever formData changes
    const newPriceLBP = convertToLBP();
    setPriceLBP(newPriceLBP);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Calculate and update PriceUSD and PriceLBP in formData
      const PriceUSD = convertToUSD();
      const PriceLBP = convertToLBP();
      setFormData((prevFormData) => ({
        ...prevFormData,
        PriceUSD,
        PriceLBP,
      }));

      console.log("Converted Price USD:", PriceUSD);
      console.log("Converted Price LBP:", PriceLBP);
      console.log("Form Data after update:", formData);

      // Submit form data
      const response = await Axios.post("http://localhost:3000/drugs/add", {
        ...formData,
      });
      console.log(response.data); // Handle success response
      setFormData(generateInitialFormData()); // Reset form after successful submission
      setCurrentStep(0); // Reset to the first step after submission
    } catch (error) {
      setError(error.response.data.error || "An error occurred");
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Context values
  const contextValues = {
    formData,
    setFormData,
    handleInputChange,
    handleSubmit,
    handleNext,
    handlePrevious,
    error,
    currentStep,
    steps,
    // exchangeRates,
    // currencySymbols,
    priceUSD,
    priceLBP,
  };

  return (
    <DrugContext.Provider value={contextValues}>
      {children}
    </DrugContext.Provider>
  );
};

export const useDrugContext = () => useContext(DrugContext);

// export const DrugProvider = ({ children }) => {
//   const [formData, setFormData] = useState(generateInitialFormData());
//   const [currentStep, setCurrentStep] = useState(0);
//   const [error, setError] = useState(null);
//   const [priceUSD, setPriceUSD] = useState("");
//   const [priceLBP, setPriceLBP] = useState("");

//   const exchangeRates = {
//     USD: 1,
//     CAD: 0.72,
//     EUR: 1.06,
//     CHF: 1.11,
//     DKK: 0.72,
//     GBP: 1.21,
//     SAR: 0.27,
//     JOD: 1.41,
//     LBP: 90000,
//   };

//   const currencySymbols = {
//     USD: "$",
//     CAD: "C$",
//     EUR: "€",
//     CHF: "CHF",
//     DKK: "kr",
//     GBP: "£",
//     SAR: "SAR",
//     JOD: "JD",
//     LBP: "LBP",
//   };

//   // const convertToUSD = () => {
//   //   if (formData.PriceFOREIGN && formData.currencyForeign) {
//   //     const convertedPrice =
//   //       formData.PriceFOREIGN / exchangeRates[formData.currencyForeign];
//   //     console.log("Converted Price USD:", convertedPrice);
//   //     setPriceUSD(convertedPrice.toFixed(2)); // Update priceUSD state
//   //     return convertedPrice.toFixed(2);
//   //   }
//   //   return "";
//   // };

//   // const convertToLBP = () => {
//   //   if (formData.PriceFOREIGN && formData.currencyForeign) {
//   //     const priceInUSD = convertToUSD();
//   //     const convertedPrice =
//   //       (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
//   //     console.log("Converted Price LBP:", convertedPrice);
//   //     setPriceLBP(convertedPrice.toFixed(2)); // Update priceLBP state
//   //     return convertedPrice.toFixed(2);
//   //   }
//   //   return "";
//   // };
//   const convertToUSD = () => {
//     if (formData.PriceFOREIGN && formData.currencyForeign) {
//       const convertedPrice =
//         formData.PriceFOREIGN / exchangeRates[formData.currencyForeign];
//       console.log("Converted Price USD:", convertedPrice);
//       return convertedPrice.toFixed(2);
//     }
//     return "";
//   };

//   const convertToLBP = () => {
//     if (formData.PriceFOREIGN && formData.currencyForeign) {
//       const priceInUSD = convertToUSD();
//       const convertedPrice =
//         (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
//       console.log("Converted Price LBP:", convertedPrice);
//       return convertedPrice.toFixed(2);
//     }
//     return "";
//   };

//   useEffect(() => {
//     // Call convertToUSD and update priceUSD whenever formData changes
//     const newPriceUSD = convertToUSD();
//     setPriceUSD(newPriceUSD);
//   }, [formData]);

//   useEffect(() => {
//     // Call convertToLBP and update priceLBP whenever formData changes
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
//       // Calculate converted values
//       const PriceUSD = convertToUSD();
//       const PriceLBP = convertToLBP();

//       // Update form data with calculated values
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         PriceUSD,
//         PriceLBP,
//       }));

//       console.log("Converted Price USD:", PriceUSD);
//       console.log("Converted Price LBP:", PriceLBP);
//       console.log("Form Data after update:", formData);

//       // Submit form data
//       const response = await Axios.post("http://localhost:3000/drugs/add", {
//         ...formData,
//         // PriceUSD,
//         // PriceLBP,
//       });
//       // const response = await Axios.post(
//       //   "http://localhost:3000/drugs/add",
//       //   formData
//       // );
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

//   // Pass values through context
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
//     currencySymbols,
//     convertToUSD,
//     convertToLBP,
//     priceUSD,
//     priceLBP,
//   };

//   return (
//     <DrugContext.Provider value={contextValues}>
//       {children}
//     </DrugContext.Provider>
//   );
// };

// export const useDrugContext = () => useContext(DrugContext);
