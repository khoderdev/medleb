import React, { useState } from "react";
import { useCurrenciesContext } from "./CurrenciesContext";
import { v4 as uuidv4 } from "uuid";

const CurrencyForm = ({ onClose }) => {
  const { addCurrency } = useCurrenciesContext();
  const [formData, setFormData] = useState({
    guid: uuidv4(),
    code: "",
    name: "",
    nameAr: "",
    enabled: true,
    createdDate: new Date().toISOString(),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const newCurrency = {
        ...formData,
      };
      await addCurrency(newCurrency, () => {
        setCurrencies((prevCurrencies) => [...prevCurrencies, newCurrency]);
      });
      setFormData({
        guid: uuidv4(),
        code: "",
        name: "",
        nameAr: "",
        enabled: true,
        createdDate: new Date().toISOString(),
      });
      onClose();
    } catch (error) {
    //   console.error("Failed to add currency:", error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       setIsSubmitting(true);
  //       await addCurrency({
  //         ...formData,
  //       });
  //       setFormData({
  //         guid: uuidv4(),
  //         code: "",
  //         name: "",
  //         nameAr: "",
  //         enabled: true,
  //         createdDate: new Date().toISOString(),
  //       });
  //       onClose();
  //     } catch (error) {
  //       console.error("Failed to add currency:", error);
  //       // Handle error
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  return (
    <div className="w-full md:max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        // className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="code"
          >
            Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="code"
            placeholder="Code"
            value={formData.code}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nameAr"
          >
            Name Arabic
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="nameAr"
            placeholder="Name Arabic"
            value={formData.nameAr}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="med-btn-sec-sm"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {/* {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
    </div>
  );
};

export default CurrencyForm;
