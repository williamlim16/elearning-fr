import { configureStore } from "@reduxjs/toolkit";
import { userSlice, authApi } from "./store/user";
import { courseSlice, courseApi } from "./store/course";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    course: courseSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(courseApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;
export default store;

export const selectUser = (state: RootState) => state.user;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
