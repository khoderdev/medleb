import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const CLEAR_ACCESS_TOKEN = "CLEAR_ACCESS_TOKEN";

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS,
});

export const setAccessToken = (accessToken) => ({
  type: SET_ACCESS_TOKEN,
  payload: accessToken,
});

export const clearAccessToken = () => ({
  type: CLEAR_ACCESS_TOKEN,
});

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
      email,
      password,
    });
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.error("Error:", error);
  }
};

export const logout = () => async (dispatch) => {
  dispatch(logoutSuccess());
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8000/api/v1/auth/forgotPassword", {
      email,
    });
    dispatch(forgotPasswordSuccess());
  } catch (error) {
    console.error("Error:", error);
  }
};

export const resetPassword =
  (email, newPassword, resetCode) => async (dispatch) => {
    try {
      await axios.put("http://localhost:8000/api/v1/auth/resetPassword", {
        email,
        newPassword,
        resetCode,
      });
      dispatch(resetPasswordSuccess());
    } catch (error) {
      console.error("Error:", error);
    }
  };

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/auth/signup",
      userData
    );
    // Dispatch action for successful registration
    dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
  } catch (error) {
    // Dispatch action for registration failure
    dispatch({
      type: "REGISTER_FAILURE",
      payload: error.response.data.message,
    });
  }
};
