import {
  ADD_DRUG_REQUEST,
  ADD_DRUG_SUCCESS,
  ADD_DRUG_FAILURE,
  SEARCH_DRUG_BY_ATC_NAME_REQUEST,
  SEARCH_DRUG_BY_ATC_NAME_SUCCESS,
  SEARCH_DRUG_BY_ATC_NAME_FAILURE,
} from "../actions/AddDrugAndImportActions";

const initialState = {
  drugs: [],
  loading: false,
  error: null,
};
const TAG = '[DRUGS]';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DRUG_BY_ATC_NAME_REQUEST:
    case ADD_DRUG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_DRUG_BY_ATC_NAME_SUCCESS:
      return {
        ...state,
        drugs: action.payload,
        loading: false,
        error: null,
      };
    case SEARCH_DRUG_BY_ATC_NAME_FAILURE:
    case ADD_DRUG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_DRUG_SUCCESS:
      return {
        ...state,
        drugs: [...state.drugs, action.payload],
        loading: false,
        error: null,
      };
    // Cases for other CRUD operations (update and delete) can be added similarly
    default:
      return state;
  }
};

export default reducer;
