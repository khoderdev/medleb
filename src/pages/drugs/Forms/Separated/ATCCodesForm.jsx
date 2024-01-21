// ATCCodesForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const schema = yup.object().shape({
  atcGuid: yup.string().required("ATC Guid is required"),
  code: yup.string().required("Code is required"),
  levelName: yup.string().required("Level Name is required"),
  levelNameAr: yup
    .string()
    .matches(
      /^[\u0621-\u064A\s]*$/,
      "Please use Arabic letters (أ ب ت) for the Level Name (Arabic)"
    )
    .required("Level Name (Arabic) is required"),
  levelNumber: yup.number().required("Level Number is required"),
  substanceName: yup.string().required("Substance Name is required"),
  atcingredientName: yup.string().required("ATC Ingredient Name is required"),
  atcingredientNameAr: yup
    .string()
    .matches(
      /^[\u0621-\u064A\s]*$/,
      "Please use Arabic letters (أ ب ت) for the ATC Ingredient Name (Arabic)"
    )
    .required("ATC Ingredient Name (Arabic) is required"),
  interactionIngredientName: yup
    .string()
    .required("Interaction Ingredient Name is required"),
  enabled: yup.boolean().required("Enabled is required"),
  createdDate: yup.date().required("Created Date is required"),
});

const ATCCodesForm = () => {
  const [formData, setFormData] = useState({
    guid: "",
    code: "",
    levelName: "",
    levelNameAr: "",
    atcrelatedLabel: "",
    enabled: true,
    createdDate: new Date().toISOString(),
    updatedDate: new Date().toISOString(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data against the schema
      await schema.validate(formData, { abortEarly: false });

      const newGuid = uuidv4();

      const response = await axios.post(
        "http://85.112.70.8:3010/api/atccodes/v1.0",
        { ...formData, guid: newGuid }
      );

      console.log("ATC Codes data submitted successfully:", response.data);

      setFormData({
        guid: "",
        atcGuid: "",
        code: "",
        levelName: "",
        levelNameAr: "",
        levelNumber: 0,
        substanceName: "",
        atcingredientName: "",
        atcingredientNameAr: "",
        interactionIngredientName: "",
        enabled: true,
        createdDate: new Date().toISOString(),
      });

      toast.success("ATC Codes data submitted successfully.");
    } catch (error) {
      // Check if the error is a validation error
      if (error.name === "ValidationError") {
        // Display validation errors using toast
        error.errors.forEach((validationError) => {
          toast.error(validationError);
        });
      } else {
        console.error("Error submitting ATC Codes data:", error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Exclude createdDate and updatedDate from being updated in the state
    if (name !== "createdDate" && name !== "updatedDate") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-md"
      >
        <label className="block mb-2">
          ATC Guid:
          <input
            type="text"
            name="atcGuid"
            value={formData.atcGuid}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

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
          Level Number:
          <input
            type="number"
            name="levelNumber"
            value={formData.levelNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          Substance Name:
          <input
            type="text"
            name="substanceName"
            value={formData.substanceName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          ATC Ingredient Name:
          <input
            type="text"
            name="atcingredientName"
            value={formData.atcingredientName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          ATC Ingredient Name (Arabic):
          <input
            type="text"
            name="atcingredientNameAr"
            value={formData.atcingredientNameAr}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          Interaction Ingredient Name:
          <input
            type="text"
            name="interactionIngredientName"
            value={formData.interactionIngredientName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          Enabled:
          <input
            type="checkbox"
            name="enabled"
            checked={formData.enabled}
            onChange={handleChange}
          />
        </label>

        <label className="hidden mb-2">
          Created Date:
          <input
            type="text"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            readOnly
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
      {/* Toast container for displaying messages */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ATCCodesForm;
