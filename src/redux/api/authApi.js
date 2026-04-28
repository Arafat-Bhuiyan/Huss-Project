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
      invalidatesTags: ['Profile'], // Invalidate profile to refresh user data after login
    }),
    // === SIGNUP ===
    signup: builder.mutation({
      query: (data) => ({
        url: "/accounts/signup/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['Profile'], // Invalidate profile to refresh user data after signup
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
      providesTags: ['Profile'],
    }),
    // Update Profile
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/accounts/update-profile/",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ['Profile'],
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
      query: (categoryName) => ({
        url: categoryName
          ? `/products/list/?category_name=${categoryName}`
          : "/products/list/",
        method: "GET",
      }),
    }),
    // === Product Details ===
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/products/${id}/detail/`,
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
      invalidatesTags: ["Cart"],
    }),
    // === Get cart ===
    getCart: builder.query({
      query: () => ({
        url: "/carts/get-cart-details/",
        method: "GET",
      }),
      providesTags: ["Cart"],
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
    // === Update Shipping ===
    updateShippingAddress: builder.mutation({
      query: (data) => ({
        url: `/update-address/`,
        method: "POST",
        body: data,
      }),
    }),
    // === Get Shipping Address ===
    getShippingAddress: builder.query({
      query: () => ({
        url: `/get-shipping-address/`,
        method: "GET",
      }),
    }),
    // === Update Cart ===
    updateCart: builder.mutation({
      query: ({ id, data }) => ({
        url: `/carts/update-cart/${id}/item/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    // === Get My Orders ===
    getMyOrders: builder.query({
      query: () => ({
        url: "/get-user-orders/",
        method: "GET",
      }),
      providesTags: ["MyOrders"],
    }),
    // === Return ===
    returnExchange: builder.mutation({
      query: (data) => ({
        url: "/submit-return-request/",
        method: "POST",
        body: data,
      }),
    }),
    // === Wishlist Add/Remove ===
    toggleWishlist: builder.mutation({
      query: (id) => ({
        url: `/products/${id}/wishlist/toggle/`,
        method: "POST",
      }),
      invalidatesTags: ["Wishlist"],
    }),
    // === Get Wishlist ===
    getWishlist: builder.query({
      query: () => ({
        url: "/wishlist/",
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),

    // get notification
    getNotification: builder.query({
      query: () => ({
        url: "/accounts/notifications/",
        method: "GET",
      }),
      providesTags: ["Notification"],
    }),

    // accept or decline notification
    acceptOrDeclineNotification: builder.mutation({
      query: ({offer_id, ...data}) => ({
        url: `/offers/${offer_id}/respond/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notification"],
    }),

    // === Add Review ===
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}/review/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Review"],
    }),
    // === Get Profile ===
    getProfile: builder.query({
      query: () => ({
        url: "/accounts/profile/",
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
    // === Update Profile ===
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/accounts/update-profile/",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
    // === Google Login ===
    googleLogin: builder.mutation({
      query: (data) => ({
        url: "/accounts/google-login/",
        method: "POST",
        body: data,
      }),
    }),
    // === Google Register ===
    googleRegister: builder.mutation({
      query: (data) => ({
        url: "/accounts/google-signup/",
        method: "POST",
        body: data,
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
  useGetProductDetailsQuery,
  useAddToCartMutation,
  useGetCartQuery,
  usePlaceOrderMutation,
  useSuccessOrderQuery,
  useOrderTrackingQuery,
  useUpdateShippingAddressMutation,
  useGetShippingAddressQuery,
  useUpdateCartMutation,
  useReturnExchangeMutation,
  useToggleWishlistMutation,
  useGetWishlistQuery,
  useAddReviewMutation,
  useGetMyOrdersQuery,
  useGoogleLoginMutation,
  useGoogleRegisterMutation,
  useGetNotificationQuery,
  useAcceptOrDeclineNotificationMutation,
} = authApi;
