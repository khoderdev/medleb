// export const setCurrentStep = (step) => {
//     return {
//       type: 'SET_CURRENT_STEP',
//       payload: step,
//     };
//   };
  
//   export const setFormData = (step, formData) => {
//     return {
//       type: 'SET_FORM_DATA',
//       payload: { step, formData },
//     };
//   };
  
//   export const resetFormData = () => {
//     return {
//       type: 'RESET_FORM_DATA',
//     };
//   };
  // actions.js
import { SET_CURRENT_STEP, SET_FORM_DATA, RESET_FORM_DATA } from './DrugRegActionTypes';

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
