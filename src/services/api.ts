import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'
import { MenuProducts, Restaurant } from '../pages/Menu'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getBanner: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useGetBannerQuery
} = api

export default api
