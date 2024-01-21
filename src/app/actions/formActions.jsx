export const setCurrentStep = (step) => {
    return {
      type: 'SET_CURRENT_STEP',
      payload: step,
    };
  };
  
  export const setFormData = (step, formData) => {
    return {
      type: 'SET_FORM_DATA',
      payload: { step, formData },
    };
  };
  
  export const resetFormData = () => {
    return {
      type: 'RESET_FORM_DATA',
    };
  };
  