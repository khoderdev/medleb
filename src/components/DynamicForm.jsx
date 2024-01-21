import React, { useState } from "react";

const DynamicForm = ({ schema, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    const newErrors = {};
    schema.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Perform any additional validation or data processing here if needed
      onSubmit(formData);
    }
  };

  return (
    <form className="flex flex-col justify-center items-center gap-4 pt-10">
      {schema.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
          {errors[field.name] && (
            <p style={{ color: "red" }}>{errors[field.name]}</p>
          )}
        </div>
      ))}

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
