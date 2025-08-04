import { apiSlice } from "../../redux/api/ApiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       localStorage.setItem("auth", JSON.stringify(data));
    //       dispatch(userLoggedIn({ user: data.user, token: data.token }));
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   },
    }),

    getUser: builder.query({
      query: () => "/user",
      providesTags: ["Auth"],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),

    deleteAccount: builder.mutation({
      query: () => ({
        url: "/user",
        method: "DELETE",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserQuery,
  useUpdateProfileMutation,
  useDeleteAccountMutation,
} = authApi;
