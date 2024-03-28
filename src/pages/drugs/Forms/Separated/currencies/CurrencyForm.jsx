// // import React, { useState } from "react";
// // import { useCurrenciesContext } from "./CurrenciesContext";
// // import { v4 as uuidv4 } from "uuid";

// // const CurrencyForm = ({ onClose }) => {
// //   const { addCurrency } = useCurrenciesContext();
// //   const [formData, setFormData] = useState({
// //     guid: uuidv4(),
// //     code: "",
// //     name: "",
// //     nameAr: "",
// //     enabled: true,
// //     createdDate: new Date().toISOString(),
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setIsSubmitting(true);
// //       const newCurrency = {
// //         ...formData,
// //       };
// //       await addCurrency(newCurrency, () => {
// //         setCurrencies((prevCurrencies) => [...prevCurrencies, newCurrency]);
// //       });
// //       setFormData({
// //         guid: uuidv4(),
// //         code: "",
// //         name: "",
// //         nameAr: "",
// //         enabled: true,
// //         createdDate: new Date().toISOString(),
// //       });
// //       onClose();
// //     } catch (error) {
// //       //   console.error("Failed to add currency:", error);
// //       // Handle error
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="w-full md:max-w-md mx-auto">
// //       <form
// //         onSubmit={handleSubmit}
// //         // className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
// //       >
// //         <div className="mb-4">
// //           <label
// //             className="block text-gray-700 text-sm font-bold mb-2"
// //             htmlFor="code"
// //           >
// //             Code
// //           </label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="code"
// //             placeholder="Code"
// //             value={formData.code}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label
// //             className="block text-gray-700 text-sm font-bold mb-2"
// //             htmlFor="name"
// //           >
// //             Name
// //           </label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="mb-6">
// //           <label
// //             className="block text-gray-700 text-sm font-bold mb-2"
// //             htmlFor="nameAr"
// //           >
// //             Name Arabic
// //           </label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             name="nameAr"
// //             placeholder="Name Arabic"
// //             value={formData.nameAr}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div className="flex items-center justify-between">
// //           <button
// //             className="med-btn-sec-sm"
// //             type="submit"
// //             disabled={isSubmitting}
// //           >
// //             {isSubmitting ? "Submitting..." : "Submit"}
// //           </button>
// //         </div>
// //       </form>
// //       {/* {successMessage && <p className="text-green-500">{successMessage}</p>}
// //       {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
// //     </div>
// //   );
// // };

// // export default CurrencyForm;

// // // /////////////////
// // // /////////////////
// // // /////////////////
// // // /////////////////

// // // import React, { useState } from "react";
// // // import { useCurrenciesContext } from "./CurrenciesContext";
// // // import { v4 as uuidv4 } from "uuid";

// // // const CurrencyForm = ({ onClose }) => {
// // //   const { addCurrency, addCurrencyRate } = useCurrenciesContext();
// // //   const [formData, setFormData] = useState({
// // //     currency: {
// // //       guid: uuidv4(),
// // //       code: "",
// // //       name: "",
// // //       nameAr: "",
// // //       enabled: true,
// // //       createdDate: new Date().toISOString(),
// // //     },
// // //     currencyRate: {
// // //       rate: "",
// // //       fromDate: "",
// // //       toDate: "",
// // //     },
// // //     isCurrencyRate: false, // Flag to indicate if it's a currency rate form
// // //   });
// // //   const [isSubmitting, setIsSubmitting] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevFormData) => ({
// // //       ...prevFormData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       setIsSubmitting(true);
// // //       if (formData.isCurrencyRate) {
// // //         // If it's a currency rate form, add currency rate
// // //         await addCurrencyRate(formData.currencyRate);
// // //       } else {
// // //         // Otherwise, add currency
// // //         await addCurrency(formData.currency);
// // //       }
// // //       onClose();
// // //     } catch (error) {
// // //       // Handle error
// // //       console.error("Failed to add currency or currency rate:", error);
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   const handleToggleForm = () => {
// // //     // Toggle between currency and currency rate forms
// // //     setFormData((prevFormData) => ({
// // //       ...prevFormData,
// // //       isCurrencyRate: !prevFormData.isCurrencyRate,
// // //     }));
// // //   };

// // //   return (
// // //     <div>
// //       {formData.isCurrencyRate ? (
// //         <form onSubmit={handleSubmit}>
// // //           {/* Currency Rate form fields */}
// // //           <input
// // //             type="text"
// // //             name="rate"
// // //             value={formData.currencyRate.rate}
// // //             onChange={handleChange}
// // //             placeholder="Rate"
// // //             required
// // //           />
// // //           <input
// // //             type="datetime-local"
// // //             name="fromDate"
// // //             value={formData.currencyRate.fromDate}
// // //             onChange={handleChange}
// // //             placeholder="From Date"
// // //             required
// // //           />
// // //           <input
// // //             type="datetime-local"
// // //             name="toDate"
// // //             value={formData.currencyRate.toDate}
// // //             onChange={handleChange}
// // //             placeholder="To Date"
// // //             required
// // //           />
// // //           <button type="submit">Add Currency Rate</button>
// // //         </form>
// // //       ) : (
// // //         <form onSubmit={handleSubmit}>
// // //           {/* Currency form fields */}
// // //           <input
// // //             type="text"
// // //             name="code"
// // //             value={formData.currency.code}
// // //             onChange={handleChange}
// // //             placeholder="Code"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={formData.currency.name}
// // //             onChange={handleChange}
// // //             placeholder="Name"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="nameAr"
// // //             value={formData.currency.nameAr}
// // //             onChange={handleChange}
// // //             placeholder="Name Arabic"
// // //             required
// // //           />
// // //           <button type="submit">Add Currency</button>
// // //         </form>
// // //       )}
// // //       <button onClick={handleToggleForm}>
// // //         {formData.isCurrencyRate
// // //           ? "Switch to Currency Form"
// // //           : "Switch to Currency Rate Form"}
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default CurrencyForm;
// import React, { useState } from "react";
// import { useCurrenciesContext } from "./CurrenciesContext";
// import { v4 as uuidv4 } from "uuid";

// const CurrencyForm = ({ onClose }) => {
//   const { addCurrencyRate, currencies } = useCurrenciesContext();
//   const [formData, setFormData] = useState({
//     fromCurGuid: "",
//     toCurGuid: "",
//     fromDate: "",
//     toDate: "",
//     rate: 0.1,
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setIsSubmitting(true);
//       await addCurrencyRate({
//         ...formData,
//         guid: uuidv4(),
//         fromCurCode: currencies.find((cur) => cur.guid === formData.fromCurGuid)
//           .code,
//         toCurCode: currencies.find((cur) => cur.guid === formData.toCurGuid)
//           .code,
//         createdDate: new Date().toISOString(),
//       });
//       onClose();
//     } catch (error) {
//       console.error("Failed to add currency rate:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <select
//           name="fromCurGuid"
//           value={formData.fromCurGuid}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select From Currency</option>
//           {currencies.map((currency) => (
//             <option key={currency.guid} value={currency.guid}>
//               {currency.code}
//             </option>
//           ))}
//         </select>
//         <select
//           name="toCurGuid"
//           value={formData.toCurGuid}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select To Currency</option>
//           {currencies.map((currency) => (
//             <option key={currency.guid} value={currency.guid}>
//               {currency.code}
//             </option>
//           ))}
//         </select>
//         <input
//           type="datetime-local"
//           name="fromDate"
//           value={formData.fromDate}
//           onChange={handleChange}
//           placeholder="From Date"
//           required
//         />
//         <input
//           type="datetime-local"
//           name="toDate"
//           value={formData.toDate}
//           onChange={handleChange}
//           placeholder="To Date"
//           required
//         />
//         <input
//           type="number"
//           name="rate"
//           value={formData.rate}
//           onChange={handleChange}
//           placeholder="Rate"
//           step="0.01"
//           required
//         />
//         <button type="submit">Add Currency Rate</button>
//       </form>
//     </div>
//   );
// };

import { v4 as uuidv4 } from "uuid";
// export default CurrencyForm;
import React, { useState } from "react";

import { useCurrenciesContext } from "./CurrenciesContext";

const CurrencyForm = ({ onClose }) => {
  const { addCurrency, addCurrencyRate, currencies } = useCurrenciesContext();
  const [formData, setFormData] = useState({
    currency: {
      guid: uuidv4(),
      code: "",
      name: "",
      nameAr: "",
      enabled: true,
      createdDate: new Date().toISOString(),
    },
    currencyRate: {
      fromCurGuid: "",
      toCurGuid: "",
      fromDate: "",
      toDate: "",
      rate: 0,
    },
    isCurrencyRate: false, // Flag to indicate if it's a currency rate form
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      currencyRate: {
        ...prevFormData.currencyRate,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      if (formData.isCurrencyRate) {
        await addCurrencyRate({
          ...formData.currencyRate,
          guid: uuidv4(),
          fromCurCode: currencies.find(
            (cur) => cur.guid === formData.currencyRate.fromCurGuid
          ).code,
          toCurCode: currencies.find(
            (cur) => cur.guid === formData.currencyRate.toCurGuid
          ).code,
          createdDate: new Date().toISOString(),
        });
      } else {
        await addCurrency(formData.currency);
      }
      onClose();
    } catch (error) {
      console.error("Failed to add currency or currency rate:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleForm = () => {
    // Toggle between currency and currency rate forms
    setFormData((prevFormData) => ({
      ...prevFormData,
      isCurrencyRate: !prevFormData.isCurrencyRate,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      {formData.isCurrencyRate ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <select
            name="fromCurGuid"
            value={formData.fromCurGuid}
            onChange={handleChange}
            required
          >
            <option value="">Select From Currency</option>
            {currencies.map((currency) => (
              <option key={currency.guid} value={currency.guid}>
                {currency.code}
              </option>
            ))}
          </select>
          <select
            name="toCurGuid"
            value={formData.toCurGuid}
            onChange={handleChange}
            required
          >
            <option value="">Select To Currency</option>
            {currencies.map((currency) => (
              <option key={currency.guid} value={currency.guid}>
                {currency.code}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="rate"
            value={formData.currencyRate.rate}
            onChange={handleChange}
            placeholder="Rate"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
          <input
            type="datetime-local"
            name="fromDate"
            value={formData.currencyRate.fromDate}
            onChange={handleChange}
            placeholder="From Date"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
          <input
            type="datetime-local"
            name="toDate"
            value={formData.currencyRate.toDate}
            onChange={handleChange}
            placeholder="To Date"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
          <button type="submit" className="med-btn-sec-sm">
            Add Currency Rate
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Currency form fields */}
          <input
            type="text"
            name="code"
            value={formData.currency.code}
            onChange={handleChange}
            placeholder="Code"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
          <input
            type="text"
            name="name"
            value={formData.currency.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
          <input
            type="text"
            name="nameAr"
            value={formData.currency.nameAr}
            onChange={handleChange}
            placeholder="Name Arabic"
            required
            className="mb-4 p-2 border rounded-md w-full"
          />
          <button type="submit" className="med-btn-sec-sm">
            Add Currency
          </button>
        </form>
      )}
      <button
        onClick={handleToggleForm}
        className="mt-4 text-blue-500 font-semibold"
      >
        {formData.isCurrencyRate ? "Add new currency" : "Add new rate"}
      </button>
    </div>
  );
};

export default CurrencyForm;
