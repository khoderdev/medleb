import React, { useState } from "react";
import Axios from "../../../../../api/axios";
import { v4 as uuidv4 } from "uuid";

const ModalForm = ({ modalType, setModalType, countryGuid }) => {
  // Generate unique GUID for the form submission
  const formGuid = uuidv4();

  // State variables for governorate inputs
  const [governorateCode, setGovernorateCode] = useState("");
  const [governorateEnglishName, setGovernorateEnglishName] = useState("");
  const [governorateArabicName, setGovernorateArabicName] = useState("");

  // State variables for district inputs
  const [districtCode, setDistrictCode] = useState("");
  const [districtEnglishName, setDistrictEnglishName] = useState("");
  const [districtArabicName, setDistrictArabicName] = useState("");

  // State variables for city inputs
  const [cityCode, setCityCode] = useState("");
  const [cityEnglishName, setCityEnglishName] = useState("");
  const [cityArabicName, setCityArabicName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data based on modalType
      if (modalType === "governorate") {
        await Axios.post("/api/governorates/v1.0", {
          guid: formGuid,
          staticCountryGuid: countryGuid,
          code: governorateCode,
          name: governorateEnglishName,
          nameAr: governorateArabicName,
        });
      } else if (modalType === "district") {
        await Axios.post("/api/district/v1.0", {
          guid: formGuid,
          governorateGuid: countryGuid,
          code: districtCode,
          name: districtEnglishName,
          nameAr: districtArabicName,
        });
      } else if (modalType === "city") {
        await Axios.post("/api/city/v1.0", {
          guid: formGuid,
          districtGuid: countryGuid,
          code: cityCode,
          name: cityEnglishName,
          nameAr: cityArabicName,
        });
      }

      // Reset form values
      resetForm();
      // Close modal
      setModalType(null);
    } catch (error) {
      console.error("Error submitting form data:", error);
      // Handle error
    }
  };

  const resetForm = () => {
    // Reset governorate inputs
    setGovernorateCode("");
    setGovernorateEnglishName("");
    setGovernorateArabicName("");
    // Reset district inputs
    setDistrictCode("");
    setDistrictEnglishName("");
    setDistrictArabicName("");
    // Reset city inputs
    setCityCode("");
    setCityEnglishName("");
    setCityArabicName("");
  };

  const handleCancel = () => {
    // Reset form values
    resetForm();
    // Close modal
    setModalType(null);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{`Add ${
          modalType.charAt(0).toUpperCase() + modalType.slice(1)
        }`}</h2>
        <form onSubmit={handleSubmit}>
          {/* Inputs for governorate */}
          {modalType === "governorate" && (
            <>
              <label htmlFor="governorateCode">Governorate Code:</label>
              <input
                type="text"
                id="governorateCode"
                value={governorateCode}
                onChange={(e) => setGovernorateCode(e.target.value)}
              />
              <label htmlFor="governorateName">
                Governorate Name (English):
              </label>
              <input
                type="text"
                id="governorateName"
                value={governorateEnglishName}
                onChange={(e) => setGovernorateEnglishName(e.target.value)}
              />
              <label htmlFor="governorateNameAr">
                Governorate Name (Arabic):
              </label>
              <input
                type="text"
                id="governorateNameAr"
                value={governorateArabicName}
                onChange={(e) => setGovernorateArabicName(e.target.value)}
              />
            </>
          )}
          {/* Inputs for district */}
          {modalType === "district" && (
            <>
              <label htmlFor="districtCode">District Code:</label>
              <input
                type="text"
                id="districtCode"
                value={districtCode}
                onChange={(e) => setDistrictCode(e.target.value)}
              />
              <label htmlFor="districtName">District Name (English):</label>
              <input
                type="text"
                id="districtName"
                value={districtEnglishName}
                onChange={(e) => setDistrictEnglishName(e.target.value)}
              />
              <label htmlFor="districtNameAr">District Name (Arabic):</label>
              <input
                type="text"
                id="districtNameAr"
                value={districtArabicName}
                onChange={(e) => setDistrictArabicName(e.target.value)}
              />
            </>
          )}
          {/* Inputs for city */}
          {modalType === "city" && (
            <>
              <label htmlFor="cityCode">City Code:</label>
              <input
                type="text"
                id="cityCode"
                value={cityCode}
                onChange={(e) => setCityCode(e.target.value)}
              />
              <label htmlFor="cityName">City Name (English):</label>
              <input
                type="text"
                id="cityName"
                value={cityEnglishName}
                onChange={(e) => setCityEnglishName(e.target.value)}
              />
              <label htmlFor="cityNameAr">City Name (Arabic):</label>
              <input
                type="text"
                id="cityNameAr"
                value={cityArabicName}
                onChange={(e) => setCityArabicName(e.target.value)}
              />
            </>
          )}
          <div className="modal-actions">
            <button type="submit">Submit</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
