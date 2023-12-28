import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { format } from "date-fns";

const currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

const schema = yup.object().shape({
  code: yup
    .string()
    .required("Code is required")
    .matches(/^\d{1,3}$/, "Code must be up to 3 digits"),
  levelName: yup.string().required("Level Name is required"),
  levelNameAr: yup
    .string()
    .matches(
      /^[\u0621-\u064A\s]*$/,
      "Please use Arabic letters (أ ب ت) for the Level Name (Arabic)"
    )
    .required("Level Name (Arabic) is required"),
  atcrelatedLabel: yup.string().required("ATC Related Label is required"),
  enabled: yup.boolean().required("Enabled is required"),
});

const ATCForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    levelName: "",
    levelNameAr: "",
    atcrelatedLabel: "",
    enabled: true,
    updatedDate: new Date().toISOString(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data against the schema
      await schema.validate(formData, { abortEarly: false });

      const newGuid = uuidv4();

      const response = await axios.post("http://localhost:3030/api/atc/v1.0", {
        guid: newGuid,
        updatedDate: currentDate,
        createdBy: "Tonai",
        updatedBy: "Tonai",
        ...formData,
      });

      console.log("ATC data submitted successfully:", response.data);

      setFormData({
        code: "",
        levelName: "",
        levelNameAr: "",
        atcrelatedLabel: "",
        enabled: true,
      });

      toast.success("ATC data submitted successfully.");
    } catch (error) {
      // Check if the error is a validation error
      if (error.name === "ValidationError") {
        // Display validation errors using toast
        error.errors.forEach((validationError) => {
          toast.error(validationError);
        });
      } else {
        console.error("Error submitting ATC data:", error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-md"
      >
        <label className="block mb-2">
          Code:
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          Level Name:
          <input
            type="text"
            name="levelName"
            value={formData.levelName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          Level Name (Arabic):
          <input
            type="text"
            name="levelNameAr"
            value={formData.levelNameAr}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          ATC Related Label:
          <input
            type="text"
            name="atcrelatedLabel"
            value={formData.atcrelatedLabel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="checkbox checkbox-secondary block mb-2">
          Enabled:
          <input
            type="checkbox"
            name="enabled"
            checked={formData.enabled}
            onChange={handleChange}
          />
        </label>

        <label className="hidden mb-2">
          Updated Date:
          <input
            hidden
            type="datetime-local"
            name="updatedDate"
            value={formData.updatedDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="hidden mb-2 ">
          Created By:
          <input
            hidden
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="hidden mb-2">
          Updated By:
          <input
            hidden
            type="text"
            name="updatedBy"
            value={formData.updatedBy}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <button type="submit" className="btn btn-accent btn-outline ">
          Submit
        </button>
      </form>
      {/* Toast container for displaying messages */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ATCForm;
