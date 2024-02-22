// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
// Import other reducers if any

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;
