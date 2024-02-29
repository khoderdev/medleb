import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = "http://localhost:3000";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    addPharmacyDrug: builder.mutation({
      // Add this mutation for addPharmacyDrug
      query: (drugData) => ({
        url: `/drugs/addPharmacy`,
        method: "POST",
        body: drugData,
      }),
    }),
    addDrug: builder.mutation({
      query: (drugData) => ({
        url: `/drugs/add`,
        method: "POST",
        body: drugData,
      }),
    }),
    updateDrug: builder.mutation({
      query: ({ id, ...drugData }) => ({
        url: `/drugs/${id}`,
        method: "PUT",
        body: drugData,
      }),
    }),
    deleteDrug: builder.mutation({
      query: (id) => ({
        url: `/drugs/${id}`,
        method: "DELETE",
      }),
    }),
    searchDrugByATCName: builder.query({
      query: (query) => `/drugs/search/atc/${query}`,
    }),
    searchDrugByBrandName: builder.query({
      query: (query) => `/drugs/search/brand/${query}`,
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
} = api;

export default api;
