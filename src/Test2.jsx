import React, { useState } from 'react';
import { Alert } from '@material-tailwind/react';

import { resetForm, handleInputChange } from './utils/formUtils';

const DynamicForm = () => {
  const initialFormData = {
    input1: '',
    input2: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    resetForm(initialFormData, setFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 mt-4 w-full justify-center items-center"
    >
      <input
        type="text"
        name="input1"
        value={formData.input1}
        onChange={(event) => handleInputChange(event, formData, setFormData)}
      />
      <input
        type="text"
        name="input2"
        value={formData.input2}
        onChange={(event) => handleInputChange(event, formData, setFormData)}
      />
      <button type="submit">Submit</button>

      {showAlert && (
        <Alert
          className="w-64 border-2 border-white-text"
          color="blue"
          onClose={() => setShowAlert(false)}
        >
          <ul>
            <li>Input 1: {formData.input1}</li>
            <li>Input 2: {formData.input2}</li>
          </ul>
        </Alert>
      )}
    </form>
  );
};

export default DynamicForm;
