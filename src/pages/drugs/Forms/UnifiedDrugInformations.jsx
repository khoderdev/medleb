import React, { useState } from "react";
import AddModal from "../AddModal";
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

const presentationContainerOptions = {
  Ampule: "Ampule",
  Applicator: "Applicator",
  Bottle: "Bottle",
  Box: "Box",
  Canister: "Canister",
  Cartridge: "Cartridge",
  Inhaler: "Inhaler",
  "Inhaler refill": "Inhaler refill",
  Kit: "Kit",
  "Not stated": "Not stated",
  "Packet/Sachet": "Packet/Sachet",
  Pack: "Pack",
  Pen: "Pen",
  "Pre-filled pen": "Pre-filled pen",
  Penfill: "Penfill",
  "Pre-filled syringe": "Pre-filled syringe",
  Syringe: "Syringe",
  Tube: "Tube",
  Vial: "Vial",
  New: "New",
};

const prescriptionAndDispensingConditionOptions = {
  Narcotics: "Narcotics",
  "Biological drugs": "Biological drugs",
  "Dispensed multiple times from one prescription":
    "Dispensed multiple times from one prescription",
  "Dispensed for the prescription duration":
    "Dispensed for the prescription duration",
  "OTC drugs": "OTC drugs",
};

function UnifiedDrugInformations(props) {
  const { formDataStep3, formDataStep2, handleInputChange } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAdd = (value) => {
    console.log("Adding value:", value);
    // Perform any other actions with the entered value
  };

  const handleCancel = () => {
    console.log("Modal cancelled");
    // Perform any actions when the modal is cancelled
  };

  return (
    <>
      <table className="whole-tabel-main-row mt-4 flex w-full flex-col overflow-x-hidden border">
        {/* TABLE HEADER START */}
        <tr className="flex flex-row justify-center border-b bg-gray-300">
          <div className="AGENT-MAIN-COL flex-1 border border-gray-400 bg-gray-300 p-2 text-center text-lg font-bold text-gray-800">
            By the Agent
          </div>
          <div className="IED-MAIN-COL flex-1 border border-gray-400 bg-gray-300 p-2 text-center text-lg font-bold text-gray-800">
            By the IED
          </div>
        </tr>
        {/* TABLE HEADER END */}

        <div className="flex flex-row border-gray-400">
          {/* AGENT COLOMUN START */}
          <div className="agent-col flex-1 border-r border-gray-400 p-2">
            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
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
                  className="mt-1 w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 p-2 px-4 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
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
                  disabled
                  value={formDataStep3.registrationNumber}
                  onChange={(e) =>
                    handleInputChange("registrationNumber", e.target.value)
                  }
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
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
                  disabled
                  value={formDataStep3.drugName}
                  onChange={(e) =>
                    handleInputChange("drugName", e.target.value)
                  }
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                  type="text"
                  placeholder="name"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="input-container mt-4 w-full">
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
                    handleInputChange("atcRelatedIngredients", e.target.value)
                  }
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                  type="text"
                  placeholder="enter a value"
                />
              </div>
              <div className="input-container mt-4 w-full">
                <label htmlFor="atc" className="labels text-md block text-left">
                  ATC Code
                </label>
                <input
                  disabled
                  value={formDataStep3.atc}
                  onChange={(e) => handleInputChange("atc", e.target.value)}
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                  type="text"
                  placeholder="enter a value"
                />
              </div>
            </div>

            <div className="input-container py- relative mt-8">
              <label
                htmlFor="ingredientsAndstrength"
                className="labels text-md block text-left"
              >
                Ingredients & Strength
              </label>
              <input
                disabled
                value={formDataStep3.ingredientsAndstrength}
                className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
                placeholder="enter a value"
              />
            </div>

            <div className="input-container relative mt-10">
              <label htmlFor="form" className="labels text-md block text-left">
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

            <div className="input-container relative mt-12">
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
                  handleInputChange("primaryContainerPackage", e.target.value)
                }
                className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                type="text"
                placeholder="container / package"
              />
            </div>
          </div>
          {/* AGENT COLOMUN ENDS */}

          {/* ******************************** COLUMN 2 CONTENTS AND LAYOUTS *********************************************************  */}

          {/* IED COLOMUN START */}
          <div className="ied-col flex-1 border-r border-gray-400 p-2">
            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="input-container relative">
                <label
                  htmlFor="type"
                  className="labels text-md block text-left"
                >
                  Type
                </label>
                <select
                  value={formDataStep3.type}
                  className="mt-1 w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 p-2 px-4 pr-8 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
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
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
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
                  value={formDataStep3.drugName}
                  onChange={(e) =>
                    handleInputChange("drugName", e.target.value)
                  }
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                  type="text"
                  placeholder="name"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="input-container mt-4 w-full">
                <label
                  htmlFor="atcRelatedIngredients"
                  className="labels text-md block text-left"
                >
                  ATC related ingredients
                </label>
                <input
                  value={formDataStep3.atcRelatedIngredients}
                  onChange={(e) =>
                    handleInputChange("atcRelatedIngredients", e.target.value)
                  }
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                  type="text"
                  placeholder="enter a value"
                />
              </div>

              <div className="input-container mt-4 w-full">
                <label
                  htmlFor="atcCode"
                  className="labels text-md block text-left"
                >
                  ATC Code
                </label>
                <input
                  value={formDataStep3.atcCode}
                  onChange={(e) => handleInputChange("atcCode", e.target.value)}
                  className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
                  type="text"
                  placeholder="enter a value"
                />
              </div>
            </div>

            <div className="mt-4 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
              {/* <div className="input-container w-full  border-2 border-blue-500"> */}
              <div className="input-container mt-[10px] w-full ">
                <div className="flex w-full items-center justify-between">
                  <label
                    htmlFor="dosageValueN"
                    className="labels text-md block pb-2 text-left"
                  >
                    Dosage Value (N)
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
                    value={formDataStep3.dosageValueN}
                    onChange={(e) =>
                      handleInputChange("dosageValueN", e.target.value)
                    }
                  />
                  <div className="absolute  inset-y-0 right-0 flex items-center">
                    <select
                      id="dosageUnitN"
                      name="dosageUnitN"
                      className="w-16 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white p-2 pr-8 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] sm:w-28 "
                      value={formDataStep3.dosageUnitN}
                      onChange={(e) =>
                        handleInputChange("dosageUnitN", e.target.value)
                      }
                    >
                      <option selected disabled value="">
                        Select a unit
                      </option>
                      {Object.keys(dosageOptions).map((dosageUnitN) => (
                        <option key={dosageUnitN} value={dosageUnitN}>
                          {dosageUnitN}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-container w-full">
                <div className="flex w-full items-center justify-between">
                  <label
                    htmlFor="dosageValueD"
                    className="labels text-md block text-left"
                  >
                    Value (D)
                  </label>

                  <div className="btn-cont mt-">
                    <button
                      onClick={openModal}
                      type="button"
                      className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="dosageValueD"
                    id="dosageValueD"
                    className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                    placeholder="0"
                    value={formDataStep3?.dosageValueD}
                    onChange={(e) =>
                      handleInputChange("dosageValueD", e.target.value)
                    }
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <select
                      id="dosageUnitD"
                      name="dosageUnitD"
                      className="w-16 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white p-2 pr-8 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] sm:w-28 "
                      onChange={(e) =>
                        handleInputChange("dosageUnitD", e.target.value)
                      }
                      value={formDataStep3.dosageUnitD}
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

              <div className="w-full lg:w-56">
                <div className="input-child-container flex justify-between">
                  <label
                    htmlFor="drugForm"
                    className="labels text-md mt-2 flex text-left"
                  >
                    Dose form
                  </label>

                  <div className="checkbox ml-[4.5em] flex items-center justify-center">
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

                  <div className="btn-cont">
                    <button
                      onClick={openModal}
                      type="button"
                      className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <select
                    id="doseForm"
                    name="doseForm"
                    className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 pr-8 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                    value={formDataStep3.doseForm}
                    onChange={(e) =>
                      handleInputChange("doseForm", e.target.value)
                    }
                  >
                    <option selected disabled value="">
                      Select a form
                    </option>
                    {Object.keys(dosageFormOptions).map((doseForm) => (
                      <option key={doseForm} value={doseForm}>
                        {doseForm}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full lg:w-56">
                <div className="input-child-container flex justify-between">
                  <label
                    htmlFor="drugForm"
                    className="labels text-md mt-2 block text-left"
                  >
                    Route
                  </label>

                  <div className="checkbox ml-[4.5em] flex items-center justify-center">
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

                  <div className="btn-cont">
                    <button
                      onClick={openModal}
                      type="button"
                      className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <select
                    id="drugRoute"
                    name="drugRoute"
                    className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 pr-8 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                    value={formDataStep3.drugRoute}
                    onChange={(e) =>
                      handleInputChange("drugRoute", e.target.value)
                    }
                  >
                    <option selected disabled value="">
                      Select a route
                    </option>
                    {Object.keys(routeOptions).map((drugRoute) => (
                      <option key={drugRoute} value={drugRoute}>
                        {drugRoute}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="input-container w-full">
                <label
                  htmlFor="dosageUnitForm"
                  className="labels text-md block text-center"
                >
                  Presentation: Content
                </label>
                <div className="flex w-full items-center justify-between">
                  <label
                    htmlFor="presentationContent"
                    className="labels text-md block text-left"
                  >
                    Quantity
                  </label>

                  <div className="btn-cont mt-">
                    <button
                      onClick={openModal}
                      type="button"
                      className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="presentationContentQty"
                    id="presentationContentQty"
                    className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 pr-8 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                    placeholder=""
                    value={formDataStep3?.presentationContentQty}
                    onChange={(e) =>
                      handleInputChange(
                        "presentationContentQty",
                        e.target.value
                      )
                    }
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <select
                      id="contentUnitType"
                      name="contentUnitType"
                      className="w-16 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white p-2 pr-8 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] sm:w-28 "
                      value={formDataStep3.contentUnitType}
                      onChange={(e) =>
                        handleInputChange("contentUnitType", e.target.value)
                      }
                    >
                      <option selected disabled value="">
                        Unit Type
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

              <div className="input-container w-full">
                <label
                  htmlFor="dosageUnitForm"
                  className="labels text-md block text-center"
                >
                  Presentation: Container / Package
                </label>
                <div className="flex w-full items-center justify-between">
                  <label
                    htmlFor="presentationContainer"
                    className="labels text-md block text-left"
                  >
                    Quantity
                  </label>

                  <div className="btn-cont mt-">
                    <button
                      onClick={openModal}
                      type="button"
                      className="w-fit rounded-xl bg-transparent p-2 text-[#259F83]  focus:border-[#259F83] focus:outline-none focus:ring-1"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="presentationContainerQty"
                    id="presentationContainerQty"
                    className="w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 pr-8 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                    placeholder=""
                    value={formDataStep3?.presentationContainerQty}
                    onChange={(e) =>
                      handleInputChange(
                        "presentationContainerQty",
                        e.target.value
                      )
                    }
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <select
                      id="containerUnitType"
                      name="containerUnitType"
                      className="w-16 cursor-pointer appearance-none rounded-r-full border border-[#259f8359] bg-white p-2 pr-8 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] sm:w-28 "
                      value={formDataStep3.containerUnitType}
                      onChange={(e) =>
                        handleInputChange("containerUnitType", e.target.value)
                      }
                    >
                      <option selected disabled value="">
                        Type
                      </option>
                      {Object.keys(presentationContainerOptions).map(
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

              <div className="input-container relative">
                <label
                  htmlFor="prescriptionAndDispensingCondition"
                  className="labels text-md block text-left"
                >
                  Prescription and dispensing condition
                </label>
                <select
                  onChange={(e) =>
                    handleInputChange("prescriptionAndDispensingCondition", e.target.value)
                  }
                  value={formDataStep3.prescriptionAndDispensingCondition}
                  className="mt-1 w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 p-2 px-4 pr-8 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
                >
                  <option selected disabled value="">
                    select a condition
                  </option>
                  {Object.keys(prescriptionAndDispensingConditionOptions).map(
                    (prescriptionAndDispensingCondition) => (
                      <option
                        key={prescriptionAndDispensingCondition}
                        value={prescriptionAndDispensingCondition}
                      >
                        {prescriptionAndDispensingCondition}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>
          {/* IED COLOMUN ENDS */}
        </div>
      </table>
      {isModalOpen && (
        <AddModal
          closeModal={closeModal}
          title="Add New Item"
          onAdd={handleAdd}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default UnifiedDrugInformations;
