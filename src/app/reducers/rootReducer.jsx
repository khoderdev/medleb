// rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import drugRegistrationFormReducer from "./drugRegistrationFormReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  durgReg: drugRegistrationFormReducer,
});

export default rootReducer;
