// geoSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const geoSlice = createSlice({
  name: "geo",
  initialState: {
    code: "",
    englishName: "",
    arabicName: "",
    governorates: [],
    districts: [],
    cities: [],
    modalIsOpen: false,
    modalType: "",
  },
  reducers: {
    updateCode: (state, action) => {
      state.code = action.payload;
    },
    updateEnglishName: (state, action) => {
      state.englishName = action.payload;
    },
    updateArabicName: (state, action) => {
      state.arabicName = action.payload;
    },
    addGovernorate: (state, action) => {
      state.governorates.push(action.payload);
    },
    addDistrict: (state, action) => {
      const { index, district } = action.payload;
      state.governorates[index].districts.push(district);
    },
    addCity: (state, action) => {
      const { govIndex, distIndex, city } = action.payload;
      state.governorates[govIndex].districts[distIndex].cities.push(city);
    },
    openModal: (state, action) => {
      state.modalIsOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
});

export const {
  updateCode,
  updateEnglishName,
  updateArabicName,
  addGovernorate,
  addDistrict,
  addCity,
  openModal,
  closeModal,
} = geoSlice.actions;

export default geoSlice.reducer;
