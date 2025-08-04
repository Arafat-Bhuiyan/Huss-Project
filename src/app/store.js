import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../redux/api/ApiSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware,
  devTools: true,
});
