import {
  SET_FORM_DATA,
  RESET_FORM_DATA,
  SET_CURRENT_STEP,
} from "../actions/DrugRegActionTypes";

const initialState = {
  currentStep: 0,
  formData: {
    step1: {
      drugImages: "",
      drugName: "",
      type: "",
      responsibleParty: "",
      responsiblePartyCountry: "",
      manufacturer: "",
      manufacturingCountry: "",
      cargoShippingTerms: "",
      priceForeign: "",
      currencyForeign: "USD",
      convertToUSD: "",
      convertToLBP: "",
      registrationNumber: "",
      registrationDate: "",
      reviewDate: "",
      mohCode: "",
    },
    step2: {
      ingredientsAndstrength: "",
      form: "",
      primaryContainerPackage: "",
      manufacturer: "",
      manufacturingCountry: "",
      agent: "",
      atcCode: "",
      atcRelatedIngredients: "Paracetamol",
    },
    step3: {
      atcRelatedIngredients: "Paracetamol",
      registrationNumber: "",
      registrationDate: "",
      reviewDate: "",
      mohCode: "",
      type: "",
    },
    step4: {
      priceForeign: "",
      currencyForeign: "USD",
      convertToUSD: "",
      convertToLBP: "",
      stratum: "E1",
      cargoShipping: "8%",
      douanes: "",
      subsidizationLabel: "",
      agentProfitMargin: "8",
      pharmacistProfitMargin: "8.5",
      hospitalPriceLBP: "900,000",
    },
    step5: {
      responsibleParty: "",
      responsiblePartyCountry: "",
      responsiblePartyID: "123321",
      manufacturer: "",
      manufacturerID: "321123",
      manufacturingCountry: "",
      agent: "",
    },
    // ... other steps
  },
};

const drugRegistrationFormReducer = (state = initialState, action) => {
  // console.log("Action dispatched:", action.type, action.payload);
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.step]: action.payload.formData,
        },
      };
    case RESET_FORM_DATA:
      return initialState;
    default:
      return state;
  }
};

export default drugRegistrationFormReducer;
