import { configureStore } from "@reduxjs/toolkit";
import { userInfoApi } from "../services/userInfoService";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userInfoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch