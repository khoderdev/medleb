import React, { useState } from "react";
import axios from "axios"; // Assuming axios is used for HTTP requests

const MedicationForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    image: "",
    atc: "",
    seq: 0,
    bg: "",
    ingredients: "",
    code: 0,
    reg_number: "",
    brand_name: "",
    strength: "",
    presentation: "",
    form: "",
    dosage_lndi: "",
    presentation_lndi: "",
    form_lndi: "",
    route_lndi: "",
    agent: "",
    manufacturer: "",
    country: "",
    public_price: 0,
    stratum: "",
    subsidy_percentage: "",
    pill_price: 0,
    barcode_gtin: "",
    added_date: new Date(),
    modified_date: 0,
    modified_by: 0,
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Perform data submission using axios or any other HTTP library
      const response = await axios.post("/api/medications", formData);
      console.log("Form submitted successfully:", response.data);

      // Clear form data after successful submission
      setFormData({
        ...formData,
        image: "",
        atc: "",
        seq: 0,
        bg: "",
        ingredients: "",
        code: 0,
        reg_number: "",
        brand_name: "",
        strength: "",
        presentation: "",
        form: "",
        dosage_lndi: "",
        presentation_lndi: "",
        form_lndi: "",
        route_lndi: "",
        agent: "",
        manufacturer: "",
        country: "",
        public_price: 0,
        stratum: "",
        subsidy_percentage: "",
        pill_price: 0,
        barcode_gtin: "",
        added_date: new Date(),
        modified_date: 0,
        modified_by: 0,
      });

      // Optionally, you can perform any additional actions after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately (e.g., display error message to the user)
    }
  };

  // Function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="atc">ATC:</label>
        <input
          type="text"
          id="atc"
          name="atc"
          value={formData.atc}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="modified_by">Modified By:</label>
        <input
          type="text"
          id="modified_by"
          name="modified_by"
          value={formData.modified_by}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicationForm;
