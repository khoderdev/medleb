// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./slices/apiSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import formSlice from "../App/slices/BrandsFormSlice";
// import geoReducer from "./slices/geoSlice.jsx";
// import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
// import drugTable from "./slices/drugTable";
// import drugRegistrationFormReducer from "./reducers/drugRegistrationFormReducer";
// import companiesFormReducer from "../App/slices/CompaniesFormSlice"; // Import CompaniesFormSlice
// import DevTools from './DevTools';

// const enhancer = compose(
//   // Middleware you want to use in development:
//   applyMiddleware(d1, d2, d3),
//   // Required! Enable Redux DevTools with the monitors you chose
//   DevTools.instrument(),
// );

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
//     drugReg: drugRegistrationFormReducer,
//     drugTable: drugTable,
//     brandsForm: formSlice.reducer,
//     geo: geoReducer,
//     companiesForm: companiesFormReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

// setupListeners(store.dispatch);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import formSlice from "../App/slices/BrandsFormSlice";
import geoReducer from "./slices/geoSlice.jsx";
import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
import drugTable from "./slices/drugTable";
import drugRegistrationFormReducer from "./reducers/drugRegistrationFormReducer";
import companiesFormReducer from "../App/slices/CompaniesFormSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
    drugReg: drugRegistrationFormReducer,
    drugTable,
    brandsForm: formSlice.reducer,
    geo: geoReducer,
    companiesForm: companiesFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

setupListeners(store.dispatch);

export default store;
