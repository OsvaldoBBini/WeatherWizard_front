import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const predictionApi = createApi({
  reducerPath: 'predictionApi',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
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