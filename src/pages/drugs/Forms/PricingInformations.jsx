/* eslint-disable tailwindcss/no-custom-classname */
import React, { useRef } from "react";
import "./styles.css";

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
  SAR: "﷼",
  JOD: "JD",
  LBP: "ل.ل",
};

const subsidizationLabelOptions = {
  "Non subsidized": "Non subsidized",
  "Non subsidized PP-40%": "Non subsidized PP-40%",
  "List serum": "List serum",
  "Non subsidized PP-35%": "Non subsidized PP-35%",
  "raw material 45% PP-55%": "raw material 45% PP-55%",
  "Imported A1A2B chronic": "Imported A1A2B chronic",
  Insulin: "Insulin",
  "List locally manufactured": "List locally manufactured",
  "Imported A1A2B B80": "Imported A1A2B B80",
  "Non subsidized PP-50%": "Non subsidized PP-50%",
  "Decision 945": "Decision 945",
  PPX3: "PPX3",
  "Non subsidized PP-25%": "Non subsidized PP-25%",
  "Non subsidized PP-53.28%": "Non subsidized PP-53.28%",
  "Non subsidized PP-30%": "Non subsidized PP-30%",
  "Imported A1A2B D80": "Imported A1A2B D80",
  "Imported A1A2B C65": "Imported A1A2B C65",
  "Imported A1A2B chronic Decision 945": "Imported A1A2B chronic Decision 945",
  "Decision 945 PPX3": "Decision 945 PPX3",
  "Non subsidized PP-39%": "Non subsidized PP-39%",
  "Imported A1A2B chronic Y1": "Imported A1A2B chronic Y1",
  "Imported A1A2B chronic Y2": "Imported A1A2B chronic Y2",
};

const subsidizationPercentageOptions = {
  0: 0,
  45: "45",
  60: "60",
  65: "65",
  75: "75",
  80: "80",
  100: "100",
};

function PricingInformations(props) {
  const { formDataStep4, handleInputChange } = props;

  function convertToUSD() {
    if (
      formDataStep4 &&
      formDataStep4.priceForeign &&
      formDataStep4.currencyForeign
    ) {
      const convertedPrice =
        formDataStep4.priceForeign /
        exchangeRates[formDataStep4.currencyForeign];
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return "";
  }

  function convertToLBP() {
    if (
      formDataStep4 &&
      formDataStep4.priceForeign &&
      formDataStep4.currencyForeign
    ) {
      const priceInUSD = convertToUSD();
      const convertedPrice =
        (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return "";
  }

  return (
    <>
      <div className="col-span-1 flex w-full  sm:w-[80em] flex-col sm:col-span-1 text-gray-700 dark:text-white-text">
        <h1 className="pb-2 pt-4 text-center text-xl sm:py-10 sm:text-2xl ">
          5 - Pricing Informations
        </h1>
        <div className=" flex h-full w-full flex-col">
          <form className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:justify-items-center md:grid-cols-2 lg:grid-cols-3">
            <div className="input-container relative">
              <label
                htmlFor="price"
                className="labels text-md mb-2 block text-left"
              >
                Foreign Price
              </label>
              <div className="relative" style={{ borderColor: "transparent" }}>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-bold">
                  <span className="text-[#259F83]">
                    {currencySymbols[formDataStep4.currencyForeign]}
                  </span>
                </div>
                <input
                  disabled
                  type="number"
                  name="priceForeign"
                  id="price"
                  className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-[#3a3c3d] bg-white-bg dark:bg-black-input px-10 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                  placeholder="0.00"
                  value={formDataStep4?.priceForeign}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currencyForeign" className="sr-only ">
                    Foreign Currency
                  </label>
                  <select
                    disabled
                    id="currency"
                    name="currencyForeign"
                    className="w-20 cursor-pointer appearance-none rounded-r-full border border-[#259f8300] dark:border-[#3a3c3d] bg-white-fg dark:bg-black-input px-4 py-2 font-normal outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7] sm:w-20"
                    onChange={(e) =>
                      handleInputChange(e.target.name, e.target.value)
                    }
                    value={formDataStep4.currencyForeign}
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
                disabled
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                value={" " + convertToUSD()}
              />
            </div>
            <div className="input-container relative">
              <label className="labels text-md block text-left">
                Foreign Price in LBP
              </label>
              <input
                disabled
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                value={
                  " " +
                  parseFloat(convertToLBP().replace(".", "")).toLocaleString(
                    "en-LB"
                  ) /* Add thousands separator */
                }
              />
            </div>

            <div className="input-container w-full">
              <label
                htmlFor="stratum"
                className="labels text-md block text-left"
              >
                Stratum
              </label>
              <input
                disabled
                value={formDataStep4.stratum}
                onChange={(e) => handleInputChange("stratum", e.target.value)}
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
                placeholder="E1"
              />
            </div>

            <div className="input-container relative">
              <label htmlFor="type" className="labels text-md block text-left">
                Cargo & Shipping Terms
              </label>
              <input
                disabled
                value={formDataStep4.cargoShippingTerms}
                onChange={(e) =>
                  handleInputChange("cargoShippingTerms", e.target.value)
                }
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              />
            </div>

            <div className="input-container relative">
              <label
                htmlFor="cargoShipping"
                className="labels text-md block text-left"
              >
                Cargo & Shipping
              </label>
              <input
                disabled
                value={formDataStep4.cargoShipping}
                onChange={(e) =>
                  handleInputChange("cargoShipping", e.target.value)
                }
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              />
            </div>

            <div className="input-container relative">
              <label
                htmlFor="douanes"
                className="labels text-md block text-left"
              >
                Douanes
              </label>
              <select
                value={formDataStep4.douanes}
                onChange={(e) => handleInputChange("douanes", e.target.value)}
                className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-[#3a3c3d] bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              >
                <option selected disabled value="">
                  select a value
                </option>
                <option value="0%"> 0% </option>
                <option value="5%"> 5% </option>
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="douanes"
                className="labels text-md block text-left"
              >
                Subsidization Label
              </label>
              <select
                id="subsidizationLabel"
                name="subsidizationLabel"
                className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-[#3a3c3d] bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                // onChange={(e) => e.target.value}
                onChange={(e) => handleInputChange("subsidizationLabel", e.target.value)}
                value={formDataStep4.subsidizationLabel}
              >
                <option selected disabled value="">
                  Select a unit
                </option>
                {Object.keys(subsidizationLabelOptions).map(
                  (subsidizationLabel) => (
                    <option key={subsidizationLabel} value={subsidizationLabel}>
                      {subsidizationLabel}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="douanes"
                className="labels text-md block text-left"
              >
                Subsidization Percentage
              </label>
              <select
                id="subsidizationLabel"
                name="subsidizationLabel"
                className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-[#3a3c3d] bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                onChange={(e) => e.target.value}
                value={formDataStep4.subsidizationPercentage}
              >
                <option selected disabled value="">
                  Select a %
                </option>
                {Object.keys(subsidizationPercentageOptions).map(
                  (subsidizationPercentage) => (
                    <option
                      key={subsidizationPercentage}
                      value={subsidizationPercentage}
                    >
                      {subsidizationPercentage}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="agentProfitMargin"
                className="labels text-md block text-left"
              >
                Agent profit margin
              </label>
              <input
                disabled
                value={formDataStep4.agentProfitMargin}
                onChange={(e) =>
                  handleInputChange("agentProfitMargin", e.target.value)
                }
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
                placeholder="0"
              />
            </div>

            <div className="input-container relative">
              <label
                htmlFor="pharmacistProfitMargin"
                className="labels text-md block text-left"
              >
                Pharmacist profit margin
              </label>
              <input
                disabled
                value={formDataStep4.pharmacistProfitMargin}
                onChange={(e) =>
                  handleInputChange("pharmacistProfitMargin", e.target.value)
                }
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
                placeholder="0"
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
                value={formDataStep4.drugName}
                onChange={(e) => handleInputChange("drugName", e.target.value)}
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
                placeholder="name"
              />
            </div>

            <div className="input-container relative">
              <label
                htmlFor="hospitalPriceLBP"
                className="labels text-md block text-left"
              >
                Hospital Price - LBP
              </label>
              <input
                disabled
                value={formDataStep4.hospitalPriceLBP}
                onChange={(e) =>
                  handleInputChange("hospitalPriceLBP", e.target.value)
                }
                className="mt-1 w-full rounded-full border-[3px] border-black-bg dark:border-black-bg bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
                placeholder="0"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PricingInformations;
