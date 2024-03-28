import React from "react";

function DrugSubstanceInformationsForm({ formDataStep2, handleInputChange }) {
  return (
    <div className="col-span-1 flex flex-col w-full sm:w-[80em] h-full sm:col-span-1 text-black-text dark:text-white-text justify-center p-6">
      <h1 className="pb-2 pt-2 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
          4- Drug substance & finished product quality informations
        </h1>

        <form className="grid grid-cols-1 items-center gap-10 md:gap-16 sm:grid-cols-2 sm:justify-items-center md:grid-cols-2 lg:grid-cols-3">
          <div className="input-container py- relative mt-4">
            <label
              htmlFor="ingredientsAndstrength"
              className="labels text-md block text-left"
            >
              Ingredients & Strength
            </label>
            <input
              name="ingredientsAndstrength"
              value={formDataStep2.ingredientsAndstrength}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="enter a value"
            />
          </div>

          {/* Add more fields following the same pattern */}

          <div className="input-container">
            <label
              htmlFor="form"
              className="labels text-md mt-4 block text-left"
            >
              Form
            </label>
            <input
              name="form"
              value={formDataStep2.form}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="drug form"
            />
          </div>

          <div className="input-container">
            <label
              htmlFor="primaryContainerPackage"
              className="labels text-md mt-4 block text-left"
            >
              Primary container / Package
            </label>
            <input
              name="primaryContainerPackage"
              value={formDataStep2.primaryContainerPackage}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="container / package"
            />
          </div>

          <div className="input-container">
            <label
              htmlFor="ManufacturerGuid"
              className="labels text-md mt-4 block text-left"
            >
              ManufacturerGuid
            </label>
            <input
              name="ManufacturerGuid"
              disabled
              value={formDataStep2.ManufacturerGuid}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder=""
            />
          </div>

          <div className="input-container">
            <label
              htmlFor="manufacturingCountry"
              className="labels text-md mt-4 block text-left"
            >
              Manufacturing Country
            </label>
            <input
              name="manufacturingCountry"
              disabled
              value={formDataStep2.manufacturingCountry}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder="Country"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="agent"
              className="labels text-md mt-4 block text-left"
            >
              Agent
            </label>
            <select
              name="agent"
              value={formDataStep2.agent}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full cursor-pointer border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
            >
              <option selected disabled value="">
                select an agent
              </option>
              <option value="Omnipharma"> Omnipharma </option>
              <option value="Pharmaline"> Pharmaline </option>
              <option value="Benta SAL"> Benta SAL </option>
              <option value="Mersaco"> Mersaco </option>
            </select>
          </div>

          <div className="input-container mt-4 w-full">
            <label htmlFor="atcCode" className="labels text-md block text-left">
              ATC Code
            </label>
            <input
              name="atcCode"
              value={formDataStep2.atcCode}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              autoComplete="off"
              placeholder="enter a value"
            />
          </div>

          <div className="input-container mt-4 w-full">
            <label
              htmlFor="atcRelatedIngredients"
              className="labels text-md block text-left"
            >
              ATC related ingredients
            </label>
            <input
              name="atcRelatedIngredients"
              disabled
              value={formDataStep2.atcRelatedIngredients}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              type="text"
              placeholder="enter a value"
            />
          </div>
        </form>
      </div>
  );
}

export default DrugSubstanceInformationsForm;
