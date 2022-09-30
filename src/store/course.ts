/* eslint-disable no-param-reassign */
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../config/server";
import { Course, CourseResponse } from "../types/course";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
  endpoints: (builder) => ({
    getCourses: builder.query<CourseResponse[], void>({
      query: () => "/course",
    }),
  }),
});

const initialState: Course[] = [];

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.push(action.payload);
    },
    setCourse: (state, action: PayloadAction<Course[]>) => {
      state = [...action.payload];
    },
  },
});

export const { useGetCoursesQuery } = courseApi;
