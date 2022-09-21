/* eslint-disable no-param-reassign */

import { configureStore } from "@reduxjs/toolkit";
import { userSlice, registerApi } from "./store/user";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registerApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;
export default store;

export const selectUser = (state: RootState) => state.user;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
