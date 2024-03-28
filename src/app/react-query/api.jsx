import { atom } from "jotai";
import { useQuery, useMutation } from "react-query";

const apiUrl = "http://localhost:3000";

// const queryClient = new QueryClient();

// Atom to store the API base URL
const apiBaseUrlAtom = atom(apiUrl);

// Function to perform a fetch with base URL
const fetchWithBaseUrl = async (url, options) => {
  const apiUrl = await apiBaseUrlAtom;
  const response = await fetch(`${apiUrl}${url}`, options);
  const data = await response.json();
  return data;
};

// Function to create mutation hook
const useMutationWithBaseQuery = (mutationFn) =>
  useMutation(mutationFn, {
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

// Function to create query hook
const useQueryWithBaseQuery = (queryKey, queryFn) =>
  useQuery(queryKey, () => fetchWithBaseUrl(queryFn()), {
    onError: (error) => {
      console.error("Query error:", error);
    },
  });

// Mutation hooks
const useAddPharmacyDrugMutation = () =>
  useMutationWithBaseQuery((drugData) =>
    fetchWithBaseUrl("/drugs/addPharmacy", {
      method: "POST",
      body: JSON.stringify(drugData),
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

const useAddDrugMutation = () =>
  useMutationWithBaseQuery((drugData) =>
    fetchWithBaseUrl("/drugs/add", {
      method: "POST",
      body: JSON.stringify(drugData),
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

const useUpdateDrugMutation = () =>
  useMutationWithBaseQuery(({ id, ...drugData }) =>
    fetchWithBaseUrl(`/drugs/${id}`, {
      method: "PUT",
      body: JSON.stringify(drugData),
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

const useDeleteDrugMutation = () =>
  useMutationWithBaseQuery((id) =>
    fetchWithBaseUrl(`/drugs/${id}`, {
      method: "DELETE",
    })
  );

// Query hooks
const useSearchDrugByATCNameQuery = (query) =>
  useQueryWithBaseQuery(
    ["searchDrugByATCName", query],
    () => `/drugs/search/atc/${query}`
  );

const useSearchDrugByBrandNameQuery = (query) =>
  useQueryWithBaseQuery(
    ["searchDrugByBrandName", query],
    () => `/drugs/search/brand/${query}`
  );

export {
  apiBaseUrlAtom,
  useAddDrugMutation,
  useUpdateDrugMutation,
  useDeleteDrugMutation,
  useAddPharmacyDrugMutation,
  useSearchDrugByATCNameQuery,
  useSearchDrugByBrandNameQuery,
//   queryClient,
};
