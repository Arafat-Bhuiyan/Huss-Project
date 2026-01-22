import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
