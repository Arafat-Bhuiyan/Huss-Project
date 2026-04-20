import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.1ezybuy.com/",
  prepareHeaders: (headers, { getState }) => {
    // Try to get token from Redux state
    const token = getState().auth?.access || localStorage.getItem("access");
    // If token not in state, retrieve from local storage
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["Cart", "Wishlist", "Profile", "Auth", "MyOrders", "Review"],
  endpoints: () => ({}),
});
