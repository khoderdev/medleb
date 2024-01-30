import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
// import authReducer from "./auth/authSlice";
import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
import drugTable from "./slices/drugTable";
import drugRegistrationFormReducer from "./reducers/drugRegistrationFormReducer";
import { createLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
    // auth: authReducer,
    drugReg: drugRegistrationFormReducer,
    drugTable: drugTable,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
