import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacterById: builder.query({
      query: (id: string) => `character/${id}`,
    }),
    getEpisodeById: builder.query({
      query: (id: string) => `episode/${id}`,
    })
  }),
});

export const { useGetCharacterByIdQuery,useGetEpisodeByIdQuery } = characterApi;
