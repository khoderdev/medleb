/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

function DrugSubstanceInformationsForm({
  formDataStep3,
  formDataStep2,
  handleInputChange,
}) {
  // const { formDataStep2, handleInputChange } = props;

  return (
    <>
      <div className="col-span- flex w-[100%] flex-col sm:col-span-1">
        <h1 className="pb-2 pt-4 text-center text-xl sm:py-10 sm:text-2xl ">
          2- Drug substance and finished product quality information
        </h1>

        <div className=" flex h-full w-full flex-col">
          <form className="grid grid-cols-1 items-center gap-10 dark:text-gray-200 sm:grid-cols-2 sm:justify-items-center md:grid-cols-2 lg:grid-cols-3">
            <div className="input-container py- relative mt-8">
              <label
                htmlFor="ingredientsAndstrength"
                className="labels text-md block text-left"
              >
                Ingredients & Strength
              </label>
              <input
                value={formDataStep2.ingredientsAndstrength}
                onChange={(e) => handleInputChange("ingredientsAndstrength", e.target.value)}
                className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
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
                value={formDataStep2.form}
                onChange={(e) => handleInputChange("form", e.target.value)}
                className="mt-1 w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
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
                value={formDataStep2.primaryContainerPackage}
                onChange={(e) =>
                  handleInputChange("primaryContainerPackage", e.target.value)
                }
                className="mt-1 w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
                placeholder="container / package"
              />
            </div>

            <div className="input-container">
              <label
                htmlFor="manufacturer"
                className="labels text-md mt-4 block text-left"
              >
                Manufacturer
              </label>
              <input
                disabled
                value={formDataStep2.manufacturer}
                onChange={(e) =>
                  handleInputChange("manufacturer", e.target.value)
                }
                className="mt-1 w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
                placeholder="manufacturer"
              />
            </div>

            <div className="input-container">
              <label
                htmlFor="manufacturerCountry"
                className="labels text-md mt-4 block text-left"
              >
                Manufacturing Country
              </label>
              <input
                disabled
                value={formDataStep2.manufacturerCountry}
                onChange={(e) =>
                  handleInputChange("manufacturerCountry", e.target.value)
                }
                className="mt-1 w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
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
                value={formDataStep2.agent}
                onChange={(e) => handleInputChange("agent", e.target.value)}
                className="mt-1 w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
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
              <label
                htmlFor="atcCode"
                className="labels text-md block text-left"
              >
                ATC Code
              </label>
              <input
                value={formDataStep2.atcCode}
                onChange={(e) => handleInputChange("atcCode", e.target.value)}
                className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
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
                disabled
                value={formDataStep2.atcRelatedIngredients}
                onChange={(e) =>
                  handleInputChange("atcRelatedIngredients", e.target.value)
                }
                className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
                placeholder="enter a value"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DrugSubstanceInformationsForm;
