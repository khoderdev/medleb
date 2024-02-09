import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// Initial state for the form slice
const initialState = {
  formData: {
    guid: uuidv4(),
    // countryGuid: "",
    // countryName: "",
    // countryNameAr: "",
    name: "",
    nameAr: "",
    enabled: true,
    createdDate: new Date().toISOString(),
  },
  countries: [],
};

// Create a slice for the form
const formSlice = createSlice({
  name: "brandsForm",
  initialState,
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    updateCountries(state, action) {
      state.countries = action.payload;
    },
    resetFormData(state) {
      state.formData = { ...initialState.formData };
    },
  },
});

// Export actions
export default formSlice;
export const { updateFormData, updateCountries, resetFormData } =
  formSlice.actions;
