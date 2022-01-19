import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getCategories: builder.query({
      query: () => '/products/categories',
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = fakeStoreApi;
