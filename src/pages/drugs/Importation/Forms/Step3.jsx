import React, { useState } from "react";

const Step3 = ({ handleInputChange, formDataStep2 }) => {
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
      // If already uploaded, allow clicking to clear the selection
      setUploadedPFI(false); // Fix: use setUploadedPFI instead of uploadedPFI
    } else {
      // If not uploaded, trigger file input click to open the file picker
      document.getElementById("attachPFI").click();
    }
  };

  const handleSwiftClick = () => {
    if (uploadedSwift) {
      // If already uploaded, allow clicking to clear the selection
      setUploadedSwift(false); // Fix: use setUploadedSwift instead of uploadedSwift
    } else {
      document.getElementById("attachSwift").click();
    }
  };

  const handleDateChange = (e) => {
    const newDateValue = e.target.value;
    setDateValue(newDateValue);
    // console.log(newDateValue);
    // Optionally, you can perform any other logic related to date changes here
  };

  return (
    <div className="grid grid-cols-1 gap-14 p-10  bg-white-contents">
      {/* RESULT SECTION */}
      <div className="dark:text-white-text rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-4 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri">
        <div className="grid grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="px-4 mb-4 text-center">
            <p className="border-b border-[#00a651] text-white pb-4">
              Column 1
            </p>
          </div>

          {/* Column 2 */}
          <div className="relative px-4 mb-4 text-center">
            <div className="border-l border-[#00a651] h-full absolute left-0 top-0 bottom-0"></div>
            <p className="border-b border-[#00a651] text-white pb-4 pl-4">
              Column 4
            </p>
          </div>
          {/* <div className="px-4 mb-4 text-center">
            <p className="border-b border-[#00a651] text-white pb-4">
              Column 4
            </p>
          </div> */}
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Proforma Invoice SECTION*/}
      <div className="dark:text-white-text rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-12 py-4 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri">
        <div className="flex flex-col gap-6">
          <div className="row-1 flex justify-around items-center">
            {/* Column 1 */}
            <div className="relative px-4 mb-4 text-center border-b border-[#00a651]">
              <label
                htmlFor="PFInumber"
                className="labels text-xl block text-center"
              >
                Number
              </label>
              <input
                id="PFInumber"
                name="PFInumber"
                onChange={(e) => handleInputChange(e)}
                value={formDataStep2?.PFInumber}
                className="input-field rounded-full bg-white-bg dark:bg-black-input border-black-input"
                type="text"
                placeholder=""
              />
            </div>

            <div className="relative px-4 mb-4 text-center border-b border-[#00a651]">
              {/* Column 2 */}
              <label
                htmlFor="PFIdate"
                className="labels text-xl block text-center"
              >
                Date
              </label>
              <input
                id="PFIdate"
                name="PFIdate"
                onChange={(e) => handleDateChange(e)}
                value={formDataStep2?.PFIdate}
                className="input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 dark:bg-black-input rounded-full"
                type="date"
                placeholder=""
              />
            </div>
          </div>

          <div className="row-2 flex justify-around items-center">
            {/* Column 1 */}
            <div className="relative px-4 mb-4 text-center border-b border-[#00a651]">
              <label
                htmlFor="PFIamount"
                className="labels text-xl block text-center"
              >
                Amount
              </label>
              <input
                id="PFIamount"
                name="PFIamount"
                value={formDataStep2?.PFIamount}
                onChange={(e) => handleDateChange(e)}
                className="input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 dark:bg-black-input rounded-full"
                type="text"
                placeholder=""
              />
            </div>

            {/* Vertical Divider
          <div className="border-l border-[#00a651] h-full absolute left-0 top-0 bottom-0"></div> */}

            {/* Column 2 */}
            <div className="px-4 mb-4 text-center border rounded-full border-[#00a651]">
              {uploadedPFI ? (
                <div
                  className="text-[#4edab9] font-bold py-2 cursor-pointer"
                  onClick={() => setUploadedPFI(false)}
                >
                  <span>Uploaded</span>
                </div>
              ) : (
                <label className="flex items-center justify-center bg-white text-[#00a651] font-bold p-2 dark:bg-black-input rounded-full cursor-pointer">
                  <span>Attach</span>
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

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* SWIFT SECTION */}
      <div className="dark:text-white-text rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-6 py-4 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri">
        <div className="grid grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="px-4 mb-4 text-center">
            <p className="border-b border-[#00a651] text-white pb-4">
              Column 1
            </p>
          </div>

          {/* Column 2 */}
          <div className="px-4 mb-4 text-center">
            <p className="border-b border-[#00a651] text-white pb-4">
              Column 1
            </p>
          </div>

          {/* Column 3 */}
          <div className="px-4 mb-4 text-center">
            <p className="border-b border-[#00a651] text-white pb-4">
              Column 1
            </p>
          </div>

          {/* Column 4 */}
          <div className="px-4 mb-4 text-center">
            <p className="border-b border-[#00a651] text-white pb-4">
              Column 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
