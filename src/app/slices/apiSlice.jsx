// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import Axios from "../../api/axios";

// const apiUrl = "http://localhost:3000";

// const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
//   endpoints: (builder) => ({
//     // Existing mutations...
//     addPharmacyDrug: builder.mutation({
//       // Mutation for addPharmacyDrug
//       query: (drugData) => ({
//         url: `/drugs/addPharmacy`,
//         method: "POST",
//         body: drugData,
//       }),
//     }),
//     addDrug: builder.mutation({
//       // Mutation for addDrug
//       query: (drugData) => ({
//         url: `/drugs/add`,
//         method: "POST",
//         body: drugData,
//       }),
//     }),
//     updateDrug: builder.mutation({
//       // Mutation for updateDrug
//       query: ({ id, ...drugData }) => ({
//         url: `/drugs/${id}`,
//         method: "PUT",
//         body: drugData,
//       }),
//     }),
//     deleteDrug: builder.mutation({
//       // Mutation for deleteDrug
//       query: (id) => ({
//         url: `/drugs/${id}`,
//         method: "DELETE",
//       }),
//     }),
//     searchDrugByATCName: builder.query({
//       // Query for searching drugs by ATC name
//       query: (query) => `/drugs/search/atc/${query}`,
//     }),
//     searchDrugByBrandName: builder.query({
//       // Query for searching drugs by brand name
//       query: (query) => `/drugs/search/brand/${query}`,
//     }),
//     // New mutation for fetching brands
//     fetchBrands: builder.query({
//       query: () => brandsApiUrl,
//     }),
//   }),
// });

// export const {
//   useAddDrugMutation,
//   useUpdateDrugMutation,
//   useDeleteDrugMutation,
//   useSearchDrugByATCNameQuery,
//   useSearchDrugByBrandNameQuery,
//   useAddPharmacyDrugMutation,
//   useFetchBrandsQuery, // Hook for fetching brands
// } = api;

// export default api;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import axiosInstances from "../../api/axios";

const apiUrl = "http://localhost:9000";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    // Existing mutations...
    addPharmacyDrug: builder.mutation({
      // Mutation for addPharmacyDrug
      query: (drugData) => ({
        url: `/drugs/addPharmacy`,
        method: "POST",
        body: drugData,
      }),
    }),
    addDrug: builder.mutation({
      // Mutation for addDrug
      query: (drugData) => ({
        url: `/drugs/add`,
        method: "POST",
        body: drugData,
      }),
    }),
    updateDrug: builder.mutation({
      // Mutation for updateDrug
      query: ({ id, ...drugData }) => ({
        url: `/drugs/${id}`,
        method: "PUT",
        body: drugData,
      }),
    }),
    deleteDrug: builder.mutation({
      // Mutation for deleteDrug
      query: (id) => ({
        url: `/drugs/${id}`,
        method: "DELETE",
      }),
    }),
    searchDrugByATCName: builder.query({
      // Query for searching drugs by ATC name
      query: (query) => `/drugs/search/atc/${query}`,
    }),
    searchDrugByBrandName: builder.query({
      // Query for searching drugs by brand name
      query: (query) => `/drugs/search/brand/${query}`,
    }),
    // New mutation for fetching brands
    fetchBrands: builder.query({
      // Use axiosInstance based on the third base URL
      queryFn: async (arg, _api, _extraOptions, fetchWithBQ) => {
        const axiosInstance = axiosInstances[2]; // Using the third axios instance
        return fetchWithBQ(arg, _api, { axiosInstance });
      },
    }),
  }),
});

export const {
  useAddDrugMutation,
  useUpdateDrugMutation,
  useDeleteDrugMutation,
  useSearchDrugByATCNameQuery,
  useSearchDrugByBrandNameQuery,
  useAddPharmacyDrugMutation,
  useFetchBrandsQuery, // Hook for fetching brands
} = api;

export default api;
