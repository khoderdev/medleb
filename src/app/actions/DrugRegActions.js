// Import action types
import {
  SET_CURRENT_STEP,
  SET_FORM_DATA,
  RESET_FORM_DATA,
} from "./DrugRegActionTypes";

// Action creators
export const setCurrentStep = (step) => ({
  type: SET_CURRENT_STEP,
  payload: step,
});

export const setFormData = (step, formData) => ({
  type: SET_FORM_DATA,
  payload: { step, formData },
});

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
});
