import { createSlice } from "@reduxjs/toolkit";

const drugTable = createSlice({
  name: "drugs",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {
    setDrugs: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setDrugs, setLoading } = drugTable.actions;
export default drugTable.reducer;
