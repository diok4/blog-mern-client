import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sendpost-server.onrender.com/api/auth/",
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    login: build.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    isAuth: build.query<any, void>({
      query: () => ({
        url: "isauth",
      }),
      providesTags: ["User"],
    }),
    me: build.query<any, void>({
      query: () => ({
        url: "me",
      }),
      providesTags: ["User"],
    }),
    getUserById: build.query({
      query: (id) => `me?id=${id}`,
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useIsAuthQuery,
  useMeQuery,
  useGetUserByIdQuery,
} = authApi;
