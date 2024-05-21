import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: `api`,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.py4e.com/api/",
  }),

  endpoints: (builder) => ({
    getAllPeople: builder.query({
      query: () => "people/",
    }),
  }),
  //      endpoints: (builder) => ({
  //         getAllPlanets: builder.query({
  //           query:() => 'planets/',
  //       })
  //      })
  //       endpoints : (builder) => ({
  //         getAllVehicles: builder.query({
  //           query:() => 'vehicles/',
  //       })
  //       })
  //        endpoints: (builder) => ({
  //         getAllSpecies: builder.query({
  //           query:() => 'species/',
  //       })
  //        })
  //        endpoints: (builder) => ({
  //         getAllFilms: builder.query({
  //           query:() => 'films/',
  //       })
  //        })
  //        endpoints: (builder) => ({
  //         getAllStarships: builder.query({
  //           query:() => 'starships/',
  //       })
  //   })
});

export const {
  useGetAllPeopleQuery,
  //   useGetAllPlanetsQuery,
  //   useGetAllVehiclesQuery,
  //   useGetAllFilmsQuery,
  //   useGetAllStarshipsQuery,
} = api;
