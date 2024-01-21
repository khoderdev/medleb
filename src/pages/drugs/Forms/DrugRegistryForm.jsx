import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import AddModal from "../../../components/Modals/AddModal";
import EditModal from "../../../components/Modals/EditModal";

const exchangeRates = {
  USD: 1,
  CAD: 0.72,
  EUR: 1.06,
  CHF: 1.11,
  DKK: 0.72,
  GBP: 1.21,
  SAR: 0.27,
  JOD: 1.41,
  LBP: 900,
};

const currencySymbols = {
  USD: "$",
  CAD: "C$",
  EUR: "€",
  CHF: "CHF",
  DKK: "kr",
  GBP: "£",
  SAR: "SAR",
  JOD: "JD",
  LBP: "LBP",
};

const DrugRegistryForm = ({
  handleInputChange,
  formDataStep1,
  handleChildArrowButtonClick,
}) => {
  const [selectedInput, setSelectedInput] = useState("");
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");

  function convertToUSD() {
    if (
      formDataStep1 &&
      formDataStep1.priceForeign &&
      formDataStep1.currencyForeign
    ) {
      const convertedPrice =
        formDataStep1.priceForeign /
        exchangeRates[formDataStep1.currencyForeign];
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return "";
  }

  function convertToLBP() {
    if (
      formDataStep1 &&
      formDataStep1.priceForeign &&
      formDataStep1.currencyForeign
    ) {
      const priceInUSD = convertToUSD();
      const convertedPrice =
        (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
      return convertedPrice.toFixed(2);
    }
    return "";
  }

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
    type: [
      "Brand",
      "Generic",
      "Biological: Bio - Human",
      "Biological: Bio - Similar",
    ],
    responsibleParty: [
      "Leo Pharma A/S",
      "Bayer Hispania",
      "Abbvie Ltd",
      "Ferring GmbH",
    ],
    // Add more inputs and their options as needed
    responsiblePartyCountry: [
      "France",
      "Spain",
      "USA",
      "Sweden",
      "Lebanon",
      // Add more countries as needed
    ],
    manufacturer: [
      "Leo Pharma A/S",
      "Bayer Hispania",
      "Abbvie Ltd",
      "Ferring GmbH",
      // Add more manufacturers as needed
    ],
    manufacturingCountry: [
      "France",
      "Spain",
      "USA",
      "Sweden",
      "Lebanon",
      // Add more countries as needed
    ],
    cargoShippingTerms: ["CIF", "FOB"],
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
                  {formDataStep1[inputName] && (
                    <button
                      onClick={() =>
                        openEditModal(inputName, formDataStep1[inputName])
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
                value={formDataStep1[inputName] || ""}
                onChange={(e) => handleInputChange(e)}
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
              htmlFor="drugName"
              className="labels text-md block text-left"
            >
              Drug Name
            </label>
            <input
              name="drugName"
              value={formDataStep1.drugName}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="name"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="priceForeign"
              className="labels text-md mb-2 block text-left"
            >
              Foreign Price
            </label>
            <div className="relative" style={{ borderColor: "transparent" }}>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-bold">
                <span className="text-green-pri">
                  {currencySymbols[formDataStep1.currencyForeign]}
                </span>
              </div>
              <input
                name="priceForeign"
                type="number"
                id="price"
                className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-12 py-2 font-semibold shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                placeholder="0.00"
                autoComplete="off"
                value={formDataStep1?.priceForeign}
                onChange={(e) => handleInputChange(e)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currencyForeign" className="sr-only ">
                  Foreign Currency
                </label>
                <select
                  id="currency"
                  name="currencyForeign"
                  className="w-20 cursor-pointer appearance-none rounded-r-full border border-[#00a65100] dark:border-black-border bg-white-fg dark:bg-black-fg  py-2 font-normal shadow outline-none focus:border-green-pri focus:outline-none focus:ring-1 focus:ring-green-pri dark:focus:ring-1 dark:focus:ring-green-pri sm:w-20"
                  onChange={(e) => handleInputChange(e)}
                  value={formDataStep1.currencyForeign}
                >
                  {Object.keys(exchangeRates).map((currencyForeign) => (
                    <option key={currencyForeign} value={currencyForeign}>
                      {currencyForeign}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="input-container relative">
            <label className="labels text-md block text-left">
              Foreign Price in USD
            </label>
            <input
              name="convertToUSD"
              disabled
              className="converted-price-usd mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-semibold shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              value={" " + convertToUSD()}
            />
          </div>
          <div className="input-container relative">
            <label className="labels text-md block text-left">
              Foreign Price in LBP
            </label>
            <input
              name="convertToLBP"
              disabled
              className="converted-price-usd mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-semibold shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              value={
                " " +
                (() => {
                  const convertedValue = convertToLBP();
                  // console.log("Converted Value:", convertedValue);

                  const numericValue = parseFloat(
                    convertedValue.replace(".", "")
                  );
                  // console.log("Numeric Value:", numericValue);

                  if (!isNaN(numericValue) && isFinite(numericValue)) {
                    const formattedValue = numericValue.toLocaleString("en-LB");
                    // console.log("Formatted Value:", formattedValue);
                    return formattedValue;
                  } else {
                    return "";
                  }
                })()
              }
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="registrationNumber"
              className="labels text-md block text-left"
            >
              Registration Number
            </label>
            <input
              name="registrationNumber"
              value={formDataStep1.registrationNumber}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="reg #"
            />
          </div>

          {/* Text Input 2 */}
          <div className="input-container relative">
            <label htmlFor="mohCode" className="labels text-md block text-left">
              MOH Code
            </label>
            <input
              name="mohCode"
              value={formDataStep1.mohCode}
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
              htmlFor="registrationDate"
              className="labels text-md block text-left"
            >
              Registration Date
              <div className="relative mt-1">
                <input
                  name="registrationDate"
                  value={formDataStep1.registrationDate}
                  onChange={(e) => handleInputChange(e)}
                  type="date"
                  id="registrationDate"
                  className="dateInput mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                />
              </div>
            </label>
          </div>

          {/* Date Input 2 */}
          <div className="input-container relative">
            <label
              htmlFor="reviewDate"
              className="labels text-md block text-left"
            >
              Review Date
            </label>
            <div className="relative mt-1">
              <input
                value={formDataStep1.reviewDate}
                onChange={(e) => handleInputChange(e)}
                type="date"
                id="reviewDate"
                name="reviewDate"
                className="dateInput mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              />
            </div>
          </div>

          <div className="input-container h-16 relative flex flex-col justify-between items-center col-span-full lg:col-span-1">
            <label
              htmlFor="continue"
              className="labels text-md block text-left"
            >
              Continue to upload the images
            </label>
            <div className="relative">
              <div className="flex items-center">
                <FaArrowRightLong
                  className="text-green-pri cursor-pointer hover:text-green-pri transition-transform transform-gpu animate-slide-right-left"
                  style={{ fontSize: "30px" }}
                  onClick={handleChildArrowButtonClick}
                />
              </div>
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

// //////////////////////////////////////////////////
