import { createSlice } from "@reduxjs/toolkit";
import { userInfoApi } from "../../services/userInfoService";

interface IUser {
  userId: string | null,
  modalStatus: boolean
}

const initialState: IUser = {
  userId: null,
  modalStatus: true
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      userInfoApi.endpoints.storeUserInfo.matchFulfilled,
      (state, {payload}) => {
        state.userId = payload.user_id,
        state.modalStatus = false
      }
    )
  },
})

export default userSlice.reducer;