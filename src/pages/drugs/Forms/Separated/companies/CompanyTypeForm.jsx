// CompanyTypeForm.js
import React, { useState } from 'react';
import Axios from "../../../../../api/axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function CompanyTypeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    // Add other fields as needed
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/CompanyType/v1.0', formData);
      onSubmit(response.data);
      setFormData({
        name: '',
        // Reset other fields as needed
      });
      setError(null);
    } catch (error) {
      setError(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Company Type Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      {/* Add other necessary input fields */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Create Company Type</button>
    </form>
  );
}

export default CompanyTypeForm;
