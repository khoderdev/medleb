// // import React, { useState } from 'react';

// // const BatchSerials = ({ onClose }) => {
// //   const [numSerials, setNumSerials] = useState(1);
// //   const [serialValues, setSerialValues] = useState(Array.from({ length: numSerials }, () => ''));

// //   const handleInputChange = (index, event) => {
// //     const values = [...serialValues];
// //     values[index] = event.target.value;
// //     setSerialValues(values);
// //   };

// //   const handleNumSerialsChange = (event) => {
// //     const newNumSerials = parseInt(event.target.value);
// //     setNumSerials(newNumSerials);
// //     setSerialValues(Array.from({ length: newNumSerials }, (_, index) => serialValues[index] || ''));
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     console.log('Serial Values:', serialValues);
// //     onClose();
// //   };

// //   return (
// //     <div className="modal">
// //       <div className="modal-content">
// //         <span className="close" onClick={onClose}>&times;</span>
// //         <h2>Enter Serial Numbers</h2>
// //         <form onSubmit={handleSubmit}>
// //           <label>Number of Serials:</label>
// //           <input type="number" value={numSerials} onChange={handleNumSerialsChange} />
// //           {Array.from({ length: numSerials }, (_, index) => (
// //             <div key={index}>
// //               <label>Serial {index + 1}:</label>
// //               <input
// //                 type="text"
// //                 value={serialValues[index]}
// //                 onChange={(event) => handleInputChange(index, event)}
// //               />
// //             </div>
// //           ))}
// //           <button type="submit">Submit</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BatchSerials;
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////

// import React, { useState } from "react";

// const BatchSerials = ({ onClose, onAddSerials }) => {
//   const [numSerials, setNumSerials] = useState(1);
//   const [serialValues, setSerialValues] = useState(Array(numSerials).fill(""));

//   const handleInputChange = (index, event) => {
//     const values = [...serialValues];
//     values[index] = event.target.value;
//     setSerialValues(values);
//   };

//   const handleNumSerialsChange = (event) => {
//     const newNumSerials = parseInt(event.target.value);
//     if (!isNaN(newNumSerials) && newNumSerials >= 0) {
//       setNumSerials(newNumSerials);
//       setSerialValues(Array(newNumSerials).fill(""));
//     } else {
//       setNumSerials(0);
//       setSerialValues([]);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onAddSerials(serialValues);
//     onClose();
//   };

//   return (
//     <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center text-white-text">
//       <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

//       <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
//         <div className="modal-content py-4 text-left px-6">
//           <div className="flex justify-between items-center pb-3">
//             <p className="text-lg font-semibold">Enter Serial Numbers</p>
//             <button
//               onClick={onClose}
//               className="modal-close cursor-pointer z-50"
//             >
//               <svg
//                 className="fill-current text-black"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 18 18"
//               >
//                 <path d="M15.586 1.586a2 2 0 10-2.828 2.828L9 7.828 4.242 3.07A2 2 0 101.414 5.9L6.172 9.93 1.05 15.05a2 2 0 102.828 2.828l4.768-4.768 4.121 4.122a2 2 0 002.828-2.828L11.828 9l4.768-4.768a2 2 0 000-2.828z" />
//               </svg>
//             </button>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-lg mb-2">Number of Serials:</label>
//               <div className="flex justify-center items-center">
//                 <button
//                   type="button"
//                   className="bg-gray-300 dark:bg-black-contents text-gray-600 dark:text-green-pri w-8 h-8 rounded-full"
//                   onClick={() =>
//                     handleNumSerialsChange({
//                       target: { value: numSerials - 1 },
//                     })
//                   }
//                 >
//                   -
//                 </button>
//                 <input
//                   type="number"
//                   value={numSerials}
//                   onChange={(e) => handleNumSerialsChange(e)}
//                   className="input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-transparent rounded-full autofill:bg-transparent mx-2"
//                 />
//                 <button
//                   type="button"
//                   className="bg-gray-300 dark:bg-black-contents text-gray-600 dark:text-green-pri w-8 h-8 rounded-full"
//                   onClick={() =>
//                     handleNumSerialsChange({
//                       target: { value: numSerials + 1 },
//                     })
//                   }
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             <div className="overflow-y-auto max-h-60">
//               {" "}
//               {/* Set max height here */}
//               {Array.from({ length: numSerials }, (_, index) => (
//                 <div key={index} className="mb-4">
//                   <label className="block text-lg mb-2">
//                     Serial {index + 1}:
//                   </label>
//                   <input
//                     type="text"
//                     value={serialValues[index]}
//                     onChange={(event) => handleInputChange(index, event)}
//                     className="input-field border-none text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-transparent rounded-full autofill:bg-transparent"
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-end">
//               <button type="submit" className="btn-pri">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BatchSerials;

// //////////////////////////////////
// //////////////////////////////////
// //////////////////////////////////

import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const BatchSerials = ({ onClose, onAddSerials }) => {
  const [numSerials, setNumSerials] = useState(1);
  const [serialValues, setSerialValues] = useState(Array(numSerials).fill(""));

  const handleInputChange = (index, event) => {
    const values = [...serialValues];
    values[index] = event.target.value;
    setSerialValues(values);
  };

  const handleNumSerialsChange = (event) => {
    let newNumSerials = parseInt(event.target.value);
    if (isNaN(newNumSerials)) newNumSerials = 0;
    setNumSerials(newNumSerials);
    setSerialValues(Array(newNumSerials).fill(""));
  };

  const handleAdd = () => {
    onAddSerials(serialValues);
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddSerials(serialValues);
    onClose();
  };

  return (
    <div className="modal fixed w-full h-screen top-0 left-0 flex items-center justify-center dark:text-white-text z-50 p-4 py-1">
      <div className="absolute w-full h-full bg-white-bg dark:bg-black-bg"></div>
      <div className="modal-container bg-white-contents dark:bg-black-contents md:w-3/4 mx-auto mt- rounded-3xl shadow-lg z-50 overflow-y-auto h-full">
        <div className="modal-content flex flex-col h-32 text-center px-6 sticky top-0 z-50 bg-white-input dark:bg-black-fg">
          <div className="flex justify-end items-center pt-4 mb-[-1rem]">
            <CloseIcon onClick={onClose} fontSize="small cursor-pointer z-50" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg md:text-xl">
                Count of Serials Numbers
              </label>
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  className="bg-gray-300 dark:bg-black-contents text-green-pri dark:text-green-pri w-8 h-8 rounded-full"
                  onClick={() =>
                    setNumSerials((prevNum) => Math.max(0, prevNum - 1))
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={numSerials}
                  onChange={handleNumSerialsChange}
                  className="input-field w-16 text-center border text-[#00a651] font-bold focus:ring-transparent outline-none p-2 bg-white-bg dark:bg-transparent rounded-full autofill:bg-transparent mx-2"
                />
                <button
                  type="button"
                  className="bg-gray-300 dark:bg-black-contents text-green-pri dark:text-green-pri w-8 h-8 rounded-full"
                  onClick={() => setNumSerials((prevNum) => prevNum + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex justify-end lg:pr-20 mt-[-2rem]">
                <button
                  type="button"
                  className="med-btn-pri text-green-pri"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="py-10 text-left px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: numSerials }, (_, index) => (
              <div key={index} className="mb-4">
                <label className="block text-lg mb-2">
                  Serial {index + 1}:
                </label>
                <input
                  type="text"
                  value={serialValues[index] || ""}
                  onChange={(event) => handleInputChange(index, event)}
                  className="mt-1 w-full rounded-full border border-[#00a65100] dark:border-black-border bg-white-bg dark:bg-black-input px-4 py-2 font-normal shadow-md dark:shadow-black-shadow outline-none focus:border-green-pri focus:outline-none focus:ring-2 focus:ring-green-pri dark:focus:ring-2 dark:focus:ring-green-pri"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchSerials;
