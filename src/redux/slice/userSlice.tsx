import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  MutationDefinition,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  LOGIN_API_PATH,
  REACT_APP_API_URL,
  REGISTER_API_PATH,
} from "../../constants/UserConstants";

export const login = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => LOGIN_API_PATH,
      providesTags: ["Post"],
    }),
    registerUser: builder.query({
      query: () => REGISTER_API_PATH,
      providesTags: ["Post"],
    }),

    loginUser: builder.mutation({
      query: (payload) => ({
        url: LOGIN_API_PATH,
        method: "POST",
        body: payload,

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),

      // invalidatesTags: ['Post'],
    }),

    register: builder.mutation({
      query: (payload) => ({
        url: REGISTER_API_PATH,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),


    
    

  }),
});

export const { useGetPostsQuery, useLoginUserMutation, useRegisterMutation } =
  login;
