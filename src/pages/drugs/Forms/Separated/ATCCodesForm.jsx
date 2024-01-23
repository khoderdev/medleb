import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://192.168.10.88:3010";

const ATCCodesForm = () => {
  const currentDate = new Date().toISOString();

  const [formData, setFormData] = useState({
    guid: uuidv4(),
    atcGuid: uuidv4(),
    code: "",
    levelName: "",
    levelNameAr: "",
    levelNumber: null,
    substanceName: "",
    atcingredientName: "",
    atcingredientNameAr: "",
    interactionIngredientName: "",
    enabled: true,
    createdDate: currentDate,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server endpoint
      const response = await axios.post(
        `${API_URL}`,
        formData
        // Include headers if needed
      );

      console.log("Server Response:", response.data);

      // Handle the response as needed

      // Clear the form after successful submission
      setFormData({
        guid: uuidv4(),
        atcGuid: uuidv4(),
        code: "",
        levelName: "",
        levelNameAr: "",
        levelNumber: null,
        substanceName: "",
        atcingredientName: "",
        atcingredientNameAr: "",
        interactionIngredientName: "",
        enabled: true,
        createdDate: currentDate,
      });

      // Display a success message
      alert("Data submitted successfully!");
    } catch (error) {
      // Handle errors and display an error message
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="atcGuid">ATC Guid:</label>
      <input
        type="text"
        id="atcGuid"
        name="atcGuid"
        value={formData.atcGuid}
        onChange={handleChange}
        required
      />

      <label htmlFor="code">Code:</label>
      <input
        type="text"
        id="code"
        name="code"
        value={formData.code}
        onChange={handleChange}
        required
      />

      <label htmlFor="levelName">Level Name:</label>
      <input
        type="text"
        id="levelName"
        name="levelName"
        value={formData.levelName}
        onChange={handleChange}
        required
      />

      <label htmlFor="levelNameAr">Level Name (Arabic):</label>
      <input
        type="text"
        id="levelNameAr"
        name="levelNameAr"
        value={formData.levelNameAr}
        onChange={handleChange}
        required
      />

      <label htmlFor="levelNumber">Level Number:</label>
      <input
        type="number"
        id="levelNumber"
        name="levelNumber"
        value={formData.levelNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="substanceName">Substance Name:</label>
      <input
        type="text"
        id="substanceName"
        name="substanceName"
        value={formData.substanceName}
        onChange={handleChange}
      />

      {/* Add similar labels and inputs for other fields */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ATCCodesForm;
