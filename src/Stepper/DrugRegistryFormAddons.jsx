import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import { useStepperContext } from "../../../Stepper/StepperContext";

const DrugRegistryFormAddons = () => {
  const { formData, handleInputChange } = useStepperContext();
  return (
    <>
      <div className="col-span-1 flex flex-col w-full sm:w-[80em] h-full sm:col-span-1 text-black-text dark:text-white-text justify-center p-6">
        <h1 className="pb-2 pt-2 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
          2 - Drug Registry Additional Info
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 pt-6">
          <div className="input-container flex flex-col">
            <label
              htmlFor="productDesc"
              className="labels text-md block text-left"
            >
              Product Description
            </label>
            <input
              id="productDesc"
              name="productDesc"
              type="text"
              value={formData.productDesc}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="activeInactiveIngredients"
              className="labels text-md block text-left"
            >
              Active/Inactive Ingredients
            </label>
            <input
              id="activeInactiveIngredients"
              name="activeInactiveIngredients"
              type="text"
              value={formData.activeInactiveIngredients}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="indications"
              className="labels text-md block text-left"
            >
              Indications
            </label>
            <input
              id="indications"
              name="indications"
              type="text"
              value={formData.indications}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="posology"
              className="labels text-md block text-left"
            >
              Posology
            </label>
            <input
              id="posology"
              name="posology"
              type="text"
              value={formData.posology}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="methodOfAdministration"
              className="labels text-md block text-left"
            >
              Method of administration
            </label>
            <input
              id="methodOfAdministration"
              name="methodOfAdministration"
              type="text"
              value={formData.methodOfAdministration}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="contraindications"
              className="labels text-md block text-left"
            >
              Contraindications
            </label>
            <input
              id="contraindications"
              name="contraindications"
              type="text"
              value={formData.contraindications}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="precautionsForUse"
              className="labels text-md block text-left"
            >
              Precautions for use
            </label>
            <input
              id="precautionsForUse"
              name="precautionsForUse"
              type="text"
              value={formData.precautionsForUse}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="effectsOnFGN"
              className="labels text-md block text-left"
            >
              Effects on FGN
            </label>
            <input
              id="effectsOnFGN"
              name="effectsOnFGN"
              type="text"
              value={formData.effectsOnFGN}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="sideEffects"
              className="labels text-md block text-left"
            >
              Side Effects
            </label>
            <input
              id="sideEffects"
              name="sideEffects"
              type="text"
              value={formData.sideEffects}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="precautionsForUse"
              className="labels text-md block text-left"
            >
              Toxicity
            </label>
            <input
              id="toxicity"
              name="toxicity"
              type="text"
              value={formData.toxicity}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="storageConditions"
              className="labels text-md block text-left"
            >
              Storage Conditions
            </label>
            <input
              id="storageConditions"
              name="storageConditions"
              type="text"
              value={formData.storageConditions}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>

          <div className="input-container flex flex-col">
            <label
              htmlFor="shelfLife"
              className="labels text-md block text-left"
            >
              Shelf Life
            </label>
            <input
              id="shelfLife"
              name="shelfLife"
              type="text"
              value={formData.shelfLife}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DrugRegistryFormAddons;
