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
} = authApi;
