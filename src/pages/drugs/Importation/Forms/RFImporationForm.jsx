import React from "react";
import "../styles.css";

const RFImportationForm = ({ handleInputChange, formDataStep1 }) => {
  return (
    <>
      <div className="col-span-1 flex w-full sm:w-[70em] flex-col sm:col-span-1 text-black-text dark:text-white-text">
        <div className="flex flex-col justify-items-center">
          <h1 className="pt-6 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
            1 - Request For importation
          </h1>
        </div>
        <div className=" flex h-full w-full flex-col">
          <form className="grid grid-cols-1 items-center gap-8 lg:gap-16 dark:text-white-text sm:grid-cols-1 sm:justify-items-center md:grid-cols-2 lg:grid-cols-2 py-16">
            <div className="input-container relative">
              <label
                htmlFor="RequestedDrug"
                className="labels text-lg block text-left font-medium"
              >
                Select Requested Drug
              </label>
              <input
                value={formDataStep1.RequestedDrug}
                onChange={(e) =>
                  handleInputChange("RequestedDrug", e.target.value)
                }
                className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                type="text"
                placeholder="drug name"
              />
            </div>
            <div className="input-container relative">
              <label
                htmlFor="quantityRequested"
                className="labels text-lg block text-left font-medium"
              >
                Quantity Requested
              </label>
              <input
                value={formDataStep1.quantityRequested}
                onChange={(e) =>
                  handleInputChange("quantityRequested", e.target.value)
                }
                className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                type="text"
                placeholder="qty"
              />
            </div>
            <div className="input-container relative">
              <label htmlFor="notes" className="labels text-lg block text-left font-bold">
                Offer
              </label>
              <div className="offer-container mt-1 h-24 w-full flex justify-center items-center gap-4 xl:gap-10 sm:px-6 rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri">
                <div className="col-1 flex flex-col w-[6em] xs:w-[14em] border-b-2 border-[#00a65159] hover:border-green-pri">
                  {/* <div className="offerType-col flex flex-col border-red-500 border"> */}
                  <label htmlFor="offerType" className="labels text-md block">
                    Type
                  </label>
                  <select
                    value={formDataStep1.offerType}
                    onChange={(e) =>
                      handleInputChange("offerType", e.target.value)
                    }
                    className="cursor-pointer bg-white-bg border-none focus:ring-transparent outline-none p-2 dark:bg-black-input rounded-full"
                    type="text"
                    placeholder=""
                  >
                    <option value="" disabled>
                      select
                    </option>
                    <option>type 1</option>
                    <option>type 2</option>
                    <option>type 3</option>
                  </select>
                </div>
                {/* </div> */}

                {/* <div class="vl"></div> */}

                <div className="col-2 flex flex-col w-[6em] xs:w-[14em] border-b-2 border-[#00a65159] hover:border-green-pri">
                  <label
                    htmlFor="offerPercentage"
                    className="labels text-md block"
                  >
                    Percentage
                  </label>
                  <select
                    value={formDataStep1.offerPercentage}
                    onChange={(e) =>
                      handleInputChange("offerPercentage", e.target.value)
                    }
                    className=" cursor-pointer bg-white-bg  border-none focus:ring-transparent outline-none p-2 dark:bg-black-input rounded-full"
                    type="text"
                    placeholder="%"
                  >
                    <option value="" disabled>
                      select
                    </option>
                    <option>5%</option>
                    <option>10%</option>
                    <option>20%</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="input-container relative">
              <label htmlFor="notes" className="labels text-lg block text-left">
                Notes
              </label>
              <textarea
                value={formDataStep1.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="mt-1 w-full h-24 rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                type="text"
                placeholder=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RFImportationForm;
