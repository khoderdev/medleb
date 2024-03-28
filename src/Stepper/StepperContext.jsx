import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect, useContext, createContext } from "react";

// Create a new context for the stepper
const StepperContext = createContext();

// Custom hook to use the stepper context
export const useStepperContext = () => useContext(StepperContext);

// Function to generate GUID
const generateGUID = () => uuidv4();

// Function to generate initial form data
const generateInitialFormData = () => ({
    Guid: generateGUID(),
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
    ResponsibleParty: "",
    DrugLabelName: "",
    Code: "",
    RegistrationNumber: "",
    CIF_FOB: "",
    B_G: "",
    Seq: "seq1",
    NM: true,
    REP_date: "2024-02-01",
    SubsidyPercentage: "10",
    LJ_FOB_ValueUSD: "1",
    LASTPublicABP: "1",
    LASTEffective_Date: "2024-02-01",
    WEBCIF_FOB: "FOB",
    WEBPublicABP: "1",
    WEBCurrency: "dollar",
    Date_dc: "2024-02-01",
    GTIN: "1234567891111",
    Notes: "Note for test",
    Description: "",
    ActiveInactiveIngredient: "",
    Indication: "",
    Posology: "",
    WJ_Leb_PubPriceHos: "1",
    HospPricing: true,
    MethodOfAdministration: "",
    Contraindications: "",
    PrecautionForUse: "",
    EffectOnFGN: "",
    SideEffect: "sideffe",
    Toxicity: "",
    StorageCondition: "",
    ShelfLife: "",
    IngredientLabel: "",
    IsDouanes: true,
    IsBiological: true,
    IsNarcotis: true,
    IsOTC: true,
    IsNSSF: true,
    PriceFOREIGN: "",
    currencyForeign: "",
    PriceUSD: "",
    PriceLBP: "",
    ImagesPath: "",
    ImageDefault: "",
    InteractionIngredientName: "",
    UpdatedDate: "2024-02-01",
  });

// Stepper provider component
export const StepperProvider = ({ children }) => {
  const [formData, setFormData] = useState(generateInitialFormData());
  const [currentStep, setCurrentStep] = useState(0);
  const [priceUSD, setPriceUSD] = useState("");
  const [priceLBP, setPriceLBP] = useState("");
  const forms = ["DrugRegistryForm", "DrugRegistryFormAddons"];

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

  const exchangeRates = {
    USD: 1,
    CAD: 0.72,
    EUR: 1.08,
    CHF: 1.11,
    DKK: 0.72,
    GBP: 1.21,
    SAR: 0.27,
    JOD: 1.41,
    LBP: 90000,
  };

  const convertToUSD = () => {
    if (formData.PriceFOREIGN && formData.currencyForeign) {
      const priceForeign = parseFloat(formData.PriceFOREIGN);
      const exchangeRate = parseFloat(exchangeRates[formData.currencyForeign]);
      if (!isNaN(priceForeign) && !isNaN(exchangeRate) && exchangeRate !== 0) {
        const convertedPrice = priceForeign / exchangeRate;
        // console.log("Converted Price USD:", convertedPrice);
        return convertedPrice.toFixed(2);
      }
    }
    return "";
  };

  const convertToLBP = () => {
    if (formData.PriceFOREIGN && formData.currencyForeign) {
      const priceInUSD = convertToUSD();
      const convertedPrice = priceInUSD * exchangeRates.LBP;
      // console.log("Converted Price LBP:", convertedPrice);
      return convertedPrice.toFixed(0);
    }
    return "";
  };

  useEffect(() => {
    const newPriceUSD = convertToUSD();
    const newPriceLBP = convertToLBP();

    // Check if formData needs to be updated
    if (
      formData.PriceUSD !== newPriceUSD ||
      formData.PriceLBP !== newPriceLBP
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        PriceUSD: newPriceUSD,
        PriceLBP: newPriceLBP,
      }));
    }

    // Update priceUSD and priceLBP
    setPriceUSD(newPriceUSD);
    setPriceLBP(newPriceLBP);
  }, [formData]);

  // useEffect(() => {
  //   const newPriceUSD = convertToUSD();
  //   setPriceUSD(newPriceUSD);
  //   // Include PriceUSD in the formData state
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     PriceUSD: newPriceUSD,
  //   }));
  // }, [formData]);

  // useEffect(() => {
  //   const newPriceLBP = convertToLBP();
  //   setPriceLBP(newPriceLBP);
  //   // Include PriceLBP in the formData state
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     PriceLBP: newPriceLBP,
  //   }));
  // }, [formData]);

  // Function to go to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle next step or submit
  const handleNextOrSubmit = () => {
    const isLastStep = currentStep === forms.length - 1;
    if (isLastStep) {
      // Trigger submit request here
      console.log("Submitting form data");
      fetch("http://localhost:3000/drugs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully");
            // Optionally reset form data or navigate to a different page
          } else {
            console.error("Failed to submit form data");
          }
        })
        .catch((error) => {
          console.error("Error submitting form data:", error);
        });
    } else {
      nextStep();
    }
  };

  const stepperContextValue = {
    formData,
    setFormData,
    handleInputChange,
    currentStep,
    nextStep,
    prevStep,
    currencySymbols,
    exchangeRates,
    priceUSD,
    priceLBP,
    handleNextOrSubmit,
  };

  return (
    <StepperContext.Provider value={stepperContextValue}>
      {children}
    </StepperContext.Provider>
  );
};
