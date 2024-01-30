import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api/axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Axios.post(
        "/api/users/v1.0/authenticate",
        userData
      );
      return response.data.userDetails.token;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "An error occurred during login." }
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    loading: false,
    isLoggedIn: false,
    accessToken: localStorage.getItem("accessToken") || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload;
        localStorage.setItem("accessToken", action.payload);
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload.message || "An error occurred during login.";
      });
  },
});

export default userSlice.reducer;
