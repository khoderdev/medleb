// import { configureStore } from "@reduxjs/toolkit";
// import  apiSlice  from "./slices/apiSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import formSlice from "../app/slices/BrandsFormSlice";
// import geoReducer from "./slices/geoSlice.jsx";
// import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
// import drugTable from "./slices/drugTable";
// import AddDrugAndImportReducer from "./reducers/AddDrugAndImportReducer";
// // import drugRegistrationFormReducer from "./reducers/drugRegistrationFormReducer";
// import companiesFormReducer from "../app/slices/CompaniesFormSlice";

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
//     AddDrugImport: AddDrugAndImportReducer,
//     // drugReg: drugRegistrationFormReducer,
//     // drugTable,
//     brandsForm: formSlice.reducer,
//     geo: geoReducer,
//     companiesForm: companiesFormReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
// });

// setupListeners(store.dispatch);

// export default store;



import { configureStore } from "@reduxjs/toolkit";
import  api  from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import formSlice from "../app/slices/BrandsFormSlice";
import geoReducer from "./slices/geoSlice.jsx";
import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
import drugTable from "./slices/drugTable";
import AddDrugAndImportReducer from "./reducers/AddDrugAndImportReducer";
// import drugRegistrationFormReducer from "./reducers/drugRegistrationFormReducer";
import companiesFormReducer from "../app/slices/CompaniesFormSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
    AddDrugImport: AddDrugAndImportReducer,
    // drugReg: drugRegistrationFormReducer,
    // drugTable,
    brandsForm: formSlice.reducer,
    geo: geoReducer,
    companiesForm: companiesFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

setupListeners(store.dispatch);

export default store;
