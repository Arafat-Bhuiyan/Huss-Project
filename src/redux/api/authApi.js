import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // === LOGIN ===
    login: builder.mutation({
      query: (data) => ({
        url: "/accounts/login/",
        method: "POST",
        body: data,
      }),
    }),
    // === SIGNUP ===
    signup: builder.mutation({
      query: (data) => ({
        url: "/accounts/signup/",
        method: "POST",
        body: data,
      }),
    }),
    // === Send OTP ===
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "/accounts/send-otp/",
        method: "POST",
        body: data,
      }),
    }),
    // === Verify OTP ===
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/accounts/verify-otp/",
        method: "POST",
        body: data,
      }),
    }),
    // === Reset Password ===
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/accounts/reset-password/",
        method: "POST",
        body: data,
      }),
    }),
    // Get Profile
    getProfile: builder.query({
      query: () => ({
        url: "/accounts/profile/",
        method: "GET",
      }),
    }),
    // Update Profile
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/accounts/update-profile/",
        method: "PATCH",
        body: data,
      }),
    }),
    // === Terms & Conditions ===
    termsAndConditions: builder.query({
      query: () => ({
        url: "/cores/terms-conditions/",
        method: "GET",
      }),
    }),
    // === Privacy Policy ===
    privacyPolicy: builder.query({
      query: () => ({
        url: "/cores/privacy-policy/",
        method: "GET",
      }),
    }),
    // === Help & Support ===
    helpSupport: builder.mutation({
      query: (data) => ({
        url: "/cores/help-support/",
        method: "POST",
        body: data,
      }),
    }),
    // === Category List ===
    getCategoryList: builder.query({
      query: () => ({
        url: "/categories/list/",
        method: "GET",
      }),
    }),
    // === Product List ===
    getProductList: builder.query({
      query: () => ({
        url: "/products/list/",
        method: "GET",
      }),
    }),
    // === Add to cart ===
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/carts/add-to-cart/",
        method: "POST",
        body: data,
      }),
    }),
    // === Get cart ===
    getCart: builder.query({
      query: () => ({
        url: "/carts/get-cart-details/",
        method: "GET",
      }),
    }),
    // === Place order ===
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/carts/place-order/",
        method: "POST",
        body: data,
      }),
    }),
    // === Success order ===
    successOrder: builder.query({
      query: (order_uuid) => ({
        url: `/carts/order-summary/${order_uuid}/`,
        method: "GET",
      }),
    }),
    // === Order tracking ===
    orderTracking: builder.query({
      query: (order_uuid) => ({
        url: `/track-order-by-uuid/${order_uuid}/`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useTermsAndConditionsQuery,
  usePrivacyPolicyQuery,
  useHelpSupportMutation,
  useGetCategoryListQuery,
  useGetProductListQuery,
  useAddToCartMutation,
  useGetCartQuery,
  usePlaceOrderMutation,
  useSuccessOrderQuery,
  useOrderTrackingQuery,
} = authApi;
