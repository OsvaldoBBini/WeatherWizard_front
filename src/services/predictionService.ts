import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const predictionApi = createApi({
  reducerPath: 'predictionApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://bntp66nvx4.execute-api.us-east-1.amazonaws.com'}),
  endpoints: (build) => ({


    predictWeather: build.mutation({
      query: ({userId}) => ({
        url: 'prediction',
        method: 'POST',
        body: { userId }
      }) 
    })
  }) 
})

export const {
  usePredictWeatherMutation
} = predictionApi