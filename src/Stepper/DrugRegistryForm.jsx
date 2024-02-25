import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import AddModal from "../../../components/Modals/AddModal";
import EditModal from "../../../components/Modals/EditModal";
import { useStepperContext } from "../../../Stepper/StepperContext";

const DrugRegistryForm = () => {
  const { formData, handleInputChange, priceUSD, priceLBP, currencySymbols } =
    useStepperContext();
  const [selectedInput, setSelectedInput] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");

  const openAddModal = (inputName) => {
    setSelectedInput(inputName);
    setAddModalOpen(true);
  };

  const openEditModal = (inputName, initialValue) => {
    setSelectedInput(inputName);
    setEditInputValue(initialValue);
    setEditModalOpen(true);
  };

  const handleAdd = (value) => {
    console.log(`Added new ${selectedInput}:`, value);
    setAddModalOpen(false);
  };

  const handleEdit = (value) => {
    console.log(`Edited ${selectedInput}:`, value);
    setEditModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Modal cancelled");
    setAddModalOpen(false);
    setEditModalOpen(false);
  };

  const getTitle = (inputName) => {
    return `Add new ${addSpacesToInputName(inputName)}`;
  };

  const inputOptions = {
    Type: [
      "Brand",
      "Generic",
      "Biological: Bio - Human",
      "Biological: Bio - Similar",
    ],
    ResponsibleParty: [
      "Leo Pharma A/S",
      "Bayer Hispania",
      "Abbvie Ltd",
      "Ferring GmbH",
    ],
    // Add more inputs and their options as needed
    ResponsiblePartyCountry: [
      "France",
      "Spain",
      "USA",
      "Sweden",
      "Lebanon",
      // Add more countries as needed
    ],
    ManufacturerName: [
      "Leo Pharma A/S",
      "Bayer Hispania",
      "Abbvie Ltd",
      "Ferring GmbH",
      // Add more manufacturers as needed
    ],
    ManufacturerCountry: [
      "France",
      "Spain",
      "USA",
      "Sweden",
      "Lebanon",
      // Add more countries as needed
    ],
    CargoAndShippingTerms: ["CIF", "FOB"],
    // Add more inputs and their options as needed
  };

  function addSpacesToInputName(inputName) {
    // Convert camelCase or PascalCase to readable format
    const spacedName = inputName.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Capitalize the first letter
    return spacedName.charAt(0).toUpperCase() + spacedName.slice(1);
  }

  const inputName = "responsiblePartyCountry";

  return (
    <>
      <div className="col-span-1 flex flex-col w-full sm:w-[80em] h-full sm:col-span-1 text-black-text dark:text-white-text justify-center p-6">
        <h1 className="pb-2 pt-2 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
          1 - Drug Registry Informations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 pt-6">
          {Object.keys(inputOptions).map((inputName) => (
            <div key={inputName} className="input-container relative">
              <div className="label-btn-container flex justify-between items-center">
                <label
                  htmlFor={inputName}
                  className="labels text-md block text-left"
                >
                  {addSpacesToInputName(inputName)}
                </label>
                <div className="btns-cont flex">
                  <button
                    onClick={() => openAddModal(inputName)}
                    type="button"
                    className="rounded-xl bg-transparent p-2 text-green-pri focus:border-[#00a651] focus:outline-none focus:ring-1"
                  >
                    Add
                  </button>
                  {formData[inputName] && (
                    <button
                      onClick={() =>
                        openEditModal(inputName, formData[inputName])
                      }
                      type="button"
                      className="rounded-xl bg-transparent p-2 text-green-pri focus:border-[#00a651] focus:outline-none focus:ring-1"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
              <select
                name={inputName}
                value={formData[inputName] || ""}
                onChange={handleInputChange}
                // onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              >
                <option disabled value="">
                  Select an option
                </option>
                {inputOptions[inputName].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div className="input-container relative">
            <label
              htmlFor="BrandName"
              className="labels text-md block text-left"
            >
              Drug Name
            </label>
            <input
              name="BrandName"
              value={formData.BrandName}
              onChange={handleInputChange}
              // onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="name"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="inline-">
              <label
                htmlFor="PriceFOREIGN"
                className="labels text-md block text-left"
              >
                Foreign Price
              </label>
              <input
                name="PriceFOREIGN"
                type="number"
                value={formData.PriceFOREIGN}
                onChange={handleInputChange}
              />

              <select
                name="currencyForeign"
                // className="w-fit h-10"
                value={formData.currencyForeign}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select currency
                </option>
                {/* Iterate over currencySymbols to generate options */}
                {Object.entries(currencySymbols).map(([currency, symbol]) => (
                  <option key={currency} value={currency}>
                    {`${symbol} ${currency}`}{" "}
                    {/* Display symbol and currency code */}
                  </option>
                ))}
              </select>
            </div>

            {/* Converted price inputs */}
            <div className="input-container flex">
              <label className="labels text-md block text-left">
                Foreign Price in USD
                <input
                  name="PriceUSD"
                  value={priceUSD}
                  readOnly /* Make the input read-only */
                />
              </label>

              <label className="labels text-md block text-left">
                Foreign Price in LBP
                <input name="PriceLBP" value={priceLBP} readOnly />
              </label>
            </div>
          </div>

          <div className="input-container relative">
            <label
              htmlFor="RegistrationNumber"
              className="labels text-md block text-left"
            >
              Registration Number
            </label>
            <input
              name="RegistrationNumber"
              value={formData.RegistrationNumber}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="reg #"
            />
          </div>

          {/* Text Input 2 */}
          <div className="input-container relative">
            <label htmlFor="MOHCode" className="labels text-md block text-left">
              MOH Code
            </label>
            <input
              name="MOHCode"
              value={formData.MOHCode}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="code"
            />
          </div>

          {/* Date Input 1 */}
          <div className="input-container relative">
            <label
              htmlFor="RegistrationDate"
              className="labels text-md block text-left"
            >
              Registration Date
              <div className="relative mt-1">
                <input
                  name="RegistrationDate"
                  value={formData.RegistrationDate}
                  onChange={(e) => handleInputChange(e)}
                  type="date"
                  id="RegistrationDate"
                  className="dateInput mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                />
              </div>
            </label>
          </div>

          {/* Date Input 2 */}
          <div className="input-container relative">
            <label
              htmlFor="ReviewDate"
              className="labels text-md block text-left"
            >
              Review Date
            </label>
            <div className="relative mt-1">
              <input
                value={formData.ReviewDate}
                onChange={(e) => handleInputChange(e)}
                type="date"
                id="ReviewDate"
                name="ReviewDate"
                className="dateInput mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              />
            </div>
          </div>

          {isAddModalOpen && (
            <AddModal
              closeModal={() => setAddModalOpen(false)}
              title={getTitle(addSpacesToInputName(selectedInput))}
              onAdd={handleAdd}
              onCancel={handleCancel}
            />
          )}

          {isEditModalOpen && (
            <EditModal
              closeModal={() => setEditModalOpen(false)}
              title={getTitle(addSpacesToInputName(selectedInput))}
              onEdit={handleEdit}
              onCancel={handleCancel}
              initialValue={editInputValue}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DrugRegistryForm;

// // //////////////////////////////////////////////////
// // //////////////////////////////////////////////////
// // //////////////////////////////////////////////////
