import { configureStore } from "@reduxjs/toolkit";
import { userInfoApi } from "../services/userInfoService";
import userReducer from "../features/user/userSlice";
import { predictionApi } from "../services/predictionService";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    [predictionApi.reducerPath]: predictionApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userInfoApi.middleware, predictionApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch