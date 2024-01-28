import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, role: null, isLoggedIn: false },
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken, role } = action.payload;
      state.token = accessToken;
      state.role = role;
      state.isLoggedIn = true; // Set isLoggedIn to true on login
    },
    logOut: (state, action) => {
      state.token = null;
      state.role = null;
      state.isLoggedIn = false;
      window.localStorage.removeItem("token");
    },
  },
});

export const { setAccessToken, logOut } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
export const selectUserRole = (state) => state.auth.role;
