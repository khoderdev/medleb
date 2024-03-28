// drugImportationsApiSlice.js

import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

import  apiSlice from "./apiSlice";

const importationsAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = importationsAdapter.getInitialState();

export const drugImportationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDrugImportations: builder.query({
      query: () => ({
        url: "/importations",
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
      transformResponse: (responseData) => {
        const loadedImportations = responseData.map((importation) => {
          importation.id = importation._id;
          return importation;
        });
        return importationsAdapter.setAll(initialState, loadedImportations);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "importations", id: "LIST" },
            ...result.ids.map((id) => ({ type: "DrugImportations", id })),
          ];
        } return [{ type: "DrugImportations", id: "LIST" }];
      },
    }),

    addNewDrugImportation: builder.mutation({
      query: (initialImportation) => ({
        url: "/importations",
        method: "POST",
        body: {
          ...initialImportation,
        },
      }),
      invalidatesTags: [{ type: "DrugImportations", id: "LIST" }],
    }),

    updateDrugImportation: builder.mutation({
      query: (initialImportation) => ({
        url: "/importations",
        method: "PATCH",
        body: {
          ...initialImportation,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "DrugImportations", id: arg.id },
      ],
    }),

    deleteDrugImportation: builder.mutation({
      query: ({ id }) => ({
        url: `/importations`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "DrugImportations", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetDrugImportationsQuery,
  useAddNewDrugImportationMutation,
  useUpdateDrugImportationMutation,
  useDeleteDrugImportationMutation,
} = drugImportationsApiSlice;

export const selectDrugImportationsResult =
  drugImportationsApiSlice.endpoints.getDrugImportations.select();

const selectImportationsData = createSelector(
  selectDrugImportationsResult,
  (importationsResult) => importationsResult.data
);

export const {
  selectAll: selectAllDrugImportations,
  selectById: selectDrugImportationById,
  selectIds: selectDrugImportationIds,
} = importationsAdapter.getSelectors(
  (state) => selectImportationsData(state) ?? initialState
);
