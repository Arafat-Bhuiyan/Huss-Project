import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingInfo: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    clearShippingInfo: (state) => {
      state.shippingInfo = null;
    },
  },
});

export const { setShippingInfo, clearShippingInfo } = checkoutSlice.actions;
export default checkoutSlice.reducer;
