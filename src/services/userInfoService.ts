import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userInfoApi = createApi({
  reducerPath: 'userInfoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: (build) => ({

    updateUserInfo: build.mutation({
      query: ({userId, userInfos}) => {
        
        if (userInfos.if_wrong_answer === undefined) {
          userInfos.if_wrong_answer = '-'
        }

        return {
        url: `manage_user_info/${userId}`,
        method: 'PATCH',
        body: userInfos
      }}
    }),

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
  useStoreUserInfoMutation,
  useUpdateUserInfoMutation
} = userInfoApi