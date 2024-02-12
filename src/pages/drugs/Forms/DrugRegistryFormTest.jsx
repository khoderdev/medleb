// import "./styles.css";
// import { DrugProvider, useDrugContext } from "../DrugContext";

// const DrugRegistryFormTest = () => {
//   const { formData, handleInputChange } = useDrugContext();

//   return (
//     <>
//       <div className="col-span-1 flex flex-col w-full  h-full sm:col-span-1 text-black-text dark:text-white-text justify-center p-6">
//         <h1 className="pb-2 pt-2 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
//           1 - Drug Registry Informations
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-10 pt-6">
//           <div className="input-container relative">
//             <label
//               htmlFor="BrandName"
//               className="labels text-md block text-left"
//             >
//               Drug Name
//             </label>
//             <input
//               name="BrandName"
//               value={formData.BrandName}
//               onChange={handleInputChange}
//               type="text"
//               autoComplete="off"
//               placeholder="name"
//               className="w-full"
//             />
//           </div>

//           <div className="input-group">
//             <label
//               className="labels text-md block text-left"
//               htmlFor="PriceUSD"
//             >
//               Price Foreign:
//             </label>
//             <input
//               type="number"
//               id="PriceFOREIGN"
//               name="PriceFOREIGN"
//               value={formData.PriceFOREIGN}
//               onChange={handleInputChange}
//               required
//               className="w-full"
//             />
//           </div>

//           <div className="input-group">
//             <label
//               className="labels text-md block text-left"
//               htmlFor="PriceUSD"
//             >
//               Price USD:
//             </label>
//             <input
//               type="number"
//               id="PriceUSD"
//               name="PriceUSD"
//               value={formData.PriceUSD}
//               onChange={handleInputChange}
//               required
//               className="w-full"
//             />
//           </div>

//           <div className="input-group">
//             <label
//               className="labels text-md block text-left"
//               htmlFor="PriceLBP"
//             >
//               Price LBP:
//             </label>
//             <input
//               type="number"
//               id="PriceLBP"
//               name="PriceLBP"
//               value={formData.PriceLBP}
//               onChange={handleInputChange}
//               required
//               className="w-full"
//             />
//           </div>

//           <div className="input-container relative">
//             <label
//               htmlFor="RegistrationNumber"
//               className="labels text-md block text-left"
//             >
//               Registration Number
//             </label>
//             <input
//               name="RegistrationNumber"
//               value={formData.RegistrationNumber}
//               onChange={handleInputChange}
//               type="text"
//               autoComplete="off"
//               placeholder="reg #"
//               className="w-full"
//             />
//           </div>

//           {/* Text Input 2 */}
//           <div className="input-container relative">
//             <label htmlFor="Code" className="labels text-md block text-left">
//               MOH Code
//             </label>
//             <input
//               name="Code"
//               value={formData.Code}
//               onChange={handleInputChange}
//               type="text"
//               autoComplete="off"
//               placeholder="code"
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DrugRegistryFormTest;

// ///////////////////////////
// ///////////////////////////
// ///////////////////////////
// ///////////////////////////

import { useEffect, useState } from "react";
import "./styles.css";
import { DrugProvider, useDrugContext } from "../DrugContext";

const DrugRegistryFormTest = () => {
  const { formData, handleInputChange, priceUSD, priceLBP } = useDrugContext();
  // const [priceUSD, setPriceUSD] = useState("");
  // const [priceLBP, setPriceLBP] = useState("");

  const exchangeRates = {
    USD: 1,
    CAD: 0.72,
    EUR: 1.06,
    CHF: 1.11,
    DKK: 0.72,
    GBP: 1.21,
    SAR: 0.27,
    JOD: 1.41,
    LBP: 90000,
  };

  const currencySymbols = {
    USD: "$",
    CAD: "C$",
    EUR: "€",
    CHF: "CHF",
    DKK: "kr",
    GBP: "£",
    SAR: "SAR",
    JOD: "JD",
    LBP: "LBP",
  };

  useEffect(() => {
    const convertToUSD = () => {
      if (formData.PriceFOREIGN && formData.currencyForeign) {
        const convertedPrice =
          formData.PriceFOREIGN / exchangeRates[formData.currencyForeign];
        console.log("Converted Price USD:", convertedPrice);
        return convertedPrice.toFixed(2);
      }
      return "";
    };

    const convertToLBP = () => {
      if (formData.PriceFOREIGN && formData.currencyForeign) {
        const priceInUSD = convertToUSD();
        const convertedPrice = priceInUSD * exchangeRates.LBP;
        console.log("Converted Price LBP:", convertedPrice);
        return convertedPrice.toFixed(2);
      }
      return "";
    };

    // Calculate converted prices
    const newPriceUSD = convertToUSD();
    const newPriceLBP = convertToLBP();

    // Update formData.PriceUSD and formData.PriceLBP
    handleInputChange({ target: { name: "PriceUSD", value: newPriceUSD } });
    handleInputChange({ target: { name: "PriceLBP", value: newPriceLBP } });
  }, [formData.PriceFOREIGN, formData.currencyForeign]); // Update only when PriceFOREIGN or currencyForeign change

  return (
    <>
      <div className="col-span-1 flex flex-col w-full  h-full sm:col-span-1 text-black-text dark:text-white-text justify-center p-6">
        <h1 className="pb-2 pt-2 text-center text-[1.375rem] xs:text-xl sm:py-10 font-medium">
          1 - Drug Registry Informations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-10 pt-6">
          <div className="input-container relative">
            <label
              htmlFor="BrandName"
              className="labels text-md block text-left"
            >
              Drug Name
            </label>
            <input
              name="BrandName"
              value={formData.BrandName}
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              placeholder="name"
              className="w-full"
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="PriceFOREIGN"
              className="labels text-md mb-2 block text-left"
            >
              Foreign Price
            </label>
            <input
              name="PriceFOREIGN"
              type="number"
              value={formData.PriceFOREIGN}
              onChange={handleInputChange}
            />
            <select
              name="currencyForeign"
              value={formData.currencyForeign}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select currency
              </option>
              {/* Iterate over currencySymbols to generate options */}
              {Object.entries(currencySymbols).map(([currency, symbol]) => (
                <option key={currency} value={currency}>
                  {`${symbol} ${currency}`}{" "}
                  {/* Display symbol and currency code */}
                </option>
              ))}
            </select>
          </div>

          {/* Converted price inputs */}
          <div className="input-container relative">
            <label className="labels text-md block text-left">
              Foreign Price in USD
            </label>
            <input
              name="PriceUSD"
              // disabled
              // value={formData.convertedToUSD}
              // value={" " + convertToUSD()}
              // value={priceUSD}
              // value={
              //   formData.PriceUSD !== undefined
              //     ? formData.PriceUSD
              //     : convertToUSD()
              // }
              // onChange={handleInputChange}
              value={priceUSD}
              readOnly /* Make the input read-only */
            />
          </div>
          <div className="input-container relative">
            <label className="labels text-md block text-left">
              Foreign Price in LBP
            </label>
            <input
              name="PriceLBP"
              // disabled
              // value={formData.convertedToLBP}
              // value={" " + convertToLBP()}
              // value={priceLBP}
              // value={
              //   formData.PriceLBP !== undefined
              //     ? formData.PriceLBP
              //     : convertToLBP()
              // }
              // onChange={handleInputChange}
              value={priceLBP}
              readOnly
            />
          </div>

          <div className="input-container relative">
            <label
              htmlFor="RegistrationNumber"
              className="labels text-md block text-left"
            >
              Registration Number
            </label>
            <input
              name="RegistrationNumber"
              value={formData.RegistrationNumber}
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              placeholder="reg #"
              className="w-full"
            />
          </div>
          {/* Text Input 2 */}
          <div className="input-container relative">
            <label htmlFor="Code" className="labels text-md block text-left">
              MOH Code
            </label>
            <input
              name="Code"
              value={formData.Code}
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              placeholder="code"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DrugRegistryFormTest;
