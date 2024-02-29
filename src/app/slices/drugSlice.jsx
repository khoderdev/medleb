import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./apiSlice";

// Define the initial state
const initialState = {
  drugs: [],
  loading: false,
  error: null,
};

// Define thunks for asynchronous API calls
export const addDrug = createAsyncThunk("drugs/add", async (drugData) => {
  const response = await api.addDrug(drugData);
  return response.data;
});

export const addPharmacyDrug = createAsyncThunk(
  "drugs/addPharmacy",
  async (drugData) => {
    const response = await api.addPharmacyDrug(drugData);
    return response.data;
  }
);

// Define drug slice
export const drugSlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for addDrug and addPharmacyDrug thunks
    builder.addCase(addDrug.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addDrug.fulfilled, (state, action) => {
      state.loading = false;
      state.drugs.push(action.payload);
    });
    builder.addCase(addDrug.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(addPharmacyDrug.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addPharmacyDrug.fulfilled, (state, action) => {
      state.loading = false;
      state.drugs.push(action.payload);
    });
    builder.addCase(addPharmacyDrug.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Export addDrug and addPharmacyDrug actions
export { addDrug, addPharmacyDrug };

export default drugSlice.reducer;
