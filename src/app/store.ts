import { configureStore } from "@reduxjs/toolkit";
import { userInfoApi } from "../services/userInfoService";

export const store = configureStore({
  reducer: {
    [userInfoApi.reducerPath]: userInfoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userInfoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch