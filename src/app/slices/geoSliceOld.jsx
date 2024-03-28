// import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   formData: {
//     // Country fields
//     guid: uuidv4(),
//     code: "",
//     name: "",
//     nameAr: "",
//     enabled: true,
//     isNearByCountry: true,
//     isReferenceCountry: true,
//     isComparative: true,
//     // Governorates fields
//     govGuid: "",
//     staticCountryGuid: "",
//     govCode: "",
//     govName: "",
//     govNameAr: "",
//     govEnabled: true,
//     // Districts fields
//     distGuid: "",
//     governorateGuid: "",
//     distCode: "",
//     distName: "",
//     distNameAr: "",
//     distEnabled: true,
//     // Cities fields
//     cityGuid: "",
//     districtGuid: "",
//     cityCode: "",
//     cityName: "",
//     cityNameAr: "",
//     cityEnabled: true,
//   },
//   countryList: [],
//   error: "",
// };

// const geoSlice = createSlice({
//   name: "geo",
//   initialState,
//   reducers: {
//     setFormData(state, action) {
//       state.formData = action.payload;
//     },
//     setCountryList(state, action) {
//       state.countryList = action.payload;
//     },
//     setError(state, action) {
//       state.error = action.payload;
//     },
//     resetFormData(state) {
//       state.formData = { ...initialState.formData };
//     },
//   },
// });

// export const { setFormData, setCountryList, setError, resetFormData } =
//   geoSlice.actions;

// export default geoSlice.reducer;

import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    // Country fields
    guid: uuidv4(),
    code: "",
    name: "",
    nameAr: "",
    enabled: true,
    isNearByCountry: true,
    isReferenceCountry: true,
    isComparative: true,
    // Governorate fields
    governorates: [], // Array to store governorate objects
    // District fields
    districts: [], // Array to store district objects
    // City fields
    cities: [], // Array to store city objects
  },
  countries: [], // Array to store country objects
  error: "",
};

const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    addCountry(state, action) {
      state.countries.push(action.payload);
    },
    addGovernorate(state, action) {
      const { countryId, governorate } = action.payload;
      const country = state.countries.find((c) => c.guid === countryId);
      if (country) {
        country.governorates.push(governorate);
      }
    },
    addDistrict(state, action) {
      const { countryId, district } = action.payload;
      const country = state.countries.find((c) => c.guid === countryId);
      if (country) {
        country.districts.push(district);
      }
    },
    addCity(state, action) {
      const { countryId, city } = action.payload;
      const country = state.countries.find((c) => c.guid === countryId);
      if (country) {
        country.cities.push(city);
      }
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addCountry, addGovernorate, addDistrict, addCity, setError } =
  geoSlice.actions;

export default geoSlice.reducer;
