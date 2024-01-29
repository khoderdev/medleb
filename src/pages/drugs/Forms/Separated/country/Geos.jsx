import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import { v4 as uuidv4 } from "uuid";

const Geos = () => {
  const [formData, setFormData] = useState({
    // Country fields
    guid: uuidv4(),
    code: "",
    name: "",
    nameAr: "",
    enabled: true,
    createdDate: new Date().toISOString(),
    isNearByCountry: true,
    isReferenceCountry: true,
    isComparative: true,
    // Governorates fields
    guid: "",
    staticCountryGuid: "",
    code: "",
    govName: "",
    govNameAr: "",
    enabled: true,
    createdDate: new Date().toISOString(),
  });

  console.log("formData:", formData);

  const [countryList, setCountryList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("/api/country/v1.0");
        setCountryList(response.data);
      } catch (error) {
        console.error("Error fetching Country data:", error);
        setError("Failed to fetch Country data");
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Generate GUID for the new record in Governorate table
      const staticCountryGuid = uuidv4();
      // Perform API call to create a new record in Country table
      await Axios.post("/api/country/v1.0", {
        guid: staticCountryGuid,
        code: formData.code,
        name: formData.name,
        nameAr: formData.nameAr,
        enabled: formData.enabled,
      });

      // Perform API call to create a new record in Drug_ATCCodes table
      await Axios.post("/api/governorates/v1.0", {
        guid: uuidv4(),
        code: formData.staticCountryGuid,
        staticCountryGuid: staticCountryGuid,
        name: formData.govName,
        nameAr: formData.govNameAr,
        enabled: formData.enabled,
      });

      // Reset form fields after successful submission
      setFormData({
        guid: "",
        code: "",
        name: "",
        nameAr: "",
        enabled: true,
        isNearByCountry: true,
        isReferenceCountry: true,
        isComparative: true,
        // Governorates fields
        guid: "",
        staticCountryGuid: "",
        govCode: "",
        govName: "",
        govNameAr: "",
        enabled: true,
      });
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form data:", error);
      setError("Failed to submit form data");
    }
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto">
      <form
        className="grid grid-cols-2 gap-10 p-4 py-14 md:p-10"
        onSubmit={handleSubmit}
      >
        {/* Drug_ATC fields */}
        <div className="flex flex-col gap-6">
          <h3 className="text-green-pri">Country</h3>
          <label className="flex flex-col">
            Counrty Code:
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleInputChange}
              placeholder="Code"
              minLength={3}
            />
          </label>

          <label className="flex flex-col">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col">
            Name (Arabic):
            <input
              type="text"
              name="nameAr"
              value={formData.nameAr}
              onChange={handleInputChange}
            />
          </label>

          {/* Add more Country fields as needed */}
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        {/* Drug_ATCCodes fields */}
        <div className="flex flex-col gap-6">
          <h3 className="text-green-pri">Governorates</h3>
          <label className="flex flex-col">
            Code:
            <input
              type="text"
              name="staticCountryGuid"
              value={formData.staticCountryGuid}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="flex flex-col">
            Name:
            <input
              type="text"
              name="govName"
              value={formData.govName}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="flex flex-col">
            Name (Arabic):
            <input
              type="text"
              name="govNameAr"
              value={formData.govNameAr}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Add more Governorates fields as needed */}
        </div>

        <button className="med-btn-pri col-span-full w-24" type="submit">
          Submit
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Geos;
