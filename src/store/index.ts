import { configureStore } from "@reduxjs/toolkit";
// ...
import appReducer from "./slice/appSlice";
import homePageReducer from "./slice/homeSlice";
import playerReducer from "./slice/playersSlice";
import playerMatchesReducer from "./slice/playerMatchesSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    home: homePageReducer,
    player: playerReducer,
    playerMatches: playerMatchesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
