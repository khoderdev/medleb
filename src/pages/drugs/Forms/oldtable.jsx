/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

const dosageOptions = {
  "%": "%",
  billions: "billions",
  "billions/g": "billions/g",
  CCID50: "CCID50",
  "ELISA units/ml": "ELISA units/ml",
  g: "g",
  "g/g": "g/g",
  "g/L": "g/L",
  "mg/g": "mg/g",
  "g/ml": "g/ml",
  "IR or IC/ml": "IR or IC/ml",
  IU: "IU",
  "IU/actuation": "IU/actuation",
  "IU/drop": "IU/drop",
  "IU/g": "IU/g",
  "IU/ml": "IU/ml",
  LRU: "LRU",
  LSU: "LSU",
  mcg: "mcg",
  "mcg/dose": "mcg/dose",
  "mcg/g": "mcg/g",
  "mcg/mcg": "mcg/mcg",
  "mcg/mg": "mcg/mg",
  "mcg/ml": "mcg/ml",
  "mcl/ml": "mcl/ml",
  mg: "mg",
  MIU: "MIU",
  "MIU/ml": "MIU/ml",
  ml: "ml",
  "ml/l": "ml/l",
  "ml/ml": "ml/ml",
  PFU: "PFU",
  "U.CEIP": "U.CEIP",
  "U.CEIP/ml": "U.CEIP/ml",
  "U/ml": "U/ml",
  "units LD50": "units LD50",
};

const dosageFormOptions = {
  Cream: "Cream",
  CreamGel: "CreamGel",
  "Drops, concentrated": "Drops, concentrated",
  Elixir: "Elixir",
  Spray: "Spray",
};

const routeOptions = {
  Epidural: "Epidural",
  Epilesional: "Epilesional",
  Haemodialysis: "Haemodialysis",
  Infusion: "Infusion",
  "Peritoneal Dialysis": "Peritoneal Dialysis",
  Rectal: "Rectal",
  Respiratory: "Respiratory",
  "soft tissue injection": "soft tissue injection",
  Subcutaneous: "Subcutaneous",
  Sublingual: "Sublingual",
  Topical: "Topical",
  "Topical scalp": "Topical scalp",
  Transdermal: "Transdermal",
  Vaginal: "Vaginal",
  "Varicose vein": "Varicose vein",
};
function UnifiedDrugInformations(props) {
  const { formDataStep3, handleInputChange } = props;

  return (
    <div className="mt-6 grid w-full grid-cols-1 gap-0 md:grid-cols-2">
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 bg-gray-300 p-2 text-center text-lg">
                By the Agent
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[50%] border border-gray-400 p-2">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="input-container relative">
                    <label
                      htmlFor="type"
                      className="labels text-md block text-left"
                    >
                      Type
                    </label>
                    <select
                      disabled
                      value={formDataStep3.type}
                      className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                    >
                      <option selected disabled value="">
                        select a type
                      </option>
                      <option value="Brand">Brand</option>
                      <option value="Generic">Generic</option>
                      <option value="Biological Bio-Human">
                        Biological: Bio - Human
                      </option>
                      <option value="Biological Bio-Similar">
                        Biological: Bio - Similar
                      </option>
                    </select>
                  </div>

                  <div className="input-container relative">
                    <label
                      htmlFor="registrationNumber"
                      className="labels text-md block text-left"
                    >
                      Registration Number
                    </label>
                    <input
                      disabled // Make the first select disabled
                      value={formDataStep3.registrationNumber}
                      onChange={(e) =>
                        handleInputChange("registrationNumber", e.target.value)
                      }
                      className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="reg #"
                    />
                  </div>

                  <div className="input-container relative">
                    <label
                      htmlFor="drugName"
                      className="labels text-md block text-left"
                    >
                      Drug Name
                    </label>
                    <input
                      disabled // Make the first select disabled
                      value={formDataStep3.drugName}
                      onChange={(e) =>
                        handleInputChange("drugName", e.target.value)
                      }
                      className="w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="name"
                    />
                  </div>
                </div>

                <div className="inputs-container grid w-full grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-2 ">
                  <div className="input-container relative mt-5 w-full">
                    <label
                      htmlFor="atcRelatedIngredients"
                      className="labels text-md block text-left"
                    >
                      ATC related ingredients
                    </label>
                    <input
                      disabled
                      value={formDataStep3.atcRelatedIngredients}
                      onChange={(e) =>
                        handleInputChange(
                          "atcRelatedIngredients",
                          e.target.value
                        )
                      }
                      className="w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="enter a value"
                    />
                  </div>

                  <div className="input-container mt-5 w-full">
                    <label
                      htmlFor="atc"
                      className="labels text-md block text-left"
                    >
                      ATC Code
                    </label>
                    <input
                      disabled
                      value={formDataStep3.atc}
                      onChange={(e) => handleInputChange("atc", e.target.value)}
                      className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="enter a value"
                    />
                  </div>
                </div>

                <div className="input-container mt-5">
                  <label
                    htmlFor="ingredientsAndstrength"
                    className="labels text-md block text-left"
                  >
                    Ingredients & Strength
                  </label>
                  <input
                    disabled
                    value={formDataStep3.ingredientsAndstrength}
                    onChange={(e) =>
                      handleInputChange(
                        "ingredientsAndstrength",
                        e.target.value
                      )
                    }
                    className="w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                    type="text"
                    placeholder="enter a value"
                  />
                </div>

                <div className="input-container mt-5">
                  <label
                    htmlFor="form"
                    className="labels text-md block text-left"
                  >
                    Form
                  </label>
                  <input
                    disabled
                    value={formDataStep3.form}
                    onChange={(e) => handleInputChange("form", e.target.value)}
                    className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                    type="text"
                    placeholder="drug form"
                  />
                </div>

                <div className="input-container relative mt-5">
                  <label
                    htmlFor="primaryContainerPackage"
                    className="labels text-md block text-left"
                  >
                    Primary container / Package
                  </label>
                  <input
                    disabled
                    value={formDataStep3.primaryContainerPackage}
                    onChange={(e) =>
                      handleInputChange(
                        "primaryContainerPackage",
                        e.target.value
                      )
                    }
                    className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                    type="text"
                    placeholder="container / package"
                  />
                </div>
                {/* </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ************************************************************************************************************************************ */}

      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 bg-gray-300 p-2 text-center text-lg">
                By the IED
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[50%] border border-gray-400 p-2">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="input-container relative">
                    <label
                      htmlFor="type"
                      className="labels text-md block text-left"
                    >
                      Type
                    </label>
                    <select
                      value={formDataStep3.type}
                      onChange={(e) => {
                        handleInputChange("type", e.target.value);
                      }}
                      className="w-full cursor-pointer appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                    >
                      <option selected disabled value="">
                        select a type
                      </option>
                      <option value="Brand">Brand</option>
                      <option value="Generic">Generic</option>
                      <option value="Biological Bio-Human">
                        Biological: Bio - Human
                      </option>
                      <option value="Biological Bio-Similar">
                        Biological: Bio - Similar
                      </option>
                    </select>
                  </div>

                  <div className="input-container relative">
                    <label
                      htmlFor="registrationNumber"
                      className="labels text-md block text-left"
                    >
                      Registration Number
                    </label>
                    <input
                      value={formDataStep3.registrationNumber}
                      onChange={(e) =>
                        handleInputChange("registrationNumber", e.target.value)
                      }
                      className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="reg #"
                    />
                  </div>

                  <div className="input-container">
                    <label
                      htmlFor="drugName"
                      className="labels text-md block text-left"
                    >
                      Drug Name
                    </label>
                    <input
                      value={formDataStep3.drugName}
                      onChange={(e) =>
                        handleInputChange("drugName", e.target.value)
                      }
                      className="w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="name"
                    />
                  </div>
                </div>
                <div className="inputs-container grid w-full grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-2">
                  <div className="input-container mt-5 w-full lg:w-56">
                    <label
                      htmlFor="atcRelatedIngredients"
                      className="labels text-md block text-left"
                    >
                      ATC related ingredients
                    </label>
                    <input
                      value={formDataStep3.atcRelatedIngredients}
                      onChange={(e) =>
                        handleInputChange(
                          "atcRelatedIngredients",
                          e.target.value
                        )
                      }
                      className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="enter a value"
                    />
                  </div>

                  <div className="input-container mt-5 w-full lg:w-56">
                    <label
                      htmlFor="atc"
                      className="labels text-md block text-left"
                    >
                      ATC Code
                    </label>
                    <input
                      value={formDataStep3.atc}
                      onChange={(e) => handleInputChange("atc", e.target.value)}
                      className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                      type="text"
                      placeholder="enter a value"
                    />
                  </div>

                  <div className="flex w-full items-center justify-between">
                    <label
                      htmlFor="dosageValueN"
                      className="labels text-md mb-2 block text-left"
                    >
                      Dosage value (N)
                    </label>
                    <label
                      htmlFor="dosageUnit"
                      className="labels text-md mb-2 block pr-2 text-left"
                    >
                      Unit
                    </label>
                  </div>

                  <div
                    className="relative"
                    style={{ borderColor: "transparent" }}
                  >
                    <input
                      type="number"
                      name="dosageValueN"
                      id="dosageValueN"
                      className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                      placeholder="0"
                      value={formDataStep3?.dosageValueN}
                      onChange={(e) => e.target.value}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <select
                        id="dosageUnit"
                        name="dosageUnit"
                        className="w-28 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white/10 p-2 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                        onChange={(e) => e.target.value}
                        value={formDataStep3.dosageUnit}
                      >
                        <option selected disabled value="">
                          Select a unit
                        </option>
                        {Object.keys(dosageOptions).map((dosageUnit) => (
                          <option key={dosageUnit} value={dosageUnit}>
                            {dosageUnit}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="input-container w-full">
                    <div className="flex w-full items-center justify-between">
                      <label
                        htmlFor="dosageUnitForm"
                        className="labels text-md block text-left"
                      >
                        Value (D)
                      </label>

                      <div className="checkbox ml-28 mt-2 flex items-center justify-center md:ml-20">
                        <label htmlFor="dosageUnit" className="text-md">
                          Unit
                        </label>
                      </div>

                      <div className="btn-cont mt-2">
                        <button
                          type="button"
                          className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                        >
                          Add
                        </button>
                      </div>
                      {/* </div> */}
                    </div>

                    <div
                      className="relative"
                      style={{ borderColor: "transparent" }}
                    >
                      <input
                        type="text"
                        name="dosageValueD"
                        id="dosageValueD"
                        className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                        placeholder="enter a value"
                        value={formDataStep3?.dosageValueD}
                        onChange={(e) => e.target.value}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <select
                          id="dosageUnit"
                          name="dosageUnit"
                          className="w-28 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white/10 p-2 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                          onChange={(e) => e.target.value}
                          value={formDataStep3.dosageUnit}
                        >
                          <option selected disabled value="">
                            Select a unit
                          </option>
                          {Object.keys(dosageOptions).map((dosageUnit) => (
                            <option key={dosageUnit} value={dosageUnit}>
                              {dosageUnit}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}

                  <div className="w-full lg:w-56">
                    <div className="input-child-container mt-2 flex justify-between">
                      <label
                        htmlFor="drugForm"
                        className="labels text-md mt-5 block text-left"
                      >
                        Dosage form
                      </label>

                      <div className="checkbox ml-[4.5em] mt-2 flex items-center justify-center">
                        <label htmlFor="parentaralCheckbox" className="text-md">
                          Score
                        </label>
                        <input
                          type="checkbox"
                          id="parentaralCheckbox"
                          className="ml-2 rounded"
                          checked={formDataStep3.scoreCheckbox}
                          onChange={(e) =>
                            handleInputChange("scoreCheckbox", e.target.checked)
                          }
                        />
                      </div>

                      <div className="btn-cont mt-2">
                        <button
                          type="button"
                          className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    <div
                      className="relative"
                      style={{ borderColor: "transparent" }}
                    >
                      <select
                        id="drugForm"
                        name="drugForm"
                        className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                        onChange={(e) => e.target.value}
                        value={formDataStep3.drugForm}
                      >
                        <option selected disabled value="">
                          Select a form
                        </option>
                        {Object.keys(dosageFormOptions).map((drugForm) => (
                          <option key={drugForm} value={drugForm}>
                            {drugForm}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-56">
                    <div className="input-child-container flex justify-between">
                      <label
                        htmlFor="route"
                        className="labels text-md mt-5 block text-left"
                      >
                        Route
                      </label>

                      <div className="checkbox ml-20 mt-2 flex items-center justify-center">
                        <label htmlFor="parentaralCheckbox" className="text-md">
                          Parentaral
                        </label>
                        <input
                          type="checkbox"
                          id="parentaralCheckbox"
                          className="ml-2 rounded"
                          checked={formDataStep3.parentaralCheckbox}
                          onChange={(e) =>
                            handleInputChange(
                              "parentaralCheckbox",
                              e.target.checked
                            )
                          }
                        />
                      </div>

                      <div className="btn-cont mt-2">
                        <button
                          type="button"
                          className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    <div
                      className="relative"
                      style={{ borderColor: "transparent" }}
                    >
                      <select
                        id="route"
                        name="route"
                        className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                        onChange={(e) => e.target.value}
                        value={formDataStep3.route}
                      >
                        <option selected disabled value="">
                          Select a route
                        </option>
                        {Object.keys(routeOptions).map((route) => (
                          <option key={route} value={route}>
                            {route}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-56">
                    <div className="flex w-full items-center justify-between">
                      <label
                        htmlFor="dosageValueN"
                        className="labels text-md mb-2 block text-left"
                      >
                        Quantity
                      </label>
                      <label
                        htmlFor="containerUnitType"
                        className="labels text-md mb-2 block pr-2 text-left"
                      >
                        Unit type
                      </label>
                    </div>

                    <div
                      className="relative"
                      style={{ borderColor: "transparent" }}
                    >
                      <input
                        type="number"
                        name="dosageValueN"
                        id="dosageValueN"
                        className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                        placeholder="0"
                        value={formDataStep3?.containerUnitType}
                        onChange={(e) => e.target.value}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <select
                          id="containerUnitType"
                          name="containerUnitType"
                          className="w-28 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white/10 p-2 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                          onChange={(e) => e.target.value}
                          value={formDataStep3.containerUnitType}
                        >
                          <option selected disabled value="">
                            Select a unit
                          </option>
                          {Object.keys(dosageOptions).map(
                            (containerUnitType) => (
                              <option
                                key={containerUnitType}
                                value={containerUnitType}
                              >
                                {containerUnitType}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-56">
                    <div className="input-container w-full">
                      <div className="flex w-full items-center justify-between">
                        <div className="input-child-container flex w-full items-center justify-between">
                          <label
                            htmlFor="dosageUnitForm"
                            className="labels text-md block text-left"
                          >
                            Quantity
                          </label>

                          <div className="checkbox ml-28 flex items-center justify-center md:ml-20">
                            <label htmlFor="dosageUnit" className="text-md">
                              Unit
                            </label>
                          </div>

                          <div className="btn-cont mt-2">
                            <button
                              type="button"
                              className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>

                      <div
                        className="relative"
                        style={{ borderColor: "transparent" }}
                      >
                        <input
                          type="text"
                          name="dosageValueD"
                          id="dosageValueD"
                          className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                          placeholder="enter a value"
                          value={formDataStep3?.dosageUnit}
                          onChange={(e) => e.target.value}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <select
                            id="dosageUnit"
                            name="dosageUnit"
                            className="w-28 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white/10 p-2 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                            onChange={(e) => e.target.value}
                            value={formDataStep3.dosageUnit}
                          >
                            <option selected disabled value="">
                              Select a form
                            </option>
                            {Object.keys(dosageFormOptions).map(
                              (dosageUnit) => (
                                <option key={dosageUnit} value={dosageUnit}>
                                  {dosageUnit}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnifiedDrugInformations;
