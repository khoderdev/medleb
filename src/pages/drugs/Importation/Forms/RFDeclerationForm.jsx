import React, { useState } from "react";

const RFDeclerationForm = ({
  handleInputChange,
  formDataStep2,
  formDataStep3,
}) => {
  const [uploadedPFI, setUploadedPFI] = useState(false);
  const [uploadedSwift, setUploadedSwift] = useState(false);
  const [dateValue, setDateValue] = useState(formDataStep2?.PFIdate || "");

  const handlePFIUpload = (e) => {
    const selectedPFI = e.target.files[0];
    setUploadedPFI(selectedPFI ? true : false);
  };

  const handleSwiftUpload = (e) => {
    const selectedSwift = e.target.files[0];
    setUploadedSwift(selectedSwift ? true : false);
  };

  const handlePFIClick = () => {
    if (uploadedPFI) {
      setUploadedPFI(false);
    } else {
      document.getElementById("attachPFI").click();
    }
  };

  const handleSwiftClick = () => {
    if (uploadedSwift) {
      setUploadedSwift(false);
    } else {
      document.getElementById("attachSwift").click();
    }
  };

  const handleDateChange = (e) => {
    const newDateValue = e.target.value;
    setDateValue(newDateValue);
  };

  return (
    <div className="grid grid-cols-1 w-full md:w-3/4 gap-10 text-black-text dark:text-white-text">
      {/* RESULT SECTION */}
      <h1 className="pt-4 text-center dark:text-white-contents text-lg sm:pt-10 sm:text-xl ">
        2 - Request For Decleration
      </h1>
      <div className="flex flex-col">
        <label
          htmlFor="PFInumber"
          className="labels text-lg font-bold pl-6 mb-4 text-left"
        >
          RESULT
        </label>
        <div className=" dark:text-white-text rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-bg sm:px-6 py-4 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri">
          <div className="grid grid-cols-2 gap-10 md:gap-32 px-4 sm:px-10 items-center">
            {/* Column 1 */}
            <div className="mb-4 text-center border-b border-black-fg">
              <p className=" text-white text-lg pb-2">Status</p>
              <p className="text-green-pri font-bold">Approved</p>
            </div>

            {/* Column 2 */}
            <div className=" mb-4 text-center border-b border-black-fg">
              <p className="text-white text-lg pb-2">QTY Approved</p>
              <p className="text-green-pri font-bold">100</p>
            </div>
          </div>
        </div>
      </div>

      {/*/////////////////////////////////////////////////////////////////////////// */}

      {/* PFI SECTION */}
      <div className="flex flex-col">
        <label
          htmlFor="PFInumber"
          className="labels text-lg font-bold pl-6 mb-4 text-left"
        >
          Proforma Invoice
        </label>
        <div className=" dark:text-white-text rounded-[5em] sm:rounded-[6em] border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-4 font-normal shadow-md dark:shadow-black-shadow">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-10 items-center">
            {/* Column 1 */}
            <div className="mb-4 text-center border-b border-[#00a651] text-white">
              <label
                htmlFor="PFInumber"
                className="labels text-lg block text-center"
              >
                Number
              </label>
              <input
                id="PFInumber"
                name="PFInumber"
                onChange={(e) => handleInputChange(e)}
                value={formDataStep2?.PFInumber}
                className="w-3/4 sm:w-full input-field mx-auto border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-black-input rounded-full"
                type="text"
                autoComplete="off"
              />
            </div>

            {/* Column 2 */}
            <div className="mb-4 text-center border-b border-[#00a651] text-white">
              <label
                htmlFor="PFIdate"
                className="labels text-lg block text-center"
              >
                Date
              </label>
              <input
                id="PFIdate"
                name="PFIdate"
                onChange={(e) => handleDateChange(e)}
                value={formDataStep2?.PFIdate}
                className="w-full pl-6 sm:pl-0 input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-black-input rounded-full"
                type="date"
                autoComplete="off"
              />
            </div>

            {/* Column 3 */}
            <div className="mb-4 text-center border-b border-[#00a651] text-white">
              <label
                htmlFor="PFIamount"
                className="labels text-lg block text-center"
              >
                Amount
              </label>
              <input
                id="PFIamount"
                name="PFIamount"
                value={formDataStep2?.PFIamount}
                onChange={(e) => handleDateChange(e)}
                className=" w-3/4 sm:w-full input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-black-input rounded-full autofill:bg-transparent"
                type="text"
                autoComplete="off"
              />
            </div>

            {/* Column 4 */}
            <div className="mx-auto">
              {uploadedPFI ? (
                <div
                  className="med-btn text-[#4edab9] font-bold border-2 border-green-sec hover:border-green-pri px-6 py-2 rounded-full cursor-pointer"
                  onClick={() => setUploadedPFI(false)}
                >
                  <span className="px-8">Uploaded ✔</span>
                </div>
              ) : (
                <label className="med-btn border-2 border-green-pri px-6 py-3 text-[#00a651] font-bold p-2 dark:bg-black-input rounded-full cursor-pointer">
                  <span className="text-[#00a651] px-8">Attach</span>
                  <input
                    type="file"
                    id="attach"
                    className="hidden"
                    value={formDataStep2?.PFIdoc}
                    onChange={(e) => handlePFIUpload(e)}
                  />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////// */}

      {/* SWIFT SECTION */}
      <div className="flex flex-col">
        <label
          htmlFor="swiftNumber"
          className="labels text-lg font-bold pl-6 mb-4 text-left"
        >
          Swift
        </label>

        <div className=" dark:text-white-text rounded-[5em] sm:rounded-[6em] border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-4 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-10 items-center">
            {/* Column 1 */}
            <div className="mb-4 text-center border-b border-[#00a651] text-white">
              <label
                htmlFor="swiftNumber"
                className="labels text-lg block text-center"
              >
                Number
              </label>
              <input
                id="swiftNumber"
                name="swiftNumber"
                onChange={(e) => handleInputChange(e)}
                value={formDataStep3?.swiftNumber}
                className="w-3/4 sm:w-full input-field mx-auto border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-black-input rounded-full"
                type="text"
                autoComplete="off"
              />
            </div>

            {/* Column 2 */}
            <div className="mb-4 text-center border-b border-[#00a651] text-white">
              <label
                htmlFor="swiftDate"
                className="labels text-lg block text-center"
              >
                Date
              </label>
              <input
                id="swiftDate"
                name="swiftDate"
                onChange={(e) => handleDateChange(e)}
                value={formDataStep3?.swiftDate}
                className="w-full pl-6 sm:pl-0 input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-black-input rounded-full"
                type="date"
                autoComplete="off"
              />
            </div>

            {/* Column 3 */}
            <div className="mb-4 text-center border-b border-[#00a651] text-white">
              <label
                htmlFor="swiftAmount"
                className="labels text-lg block text-center"
              >
                Amount
              </label>
              <input
                id="swiftAmount"
                name="swiftAmount"
                value={formDataStep3?.swiftAmount}
                onChange={(e) => handleDateChange(e)}
                className=" w-3/4 sm:w-full input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-black-input rounded-full autofill:bg-transparent"
                type="text"
                autoComplete="off"
              />
            </div>

            {/* Column 4 */}
            <div className="mx-auto">
              {uploadedSwift ? (
                <div
                  className="med-btn text-[#4edab9] font-bold border-2 border-green-sec hover:border-green-pri px-6 py-2 rounded-full cursor-pointer"
                  onClick={() => setUploadedSwift(false)}
                >
                  <span className="px-8">Uploaded ✔</span>
                </div>
              ) : (
                <label className="med-btn border-2 border-green-pri px-6 py-3 text-[#00a651] font-bold p-2 dark:bg-black-input rounded-full cursor-pointer">
                  <span className="text-[#00a651] px-8">Attach</span>
                  <input
                    type="file"
                    id="attachSwift"
                    className="attachSwift hidden"
                    value={formDataStep3?.SWIFTdoc}
                    onChange={(e) => handleSwiftUpload(e)}
                  />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFDeclerationForm;
