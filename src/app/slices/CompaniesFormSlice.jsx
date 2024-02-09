import { createSlice } from "@reduxjs/toolkit";
// import Axios from "../../../../../api/axios";

const initialState = {
  companyData: {
    staticCompanyTypeGuid: "",
    name: "",
    nameAr: "",
    phoneNumber: "",
    mobileNumber: "",
    telegramNumber: "",
    whatsAppNumber: "",
    email: "",
    website: "",
    companyaddress: {
      guid: "",
      countryGuid: "",
      governorateGuid: "",
      districtGuid: "",
      cityGuid: "",
      address: "",
      gpS_X: "",
      gpS_Y: "",
      gpS_Z: "",
    },
  },
  companyTypes: [],
  countryList: [],
  governorateList: [],
  districtList: [],
  cityList: [],
  error: null,
};

const CompaniesFormSlice = createSlice({
  name: "companiesForm",
  initialState,
  reducers: {
    setCompanyData(state, action) {
      state.companyData = action.payload;
    },
    setCompanyTypes(state, action) {
      state.companyTypes = action.payload;
    },
    setCountryList(state, action) {
      state.countryList = action.payload;
    },
    setGovernorateList(state, action) {
      state.governorateList = action.payload;
    },
    setDistrictList(state, action) {
      state.districtList = action.payload;
    },
    setCityList(state, action) {
      state.cityList = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    resetForm(state) {
      state.companyData = initialState.companyData;
      state.error = initialState.error;
    },
  },
});

export const {
  setCompanyData,
  setCompanyTypes,
  setCountryList,
  setGovernorateList,
  setDistrictList,
  setCityList,
  setError,
  resetForm,
} = CompaniesFormSlice.actions;

export default CompaniesFormSlice.reducer;
