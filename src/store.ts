import { configureStore } from "@reduxjs/toolkit";
import { userSlice, authApi } from "./store/user";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;
export default store;

export const selectUser = (state: RootState) => state.user;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
