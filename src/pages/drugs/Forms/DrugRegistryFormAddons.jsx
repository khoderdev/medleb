import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

const DrugRegistryFormAddons = ({ handleInputChange, formDataStep11 }) => {
  return (
    <>
      <div className="col-span-1 flex w-full sm:w-[80em] h-full flex-col sm:col-span-1 text-black-text dark:text-white-text">
        <h1 className="pb-4 pt-4 text-center text-lg sm:py-10 sm:text-xl font-medium">
          2 - Drug Registry Additional Info
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="input-container flex flex-col">
            <label
              htmlFor="productDesc"
              className="labels text-md block text-left"
            >
              Product Description
            </label>
            <textarea
              id="productDesc"
              name="productDesc"
              type="text"
              value={formDataStep11.productDesc}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="activeInactiveIngredients"
              name="activeInactiveIngredients"
              type="text"
              value={formDataStep11.activeInactiveIngredients}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="indications"
              name="indications"
              type="text"
              value={formDataStep11.indications}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="posology"
              name="posology"
              type="text"
              value={formDataStep11.posology}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="methodOfAdministration"
              name="methodOfAdministration"
              type="text"
              value={formDataStep11.methodOfAdministration}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="contraindications"
              name="contraindications"
              type="text"
              value={formDataStep11.contraindications}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="precautionsForUse"
              name="precautionsForUse"
              type="text"
              value={formDataStep11.precautionsForUse}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="effectsOnFGN"
              name="effectsOnFGN"
              type="text"
              value={formDataStep11.effectsOnFGN}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="sideEffects"
              name="sideEffects"
              type="text"
              value={formDataStep11.sideEffects}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="toxicity"
              name="toxicity"
              type="text"
              value={formDataStep11.toxicity}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
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
            <textarea
              id="storageConditions"
              name="storageConditions"
              type="text"
              value={formDataStep11.storageConditions}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
              placeholde
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
            <textarea
              id="shelfLife"
              name="shelfLife"
              type="text"
              value={formDataStep11.shelfLife}
              onChange={(e) => handleInputChange(e)}
              className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
              style={{
                resize: "none",
                overflow: "auto",
                height: "70px",
              }}
              placeholder=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DrugRegistryFormAddons;
