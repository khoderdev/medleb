import React, { useState, createContext, useContext } from "react";
import Axios from "../../../../../api/axios";
import { v4 as uuidv4 } from "uuid";
import "../DrugForm.css";

// Create the context
const DrugFormContext = createContext();

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
    PriceUSD: "",
    PriceLBP: "",
    ImagesPath: "",
    ImageDefault: "",
    InteractionIngredientName: "",
  };
};

// Define the steps for the form
const steps = ["Step 1", "Step 2", "Step 3"];

// Create a context provider
export const DrugFormProvider = ({ children }) => {
  const [formData, setFormData] = useState(generateInitialFormData());
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   const fieldValue = type === "checkbox" ? checked : value;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: fieldValue,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await Axios.post(
  //       "http://localhost:3000/drugs/add",
  //       formData
  //     );
  //     console.log(response.data); // Handle success response
  //     setFormData(generateInitialFormData()); // Reset form after successful submission
  //   } catch (error) {
  //     setError(error.response.data.error || "An error occurred");
  //   }
  // };

  // // Pass values through context
  // const contextValues = {
  //   formData,
  //   handleChange,
  //   handleSubmit,
  //   error,
  // };

  const handleChange = (e) => {
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
      const response = await Axios.post(
        "http://localhost:3000/drugs/add",
        formData
      );
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

  // Pass values through context
  const contextValues = {
    formData,
    handleChange,
    handleSubmit,
    handleNext,
    handlePrevious,
    error,
    currentStep,
    steps,
  };

  return (
    <DrugFormContext.Provider value={contextValues}>
      {children}
    </DrugFormContext.Provider>
  );
};

// Custom hook to consume the context
export const useDrugFormContext = () => useContext(DrugFormContext);
