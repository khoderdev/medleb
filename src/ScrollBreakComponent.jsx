// import React, { useEffect, useState } from "react";
// import "./index.css"; // Import your stylesheet

// const ScrollBreakComponent = () => {
//   const [scrollBreak, setScrollBreak] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollHeight = window.scrollY;

//       // Set a specific height where you want the scroll break to occur
//       const scrollBreakHeight = 200;

//       // Update state based on scroll position
//       setScrollBreak(scrollHeight > scrollBreakHeight);
//     };

//     // Attach event listener for scroll
//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       {/* Your regular content before the sticky element */}
//       <div className="my-16">
//         {/* Additional content before the sticky element */}
//       </div>

//       {/* Apply the 'sticky' and 'top-0' classes to make the element sticky at the top */}
//       <div className="sticky top-0 bg-white p-4 shadow border border-red-500">
//         {/* Content to be sticky at the top */}
//         <p className="text-2xl font-bold text-center">Sticky Content</p>
//       </div>

//       {/* More content after the sticky element */}
//       <div className="my-16">
//       Inspect Request Payload:
// The logs indicate that the Request Body is undefined. Ensure that your frontend is sending the data correctly. Check how you are sending the request using Axios in your frontend code, and make sure that the data is included in the request payload.

// Review Middleware Order:
// Ensure that the middleware ordering in your server code is correct. The middleware that handles the logging of requests is placed at the beginning, which is good for debugging. However, make sure it doesn't interfere with the handling of the actual route.

// Check if the Server is Running:
// Confirm that your server is running and accessible at the specified IP and port (http://1.1.1.252:3500). If the server is not running or if there's an issue with the configuration, you might get a 404 error.

// Check Server Logs:
// Inspect the server logs for any error messages or additional details. The logs might provide insights into why the server is responding with a 404 status.

// Update Frontend URL:
// Ensure that the URL used in the frontend Axios request matches the correct server URL (http://1.1.1.252:3500).

// Make these checks and adjustments, and if the issue persists, please provide the relevant parts of your server code where the route handling for /api/drugs/v1.0 is defined. This will help in providing more targeted assistance.      </div>
//     </div>
//   );
// };

// export default ScrollBreakComponent;
import React, { useState } from "react";

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

function ScrollBreakComponent(props) {
  const { formDataStep3, handleInputChange } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
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
    <div className="w-full h-screen bg-white-bg">
      <div className="content lg:w-[80%] lg:mx-auto h-full border-2 border-red-500 overflow- rounded-t-3xl py-14 lg:py-0 text-center bg-white-contents dark:bg-black-contents">
        <h1 className="pb-2 pt-2 text-center text-lg sm:text-xl font-medium overflow-hidden">
          5- Unified Drug Informations
        </h1>
        <div className="table-container">
          <table className="whole-table-main-row  w-full  overflow overflow-x-hidden bg-green-500">
            {/* TABLE HEADER START */}
            <thead className="sticky top-0 justify-center border border-red-500 bg-red-500 dark:bg-black-shadow">
              <tr className="flex flex-row justify-center border-yellow-500 border z-50">
                <div className="AGENT-MAIN-COL flex w-full border-r border-white-contents dark:border-[#3a3c3d] bg-white-input p-2 text-center text-lg font-bold text-gray-800">
                  By the Agent
                </div>
                <div className="IED-MAIN-COL flex w-full border-l border-white-contents dark:border-[#3a3c3d] bg-white-input p-2 text-center text-lg font-bold text-gray-800">
                  By the IED
                </div>
              </tr>
            </thead>
            {/* TABLE HEADER END */}

            <tbody className="flex flex-row h-auto border-2 border-blue-600 dark:border-[#3a3c3d] overflow-auto z-0">
              {/* AGENT COLOMUN START */}
              <tr className="agent-col flex-1 border-r border-white-input dark:border-[#3a3c3d] p-2">
                <div className="mt-2 grid grid-cols-1 gap-4  lg:grid-cols-2 xl:grid-cols-3">
                  <div className="input-container relative">
                    <label
                      htmlFor="type"
                      className="labels text-md block text-left"
                    >
                      Type
                    </label>
                    <input
                      name="type"
                      disabled
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
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
                      disabled
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
                      placeholder="reg #"
                    />
                  </div>
                  <div className="input-container sm:col-span-full md:col-span-1 lg:col-span-full xl:col-span-1 2xl:col-span-1 relative">
                    <label
                      htmlFor="drugName"
                      className="labels text-md block text-left"
                    >
                      Drug Name
                    </label>
                    <input
                      name="drugName"
                      disabled
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
                      placeholder="name"
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-6 lg:grid-cols-2">
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
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
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
                      name="atcCode"
                      disabled
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
                      placeholder="enter a value"
                    />
                  </div>
                </div>

                <div className="mt-4 grid w-full grid-cols-1 gap-6 lg:grid-cols-1 px-4 py-3 border rounded-xl border-[#3a3c3d60]">
                  <div className="input-container relative flex flex-col justify-evenly h-80">
                    <div className="input-container relative">
                      <label
                        htmlFor="ingredientsAndstrength"
                        className="labels text-md block text-left mb-1"
                      >
                        Ingredients & Strength
                      </label>
                      <input
                        name="ingredientsAndstrength"
                        disabled
                        className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                        type="text"
                        placeholder="enter a value"
                      />
                    </div>

                    <div className="input-container relative">
                      <label
                        htmlFor="form"
                        className="labels text-md block text-left"
                      >
                        Form
                      </label>
                      <input
                        name="form"
                        disabled
                        className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                        type="text"
                        placeholder="drug form"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-evenly border rounded-xl border-[#3a3c3d60] p-4 mt-52">
                  {/* <div className="input-container relative mt-16"> */}
                  <label
                    htmlFor="primaryContainerPackage"
                    className="labels text-md block text-left"
                  >
                    Primary container / Package
                  </label>
                  <input
                    name="primaryContainerPackage"
                    disabled
                    className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                    type="text"
                    placeholder="container / package"
                  />
                </div>
                <div className="flex flex-col justify-evenly border rounded-xl border-[#3a3c3d60] p-4 mt-52">
                  {/* <div className="input-container relative mt-16"> */}
                  <label
                    htmlFor="primaryContainerPackage"
                    className="labels text-md block text-left"
                  >
                    Primary container / Package
                  </label>
                  <input
                    name="primaryContainerPackage"
                    disabled
                    className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                    type="text"
                    placeholder="container / package"
                  />
                </div>
                <div className="flex flex-col justify-evenly border rounded-xl border-[#3a3c3d60] p-4 mt-52">
                  {/* <div className="input-container relative mt-16"> */}
                  <label
                    htmlFor="primaryContainerPackage"
                    className="labels text-md block text-left"
                  >
                    Primary container / Package
                  </label>
                  <input
                    name="primaryContainerPackage"
                    disabled
                    className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                    type="text"
                    placeholder="container / package"
                  />
                </div>
                <div className="flex flex-col justify-evenly border rounded-xl border-[#3a3c3d60] p-4 mt-52">
                  {/* <div className="input-container relative mt-16"> */}
                  <label
                    htmlFor="primaryContainerPackage"
                    className="labels text-md block text-left"
                  >
                    Primary container / Package
                  </label>
                  <input
                    name="primaryContainerPackage"
                    disabled
                    className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                    type="text"
                    placeholder="container / package"
                  />
                </div>
              </tr>
              {/* AGENT COLOMUN ENDS */}

              {/* ******************************** COLUMN 2 CONTENTS AND LAYOUTS *********************************************************  */}

              {/* IED COLOMUN START */}
              <tr className="ied-col flex-1  border-white-contents dark:border-[#3a3c3d] p-2">
                <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="input-container relative">
                    <label
                      htmlFor="type"
                      className="labels text-md block text-left"
                    >
                      Type
                    </label>
                    <select
                      name="type"
                      className="mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                    >
                      <option value="" disabled>
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
                      name="registrationNumber"
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
                      placeholder="reg #"
                    />
                  </div>
                  <div className="input-container sm:col-span-full md:col-span-1 lg:col-span-full xl:col-span-1 2xl:col-span-1 relative">
                    <label
                      htmlFor="drugName"
                      className="labels text-md block text-left"
                    >
                      Drug Name
                    </label>
                    <input
                      name="drugName"
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
                      placeholder="name"
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-6 lg:grid-cols-2">
                  <div className="input-container mt-4 w-full">
                    <label
                      htmlFor="atcRelatedIngredients"
                      className="labels text-md block text-left"
                    >
                      ATC related ingredients
                    </label>
                    <input
                      name="atcRelatedIngredients"
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
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
                      name="atcCode"
                      className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      type="text"
                      autoComplete="off"
                      placeholder="enter a value"
                    />
                  </div>
                </div>

                <div className="p-4 border rounded-xl border-[#3a3c3d60] mt-4">
                  <div className="mt-4 grid w-full grid-cols-1 gap-6">
                    <div className="input-container mt-2 w-full">
                      <div className="flex w-full items-center justify-between">
                        <label
                          htmlFor="dosageValueN"
                          className="labels text-md block pb-2 text-left "
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
                          autoComplete="off"
                          id="dosageValueN"
                          className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                          placeholder="0"
                        />
                        <div className="absolute  inset-y-0 right-0 flex items-center">
                          <select
                            id="dosageUnitN"
                            autoComplete="off"
                            name="dosageUnitN"
                            className="w-16 cursor-pointer appearance-none rounded-r-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-fg p-2 pr-8 font-normal outline-none focus:border-green-pri focus:outline-none focus:ring-1 focus:ring-green-pri  sm:w-28"
                          >
                            <option value="" disabled>
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
                          className="labels text-md block text-left mt-2"
                        >
                          Value (D)
                        </label>

                        <div className="btn-cont mt-">
                          <button
                            onClick={openModal}
                            type="button"
                            className="w-fit rounded-xl bg-transparent p-2 text-[#00a651]  focus:border-[#00a651] focus:outline-none focus:ring-1"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="dosageValueD"
                          autoComplete="off"
                          id="dosageValueD"
                          className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                          placeholder="0"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <select
                            id="dosageUnitD"
                            name="dosageUnitD"
                            className="w-16 cursor-pointer appearance-none rounded-r-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-fg px-4 py-2 font-normal outline-none focus:border-green-pri focus:outline-none focus:ring-1 focus:ring-green-pri dark:focus:ring-1 dark:focus:ring-green-pri sm:w-28"
                          >
                            <option value="" disabled>
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
                    <div className="input-container w-full">
                      <div className="flex w-full items-center justify-between">
                        <label
                          htmlFor="dosageValueD"
                          className="labels text-md block text-left mt-2"
                        >
                          Value (D)
                        </label>

                        <div className="btn-cont mt-">
                          <button
                            onClick={openModal}
                            type="button"
                            className="w-fit rounded-xl bg-transparent p-2 text-[#00a651]  focus:border-[#00a651] focus:outline-none focus:ring-1"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="dosageValueD"
                          autoComplete="off"
                          id="dosageValueD"
                          className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                          placeholder="0"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <select
                            id="dosageUnitD"
                            name="dosageUnitD"
                            className="w-16 cursor-pointer appearance-none rounded-r-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-fg px-4 py-2 font-normal outline-none focus:border-green-pri focus:outline-none focus:ring-1 focus:ring-green-pri dark:focus:ring-1 dark:focus:ring-green-pri sm:w-28"
                          >
                            <option value="" disabled>
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

                    <div className="input-container w-full">
                      <div className="input-child-container flex justify-between">
                        <label
                          htmlFor="doseForm"
                          className="labels text-md mt-2 flex text-left"
                        >
                          Dose form
                        </label>

                        <div className="checkbox mr-[-3em] flex items-center justify-center">
                          <label htmlFor="scoreCheckbox" className="text-md">
                            Score
                          </label>
                          <input
                            name="scoreCheckbox"
                            type="checkbox"
                            id="parentaralCheckbox"
                            className="ml-2 rounded"
                          />
                        </div>

                        <div className="btn-cont">
                          <button
                            onClick={openModal}
                            type="button"
                            className="w-fit rounded-xl bg-transparent p-2 text-[#00a651]  focus:border-[#00a651] focus:outline-none focus:ring-1"
                          >
                            Add
                          </button>
                        </div>
                      </div>

                      <div className="relative">
                        <select
                          id="doseForm"
                          name="doseForm"
                          autoComplete="off"
                          className="mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                        >
                          <option value="" disabled>
                            Select a route
                          </option>
                          {Object.keys(dosageFormOptions).map((doseForm) => (
                            <option key={doseForm} value={doseForm}>
                              {doseForm}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid w-full grid-cols-1 gap-6 pb-4">
                  <div className="input-container w-full">
                    <div className="input-child-container flex justify-between">
                      <label
                        htmlFor="route"
                        className="labels text-md mt-2 block text-left"
                      >
                        Route
                      </label>

                      <div className="checkbox mr-[-3em] flex items-center justify-center">
                        <label htmlFor="parentaralCheckbox" className="text-md">
                          Parentaral
                        </label>
                        <input
                          name="parentaralCheckbox"
                          type="checkbox"
                          id="parentaralCheckbox"
                          className="ml-2 rounded"
                        />
                      </div>

                      <div className="btn-cont">
                        <button
                          onClick={openModal}
                          type="button"
                          className="w-fit rounded-xl bg-transparent p-2 text-[#00a651]  focus:border-[#00a651] focus:outline-none focus:ring-1"
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        id="route"
                        name="route"
                        autoComplete="off"
                        className="mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                      >
                        <option value="" disabled>
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

                  <div className="flex flex-col justify-evenly lg:px- border rounded-xl border-[#3a3c3d60] p-4">
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
                            className="w-fit rounded-xl bg-transparent p-2 text-[#00a651]  focus:border-[#00a651] focus:outline-none focus:ring-1"
                          >
                            Add
                          </button>
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          name="presentationContentQty"
                          autoComplete="off"
                          id="presentationContentQty"
                          className="mt-1 w-full  rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri sm-28"
                          placeholder=""
                        />

                        <div className="absolute inset-y-0 -right-14 lg:-right-[26px] md:right-0 flex items-center">
                          <select
                            id="contentUnitType"
                            name="contentUnitType"
                            className="mt-1 w-[65%] md:w-full cursor-pointer rounded-r-full border border-[#00a65100] dark:border-black-border bg-white-contents drop-shadow-sm dark:bg-black-fg px-4 pr-10 py-2 font-normal  outline-none focus:border-green-pri focus:outline-none focus:ring-0 focus:ring-green-pri dark:focus:ring-1 dark:focus:ring-green-pri"
                          >
                            <option value="" disabled>
                              Type
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

                    <div className="input-container w-full mt-4">
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

                        <div className="btn-cont">
                          <button
                            onClick={openModal}
                            type="button"
                            className="w-fit rounded-xl bg-transparent p-2 text-[#00a651]  focus:border-[#00a651] focus:outline-none focus:ring-1"
                          >
                            Add
                          </button>
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          name="presentationContainerQty"
                          autoComplete="off"
                          id="presentationContainerQty"
                          className="mt-1 w-full  rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri sm-28"
                          placeholder=""
                        />

                        <div className="absolute inset-y-0 -right-[26px] md:right-0 flex items-center">
                          <select
                            id="containerUnitType"
                            name="containerUnitType"
                            className="mt-1 w-10/12 md:w-full cursor-pointer rounded-r-full border border-[#00a65100] dark:border-black-border bg-white-contents drop-shadow-sm dark:bg-black-fg px-4 pr-8 py-2 font-normal  outline-none focus:border-green-pri focus:outline-none focus:ring-0 focus:ring-green-pri dark:focus:ring-1 dark:focus:ring-green-pri"
                          >
                            <option value="" disabled>
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
                  </div>

                  <div className="input-container relative">
                    <label
                      htmlFor="prescriptionAndDispensingCondition"
                      className="labels text-md block text-left"
                    >
                      Prescription and dispensing condition
                    </label>
                    <select
                      name="prescriptionAndDispensingCondition"
                      className="mt-1 w-full cursor-pointer rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                    >
                      <option value="" disabled>
                        select a condition
                      </option>
                      {Object.keys(
                        prescriptionAndDispensingConditionOptions
                      ).map((prescriptionAndDispensingCondition) => (
                        <option
                          key={prescriptionAndDispensingCondition}
                          value={prescriptionAndDispensingCondition}
                        >
                          {prescriptionAndDispensingCondition}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* </div> */}
              </tr>
              {/* IED COLOMUN ENDS */}
            </tbody>
          </table>
          {/* {isModalOpen && (
          <AddModal
            closeModal={closeModal}
            title="Add New Item"
            onAdd={handleAdd}
            onCancel={handleCancel}
          />
        )} */}
        </div>
      </div>
    </div>
  );
}

export default ScrollBreakComponent;
