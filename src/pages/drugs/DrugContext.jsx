import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

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

// Create a context provider
export const DrugProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    formDataStep1: { ...generateInitialFormData() },
    formDataStep2: { ...generateInitialFormData() },
    formDataStep11: { ...generateInitialFormData() },
    formDataStep12: { ...generateInitialFormData() },
    formDataStep3: { ...generateInitialFormData() },
    formDataStep4: { ...generateInitialFormData() },
    formDataStep5: { ...generateInitialFormData() },
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);
  const [priceUSD, setPriceUSD] = useState(0);
  const [priceLBP, setPriceLBP] = useState(0);
  const [selectedDrugGuid, setSelectedDrugGuid] = useState(null);
  const [drugImagesList, setImagesList] = useState(
    Array.from({ length: 6 }, () => [])
  );
  const [drugDocumentsList, setDrugDocumentsList] = useState(
    Array.from({ length: 15 }, () => [])
  );
  const navigate = useNavigate();
  const isLastStep = currentStep === 6;
  const { drugId } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  // const [selectedInput, setSelectedInput] = useState("");
  // const [isAddModalOpen, setAddModalOpen] = useState(false);
  // const [isEditModalOpen, setEditModalOpen] = useState(false);
  // const [editInputValue, setEditInputValue] = useState("");

  const steps = [
    "Drug Registry",
    "Drug Registry Addons",
    "Drug Images",
    "Pricing Approval",
    "Marketing Approval",
    "Substance Information",
    "Unified Drug Information",
  ];

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
      const convertedPrice = priceInUSD * exchangeRates.LBP;
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

      // Submit form data
      const response = await axios.post(
        "http://localhost:3000/drugs/add",
        formData
      );
      console.log(response.data); // Handle success response
      setFormData(generateInitialFormData()); // Reset form after successful submission
      setCurrentStep(0); // Reset to the first step after submission
    } catch (error) {
      console.error("Error:", error); // Log any errors
      setError(error.response?.data?.error || "An error occurred"); // Handle error response
    }
  };

  useEffect(() => {
    if (drugId) {
      // Fetch the existing drug data using the drugId
      axios
        .get(`http://1.1.1.250:3500/drugs/${drugId}`)
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
        await axios.put(`http://1.1.1.250:3500/drugs/${drugId}`, finalFormData);
      } else {
        // If not in edit mode, create a new drug
        console.log("Creating a new drug");
        await axios.post("http://1.1.1.250:3500/drugs", finalFormData);
      }
      // You might want to add a success message or further handling here
      navigate("/search"); // Navigate to the list page after successful update/creation
    } catch (error) {
      console.error("Error updating/creating drug:", error);
      // Handle the error, such as showing an error message to the user
    }
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
    navigate("/search");
    FetchData(finalFormData);
  };

  const handleNext = () => {
    if (currentStep === 2) {
    }

    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleArrowButtonClick = () => {
    if (isLastStep) {
      logFormData();
    } else {
      handleNext();
    }
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

  // Context values
  const contextValues = {
    formData,
    drugDocumentsList,
    setFormData,
    handleImageUpload,
    handleDocumentUpload,
    handleInputChange,
    handleSubmit,
    FetchData,
    handleNext,
    handlePrevious,
    error,
    currentStep,
    steps,
    exchangeRates,
    priceUSD,
    priceLBP,
    selectedDrugGuid,
    handleArrowButtonClick,
    exchangeRates,
    currencySymbols,
    convertToUSD,
    convertToLBP,
  };

  return (
    <DrugContext.Provider value={contextValues}>
      {children}
    </DrugContext.Provider>
  );
};

export const useDrugContext = () => useContext(DrugContext);
