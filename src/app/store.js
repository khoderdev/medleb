// // import { configureStore } from "@reduxjs/toolkit";

// // export const store = configureStore({
// //   reducer: {},
// // });
// // Assuming you have a rootReducer combining all reducers
// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./auth/authSlice";
import { drugImportationsApiSlice } from "./slices/drugImportationsApiSlice";
import formReducer from "./reducers/formReducer";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [drugImportationsApiSlice.reducerPath]: drugImportationsApiSlice.reducer,
    auth: authReducer,
    form: formReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
