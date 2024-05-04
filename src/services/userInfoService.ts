import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userInfoApi = createApi({
  reducerPath: 'userInfoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: (build) => ({
    storeUserInfo: build.mutation({
      query: ({userInfos}) => ({
        url: 'manage_user_info',
        method: 'POST',
        body: userInfos
      })
    })
  }) 
})

export const {
  useStoreUserInfoMutation
} = userInfoApi