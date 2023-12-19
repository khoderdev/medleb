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

const ResponsiveTable = (props) => {
  const { formDataStep3, handleInputChange } = props;

  return (
    <table className="whole-tabel-main-row flex flex-col overflow-x-hidden border">
      <div className="flex flex-row justify-center border-b bg-gray-300">
        <div className="AGENT-COL text-md flex-1 border-b border-r border-gray-400 p-2 text-center">
          By the Agent
        </div>
        <div className="IED-COL text-md flex-1 border-b border-gray-400 p-2 text-center">
          By the IED
        </div>
      </div>
      <div className="flex flex-row border-b border-gray-400">
        <div className="agent-col flex-1 border-r border-gray-400 p-2">
          <div className="grid gap-4 sm:grid-cols-2">
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
              className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
              type="text"
              placeholder="reg #"
            />
          </div>
        </div>
        <div className="flex-1 p-2">
          <div className="mb-2 grid grid-cols-2 gap-4">
            <input type="text" className="w-full p-2" placeholder="Input 1" />
            <input type="text" className="w-full p-2" placeholder="Input 2" />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <select className="w-full p-2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select className="w-full p-2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
      </div>
    </table>
  );
};

export default ResponsiveTable;
