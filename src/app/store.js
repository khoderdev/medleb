import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import formSlice from "../App/slices/BrandsFormSlice";
import geoReducer from "../App/slices/geoSlice.jsx";
import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
import drugTable from "./slices/drugTable";
import drugRegistrationFormReducer from "./reducers/drugRegistrationFormReducer";
import companiesFormReducer from "../App/slices/CompaniesFormSlice"; // Import CompaniesFormSlice

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
    drugReg: drugRegistrationFormReducer,
    drugTable: drugTable,
    brandsForm: formSlice.reducer,
    geo: geoReducer,
    companiesForm: companiesFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
