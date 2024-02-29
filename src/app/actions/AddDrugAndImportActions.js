import api from "../slices/apiSlice"; // Import api

const TAG = "[DRUGS]";

// Action Types
export const SEARCH_DRUG_BY_ATC_NAME_REQUEST = `${TAG} SEARCH_DRUG_BY_ATC_NAME_REQUEST`;
export const SEARCH_DRUG_BY_ATC_NAME_SUCCESS = `${TAG} SEARCH_DRUG_BY_ATC_NAME_SUCCESS`;
export const SEARCH_DRUG_BY_ATC_NAME_FAILURE = `${TAG} SEARCH_DRUG_BY_ATC_NAME_FAILURE`;
export const SEARCH_DRUG_BY_BRAND_NAME_REQUEST = `${TAG} SEARCH_DRUG_BY_BRAND_NAME_REQUEST`;
export const SEARCH_DRUG_BY_BRAND_NAME_SUCCESS = `${TAG} SEARCH_DRUG_BY_BRAND_NAME_SUCCESS`;
export const SEARCH_DRUG_BY_BRAND_NAME_FAILURE = `${TAG} SEARCH_DRUG_BY_BRAND_NAME_FAILURE`;

export const ADD_DRUG_REQUEST = `${TAG} ADD_DRUG_REQUEST`;
export const ADD_DRUG_SUCCESS = `${TAG} ADD_DRUG_SUCCESS`;
export const ADD_DRUG_FAILURE = `${TAG} ADD_DRUG_FAILURE`;
export const UPDATE_DRUG_REQUEST = `${TAG} UPDATE_DRUG_REQUEST`;
export const UPDATE_DRUG_SUCCESS = `${TAG} UPDATE_DRUG_SUCCESS`;
export const UPDATE_DRUG_FAILURE = `${TAG} UPDATE_DRUG_FAILURE`;
export const DELETE_DRUG_REQUEST = `${TAG} DELETE_DRUG_REQUEST`;
export const DELETE_DRUG_SUCCESS = `${TAG} DELETE_DRUG_SUCCESS`;
export const DELETE_DRUG_FAILURE = `${TAG} DELETE_DRUG_FAILURE`;

// Action Creators

export const searchDrugByBrandNameRequest = () => ({
  type: SEARCH_DRUG_BY_BRAND_NAME_REQUEST,
});

export const searchDrugByBrandNameSuccess = (data) => ({
  type: SEARCH_DRUG_BY_BRAND_NAME_SUCCESS,
  payload: data,
});

export const searchDrugByBrandNameFailure = (error) => ({
  type: SEARCH_DRUG_BY_BRAND_NAME_FAILURE,
  payload: error,
});

export const searchDrugByATCNameRequest = () => ({
  type: SEARCH_DRUG_BY_ATC_NAME_REQUEST,
});

export const searchDrugByATCNameSuccess = (data) => ({
  type: SEARCH_DRUG_BY_ATC_NAME_SUCCESS,
  payload: data,
});

export const searchDrugByATCNameFailure = (error) => ({
  type: SEARCH_DRUG_BY_ATC_NAME_FAILURE,
  payload: error,
});

export const addDrugRequest = () => ({
  type: ADD_DRUG_REQUEST,
});

export const addDrugSuccess = (data) => ({
  type: ADD_DRUG_SUCCESS,
  payload: data,
});

export const addDrugFailure = (error) => ({
  type: ADD_DRUG_FAILURE,
  payload: error,
});

export const updateDrugRequest = () => ({
  type: UPDATE_DRUG_REQUEST,
});

export const updateDrugSuccess = (data) => ({
  type: UPDATE_DRUG_SUCCESS,
  payload: data,
});

export const updateDrugFailure = (error) => ({
  type: UPDATE_DRUG_FAILURE,
  payload: error,
});

export const deleteDrugRequest = () => ({
  type: DELETE_DRUG_REQUEST,
});

export const deleteDrugSuccess = (data) => ({
  type: DELETE_DRUG_SUCCESS,
  payload: data,
});

export const deleteDrugFailure = (error) => ({
  type: DELETE_DRUG_FAILURE,
  payload: error,
});

// Thunk function to add a new drug
export const addDrug = (drugData) => async (dispatch) => {
  dispatch(addDrugRequest());
  try {
    console.log("Sending request to add drug:", drugData); // Log the data being sent to the API

    const response = await api.post("/drugs/add", drugData); // Use api.post instead of Axios.post

    console.log("Response after adding drug:", response.data); // Log the response data

    if (!response.data) {
      throw new Error("Failed to add drug. Response data is missing.");
    }

    dispatch(addDrugSuccess(response.data));
  } catch (error) {
    console.error("Error adding drug:", error); // Log any errors that occur during the process
    dispatch(addDrugFailure(error.message));
  }
};

// Thunk function to update an existing drug
export const updateDrug = (drugData) => async (dispatch) => {
  dispatch(updateDrugRequest());
  try {
    const response = await api.put(`/drugs/${drugData.id}`, drugData); // Use api.put instead of Axios.put
    dispatch(updateDrugSuccess(response.data));
  } catch (error) {
    dispatch(updateDrugFailure(error.message));
  }
};

// Thunk function to delete a drug
export const deleteDrug = (id) => async (dispatch) => {
  dispatch(deleteDrugRequest());
  try {
    await api.delete(`/drugs/${id}`); // Use api.delete instead of Axios.delete
    dispatch(deleteDrugSuccess(id));
  } catch (error) {
    dispatch(deleteDrugFailure(error.message));
  }
};

// Thunk function to search drugs by brand name
export const searchDrugByBrandName = (query) => async (dispatch) => {
  dispatch(searchDrugByBrandNameRequest());
  try {
    const response = await api.get(`/drugs/search/brand/${query}`);
    dispatch(searchDrugByBrandNameSuccess(response.data));
  } catch (error) {
    dispatch(searchDrugByBrandNameFailure(error.message));
  }
};

// Thunk function to search drugs by ATC name
export const searchDrugByATCName = (query) => async (dispatch) => {
  dispatch(searchDrugByATCNameRequest());
  try {
    const response = await api.get(`/drugs/search/atc/${query}`); // Use api.get instead of Axios.get
    dispatch(searchDrugByATCNameSuccess(response.data));
  } catch (error) {
    dispatch(searchDrugByATCNameFailure(error.message));
  }
};
