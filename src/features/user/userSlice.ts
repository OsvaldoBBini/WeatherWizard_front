import { createSlice } from "@reduxjs/toolkit";
import { userInfoApi } from "../../services/userInfoService";

interface IUser {
  userId: string | null
}

const initialState: IUser = {
  userId: null
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      userInfoApi.endpoints.storeUserInfo.matchFulfilled,
      (state, {payload}) => {
        state.userId = payload.user_id
      }
    )
  },
})

export default userSlice.reducer;