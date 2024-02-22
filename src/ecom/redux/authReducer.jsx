// authReducer.js
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SET_ACCESS_TOKEN,
  CLEAR_ACCESS_TOKEN,
} from "./authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  accessToken: null, // New state for storing access token
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.data,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    case FORGOT_PASSWORD_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
      // Handle forgot password and reset password success if needed
      return state;
    case REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case SET_ACCESS_TOKEN: // New case for setting access token
      return {
        ...state,
        accessToken: action.payload,
      };
    case CLEAR_ACCESS_TOKEN: // New case for clearing access token
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
