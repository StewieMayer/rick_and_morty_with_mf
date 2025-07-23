import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, { page?: number; name?: string; status?: string; species?: string }>({
      query: ({ page = 1, name, status, species }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        if (name) params.append("name", name);
        if (status) params.append("status", status);
        if (species) params.append("species", species);
        return `character/?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;
