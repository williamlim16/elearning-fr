/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../types/model";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/user/register",
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/user/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

const initialState: User = {
  email: "",
  id: "",
  password: "",
  name: "",
  token: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    },
    login: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
  },
});

export const { register, login } = userSlice.actions;
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
