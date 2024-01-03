import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const DrugRegistryForm = ({
  handleInputChange,
  formDataStep1,
  handleChildArrowButtonClick,
}) => {
  // const [localFormDataStep1, setLocalFormDataStep1] = useState({
  //   registrationDate: new Date(),
  // });

  // const handleDateChange = (name, value) => {
  //   // Convert the input value to a Date object
  //   const date = value ? new Date(value) : new Date();

  //   setLocalFormDataStep1({
  //     ...localFormDataStep1,
  //     registrationDate: date,
  //   });

  //   // Call your input change handler
  //   handleInputChange(name, date);
  // };
  const handleDateChange = (e) => {
    handleInputChange("registrationDate", e.target.value);
  };

  function convertToUSD() {
    if (formDataStep1?.priceForeign && formDataStep1?.currencyForeign) {
      const convertedPrice =
        formDataStep1.priceForeign /
        exchangeRates[formDataStep1.currencyForeign];
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return "";
  }

  function convertToLBP() {
    if (formDataStep1?.priceForeign && formDataStep1?.currencyForeign) {
      const priceInUSD = convertToUSD();
      const convertedPrice =
        (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;
      return convertedPrice.toFixed(2); // Display with 2 decimal places
    }
    return "";
  }
  // const [selectedDate, setSelectedDate] = useState(null);
  // const handleDateChange = (date) => {
  //   handleInputChange("registrationDate", date);
  //   handleInputChange("reviewDate", date);
  // };

  return (
    <>
      <div className="col-span-1 flex w-full flex-col text-gray-700 dark:text-white-text">
        <div className="image-uploader-cont flex flex-col justify-items-center"></div>
        <h1 className="pb-2 pt-4 text-center text-xl sm:py-10 sm:text-2xl ">
          1 - Drug Registry Informations
        </h1>
        <div className=" flex h-full w-full flex-col">
          <form className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:justify-items-center md:grid-cols-2 lg:grid-cols-3">
            <div className="input-container relative">
              <label htmlFor="type" className="labels text-md block text-left">
                Type
              </label>
              <select
                value={formDataStep1.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
                className="mt-1 w-full rounded-full cursor-pointer border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
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
                htmlFor="responsibleParty"
                className="labels text-md block text-left"
              >
                Responsible Party
              </label>
              <select
                value={formDataStep1.responsibleParty}
                onChange={(e) =>
                  handleInputChange("responsibleParty", e.target.value)
                }
                className="mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              >
                <option selected disabled value="">
                  select a party
                </option>
                <option value="Leo Pharma A/S"> Leo Pharma A / S </option>
                <option value="Bayer Hispania"> Bayer Hispania </option>
                <option value="Abbvie Ltd"> Abbvie Ltd </option>
                <option value="Ferring GmbH"> Ferring GmbH </option>
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="responsiblePartyCountry"
                className="labels text-md block text-left"
              >
                Responsible Party Country
              </label>
              <select
                value={formDataStep1.responsiblePartyCountry}
                onChange={(e) =>
                  handleInputChange("responsiblePartyCountry", e.target.value)
                }
                className="mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              >
                <option selected disabled value="">
                  select a country
                </option>
                <option value="France"> France </option>
                <option value="Spain"> Spain </option>
                <option value="USA"> USA </option>
                <option value="Sweden"> Sweden </option>
                <option value="Lebanon"> Lebanon </option>
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="manufacturer"
                className="labels text-md block text-left"
              >
                Manufacturer
              </label>
              <select
                value={formDataStep1.manufacturer}
                onChange={(e) =>
                  handleInputChange("manufacturer", e.target.value)
                }
                className="mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              >
                <option selected disabled value="">
                  select a manufacturer
                </option>
                <option value="Leo Pharma A/S"> Leo Pharma A / S </option>
                <option value="Bayer Hispania"> Bayer Hispania </option>
                <option value="Abbvie Ltd"> Abbvie Ltd </option>
                <option value="Ferring GmbH"> Ferring GmbH </option>
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="manufacturingCountry"
                className="labels text-md block text-left"
              >
                Manufacturing Country
              </label>
              <select
                value={formDataStep1.manufacturingCountry}
                onChange={(e) =>
                  handleInputChange("manufacturingCountry", e.target.value)
                }
                className="mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              >
                <option selected disabled value="">
                  select a country
                </option>
                <option value="France"> France </option>
                <option value="Spain"> Spain </option>
                <option value="USA"> USA </option>
                <option value="Sweden"> Sweden </option>
                <option value="Lebanon"> Lebanon </option>
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="cargoShippingTerms"
                className="labels text-md block text-left"
              >
                Cargo & Shipping Terms
              </label>
              <select
                value={formDataStep1.cargoShippingTerms}
                onChange={(e) =>
                  handleInputChange("cargoShippingTerms", e.target.value)
                }
                className="mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
              >
                <option selected disabled value="">
                  select a term
                </option>
                <option value="CIF"> CIF </option>
                <option value="FOB"> FOB </option>
              </select>
            </div>

            <div className="input-container relative">
              <label
                htmlFor="drugName"
                className="labels text-md block text-left"
              >
                Drug Name
              </label>
              <input
                value={formDataStep1.drugName}
                onChange={(e) => handleInputChange("drugName", e.target.value)}
                className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
                placeholder="name"
              />
            </div>

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
                    {currencySymbols[formDataStep1.currencyForeign]}
                  </span>
                </div>
                <input
                  type="number"
                  name="priceForeign"
                  id="price"
                  className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-11 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                  placeholder="0.00"
                  value={formDataStep1?.priceForeign}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currencyForeign" className="sr-only ">
                    Foreign Currency
                  </label>
                  <select
                    id="currency"
                    name="currencyForeign"
                    className="w-20 cursor-pointer appearance-none rounded-r-full  border border-[#259f8300] dark:border-black-border bg-white-fg dark:bg-black-fg  py-2 font-normal shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:focus:ring-1 dark:focus:ring-[#5cd3b7] sm:w-20"
                    onChange={(e) =>
                      handleInputChange(e.target.name, e.target.value)
                    }
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
                disabled
                className="converted-price-usd mt-1 w-full rounded-full border border-[#259f8300] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                value={" " + convertToUSD()}
              />
            </div>
            <div className="input-container relative">
              <label className="labels text-md block text-left">
                Foreign Price in LBP
              </label>
              <input
                disabled
                className="converted-price-usd mt-1 w-full rounded-full border border-[#259f8300] dark:border-black-border bg-white-input dark:bg-black-shadow px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                value={
                  " " +
                  parseFloat(convertToLBP().replace(".", "")).toLocaleString(
                    "en-LB"
                  ) /* Add thousands separator */
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
                value={formDataStep1.registrationNumber}
                onChange={(e) =>
                  handleInputChange("registrationNumber", e.target.value)
                }
                className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
                placeholder="reg #"
              />
            </div>

            {/* Text Input 2 */}
            <div className="input-container relative">
              <label
                htmlFor="mohCode"
                className="labels text-md block text-left"
              >
                MOH Code
              </label>
              <input
                value={formDataStep1.mohCode}
                onChange={(e) => handleInputChange("mohCode", e.target.value)}
                className="mt-1 w-full rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                type="text"
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
                    value={formDataStep1.registrationDate}
                    onChange={(e) =>
                      handleInputChange("registrationDate", e.target.value)
                    }
                    type="date"
                    id="registrationDate"
                    name="registrationDate"
                    className="dateInput mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                  />
                </div>
              </label>
            </div>
            {/* <div className="input-container relative">
              <label
                htmlFor="registrationDate"
                className="labels text-md block text-left"
              >
                Registration Date
              </label>
              <div className="relative mt-1">
                <input
                  value={formDataStep1.registrationDate}
                  onChange={(e) =>
                    handleInputChange("registrationDate", e.target.value)
                  }
                  type="date"
                  id="reviewDate"
                  name="reviewDate"
                  className="mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
                />
              </div>
            </div> */}

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
                  onChange={(e) =>
                    handleInputChange("reviewDate", e.target.value)
                  }
                  type="date"
                  id="reviewDate"
                  name="reviewDate"
                  className="dateInput mt-1 w-full cursor-pointer rounded-full border border-[#259f8300] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-2 focus:ring-[#5cd3b7] dark:focus:ring-2 dark:focus:ring-[#5cd3b7]"
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
                    className="text-[#5cd3b7] cursor-pointer hover:text-[#259f83] transition-transform transform-gpu animate-slide-right-left"
                    style={{ fontSize: "30px" }}
                    onClick={handleChildArrowButtonClick}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DrugRegistryForm;
