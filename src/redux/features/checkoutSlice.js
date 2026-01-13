import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingInfo: null,
  orderId: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
    clearShippingInfo: (state) => {
      state.shippingInfo = null;
      state.orderId = null;
    },
  },
});

export const { setShippingInfo, setOrderId, clearShippingInfo } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
