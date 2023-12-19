/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

function Grid(props) {
  const { formDataStep3, handleInputChange } = props;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <div className="col-span-full border border-gray-400 p-4">
        <label htmlFor="type" className="labels text-md block text-left">
          Type
        </label>
        <input
          disabled
          className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 shadow-md"
          placeholder="Generic"
        />
      </div>

      <div className="col-span-full flex flex-col items-center justify-center border border-gray-400 p-4">
        <label
          htmlFor="registrationNumber"
          className="labels text-md block text-left"
        >
          Registration Number
        </label>
        <input
          disabled
          onChange={(e) =>
            handleInputChange("registrationNumber", e.target.value)
          }
          className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 shadow-md"
          type="text"
          placeholder="reg #"
        />
      </div>
      <div className="col-span-full border border-gray-400 p-4 md:col-span-2 lg:col-span-1">
        <label htmlFor="drugName" className="labels text-md block text-left">
          Drug Name
        </label>
        <input
          disabled
          onChange={(e) => handleInputChange("drugName", e.target.value)}
          className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 shadow-md"
          type="text"
          placeholder="name"
        />
      </div>

      <div className="col-span-full border border-gray-400 p-4 md:col-span-2 lg:col-span-1">
        <label htmlFor="form" className="labels text-md block text-left">
          Form
        </label>
        <input
          disabled
          onChange={(e) => handleInputChange("form", e.target.value)}
          className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 shadow-md"
          type="text"
          placeholder="form"
        />
      </div>

      <div className="col-span-full border border-gray-400 p-4 md:col-span-2 lg:col-span-1">
        <label htmlFor="atc" className="labels text-md block text-left">
          ATC Code
        </label>
        <input
          disabled
          onChange={(e) => handleInputChange("atc", e.target.value)}
          className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 shadow-md"
          type="text"
          placeholder="name"
        />
      </div>
    </div>

    //     <div className="container mt-16 flex flex-col border-2 border-red-500">
    //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    //         <div className="border border-gray-400 p-4">
    //           <label htmlFor="type" className="labels text-md block text-left">
    //             Type
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.type}
    //             className="mt-1 w-full appearance-none rounded-full border border-[#259f8359] bg-white/10 p-2 px-4 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e] "
    //             placeholder="Generic"
    //           ></input>
    //         </div>

    //         <div className="border border-gray-400 p-4">
    //           <label
    //             htmlFor="registrationNumber"
    //             className="labels text-md block text-left"
    //           >
    //             Registration Number
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.registrationNumber}
    //             onChange={(e) =>
    //               handleInputChange("registrationNumber", e.target.value)
    //             }
    //             className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
    //             type="text"
    //             placeholder="reg #"
    //           />
    //         </div>

    //         <div className="border border-gray-400 p-4">
    //           <label htmlFor="drugName" className="labels text-md block text-left">
    //             Drug Name
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.drugName}
    //             onChange={(e) => handleInputChange("drugName", e.target.value)}
    //             className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
    //             type="text"
    //             placeholder="name"
    //           />
    //         </div>

    // {/* <div className="col-span-full"></div> */}

    //         <div className="border border-gray-400 p-4 col-span-full">
    //           <label
    //             htmlFor="atcRelatedIngredients"
    //             className="labels text-md block text-left"
    //           >
    //             ATC related ingredients
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.atcRelatedIngredients}
    //             onChange={(e) =>
    //               handleInputChange("atcRelatedIngredients", e.target.value)
    //             }
    //             className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
    //             type="text"
    //             placeholder="enter a value"
    //           />
    //         </div>

    //         <div className="border border-gray-400 p-4 col-span-full md:col-span-2 lg:col-span-1">
    //           <label htmlFor="atc" className="labels text-md block text-left">
    //             ATC Code
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.atc}
    //             onChange={(e) => handleInputChange("atc", e.target.value)}
    //             className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
    //             type="text"
    //             placeholder="enter a value"
    //           />
    //         </div>

    //         <div className="border border-gray-400 p-4">
    //           <label
    //             htmlFor="ingredientsAndstrength"
    //             className="labels text-md block text-left"
    //           >
    //             Ingredients & Strength
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.ingredientsAndstrength}
    //             onChange={(e) =>
    //               handleInputChange("ingredientsAndstrength", e.target.value)
    //             }
    //             className="mt-1 w-full rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
    //             type="text"
    //             placeholder="enter a value"
    //           />
    //         </div>

    //         <div className="border border-gray-400 p-4">
    //           <label htmlFor="form" className="labels text-md block text-left">
    //             Form
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.form}
    //             onChange={(e) => handleInputChange("form", e.target.value)}
    //             className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
    //             type="text"
    //             placeholder="drug form"
    //           />
    //         </div>

    //         <div className="border border-gray-400 p-4">
    //           <label
    //             htmlFor="primaryContainerPackage"
    //             className="labels text-md block text-left"
    //           >
    //             Primary container / Package
    //           </label>
    //           <input
    //             disabled
    //             // value={formDataStep3.primaryContainerPackage}
    //             onChange={(e) =>
    //               handleInputChange("primaryContainerPackage", e.target.value)
    //             }
    //             className="w-full  rounded-full border border-[#259f8359] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-[#5cd3b7] focus:outline-none focus:ring-1 focus:ring-[#5cd3b7] dark:bg-[#1e1e1e]"
    //             type="text"
    //             placeholder="container / package"
    //           />
    //         </div>

    //         {/* <div className="border border-gray-400 p-4">10</div>
    //         <div className="border border-gray-400 p-4">11</div>
    //         <div className="border border-gray-400 p-4">12</div>
    //         <div className="border border-gray-400 p-4">13</div>
    //         <div className="border border-gray-400 p-4">14</div>
    //         <div className="border border-gray-400 p-4">15</div>
    //         <div className="border border-gray-400 p-4">16</div> */}
    //       </div>
    //     </div>
  );
}

export default Grid;
