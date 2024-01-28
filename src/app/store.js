import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./auth/authSlice";
import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
import drugTable from "./slices/drugTable";
import drugRegistrationFormReducer from "./reducers/drugRegistrationFormReducer";
import { createLogger } from "redux-logger";

// const logger = createLogger();

// const loggerMiddleware = createLogger({
//   // Define your custom action transformer if needed
//   actionTransformer: (action) => {
//     return {
//       type: action.type,
//       payload: action.payload,
//       // ... other properties if applicable
//     };
//   },
// });

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
    auth: authReducer,
    drugReg: drugRegistrationFormReducer,
    drugTable: drugTable,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      // loggerMiddleware,
      // process.env.NODE_ENV === "development" ? [logger] : []
    ),
});

// const store = configureStore({
//   reducer: {
//     enhancers: [composeWithDevTools()],
//     // middleware: getDefaultMiddleware => getDefaultMiddleware(),
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
//     auth: authReducer,
//     form: drugRegistrationFormReducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

setupListeners(store.dispatch);

export default store;
// ///////////////////////////////////////////////////////////////////////

// import { apiSlice } from "./slices/apiSlice";
// import authReducer from "./auth/authSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = configureStore({
//   reducer: { ...rootReducer, auth: authReducer }, // Include auth reducer
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(/* add your middleware here */),
//   devTools: process.env.NODE_ENV !== "production",

// });

// setupListeners(store.dispatch);

// export default store;
