import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const predictionApi = createApi({
  reducerPath: 'predictionApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://bntp66nvx4.execute-api.us-east-1.amazonaws.com'}),
  endpoints: (build) => ({


    predictWeather: build.query({
      query: () => 'prediction',
      transformResponse: ({ body }): string => {
        return body
      }
    })
  }) 
})

export const {
  usePredictWeatherQuery
} = predictionApi