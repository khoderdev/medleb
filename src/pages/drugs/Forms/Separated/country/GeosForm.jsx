import React, { useState, useEffect } from "react";
import Axios from "../../../../../api/axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const GeosForm = () => {
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
    // Districts fields
    guid: "",
    governorateGuid: "",
    code: "",
    distName: "",
    distNameAr: "",
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
      // Generate GUID for the new record in Country table
      const staticCountryGuid = uuidv4();
      // Perform API call to create a new record in Country table
      await Axios.post("/api/country/v1.0", {
        guid: staticCountryGuid,
        code: formData.code,
        name: formData.name,
        nameAr: formData.nameAr,
        enabled: formData.enabled,
      });

      // Generate GUID for the new record in Governorate table
      const governorateGuid = uuidv4();
      // Perform API call to create a new record in Governorate table
      await Axios.post("/api/governorates/v1.0", {
        guid: governorateGuid,
        code: formData.staticCountryGuid,
        staticCountryGuid: staticCountryGuid,
        name: formData.govName,
        nameAr: formData.govNameAr,
        enabled: formData.enabled,
      });

      // Perform API call to create a new record in Districts table
      await Axios.post("/api/district/v1.0", {
        guid: uuidv4(),
        code: formData.governorateGuid,
        governorateGuid: governorateGuid, // Use the stored Governorate GUID here
        name: formData.distName,
        nameAr: formData.distNameAr,
        enabled: formData.enabled,
      });

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form data:", error);
      setError("Failed to submit form data");
    } finally {
      // Reset form fields after form submission (whether successful or not)
      resetFormData();
    }
  };

  const resetFormData = () => {
    setFormData({
      // Counrty fields
      guid: "",
      code: "",
      name: "",
      nameAr: "",
      enabled: true,
      isNearByCountry: true,
      isReferenceCountry: true,
      isComparative: true,
      // Governorate fields
      guid: "",
      staticCountryGuid: "",
      govCode: "",
      govName: "",
      govNameAr: "",
      enabled: true,
      // District fields
      guid: "",
      governorateGuid: "",
      distCode: "",
      distName: "",
      distNameAr: "",
      enabled: true,
    });
  };

  return (
    <div className="flex flex-col p-6 mx-auto">
      <form
        className="grid grid-cols-4 gap-10 p-4 py-14 md:p-8"
        onSubmit={handleSubmit}
      >
        {/* Country fields */}
        <div className="flex flex-col gap-6">
          <h3 className="text-green-pri">Country</h3>
          <label className="flex flex-col mt-[-0.3rem]">
            Counrty Code:
            <input
              type="number"
              name="code"
              value={formData.code}
              onChange={handleInputChange}
              placeholder="Code"
              autoFocus
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

        {/* Governorates fields */}
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
        </div>

        {/* Districts fields */}
        <div className="flex flex-col gap-6">
          <h3 className="text-green-pri">Districts</h3>
          <label className="flex flex-col">
            Code:
            <input
              type="text"
              name="governorateGuid"
              value={formData.governorateGuid}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="flex flex-col">
            Name:
            <input
              type="text"
              name="distName"
              value={formData.distName}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="flex flex-col">
            Name (Arabic):
            <input
              type="text"
              name="distNameAr"
              value={formData.distNameAr}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <div className="btns-col col-span-full flex justify-between">
          <Link to="/geo/list" className="med-btn-pri">
            Go to data table
          </Link>

          <button className="med-btn-sec w-24" type="submit">
            Submit
          </button>
        </div>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default GeosForm;
