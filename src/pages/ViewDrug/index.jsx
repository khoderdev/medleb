/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import ImageGallery  from "../../pages/drugs/ImageGallery";
export default function ViewDrugImage() {
  return (
    <div className="items-centerflex-wrap flex justify-center px-4 py-10 pb-28 sm:pt-10 ">
      <div className=" md:pb-18 w-[100%] rounded-3xl pb-6 pt-10 dark:bg-black md:w-[93%] md:p-6 md:shadow-xl md:shadow-gray-400 dark:md:shadow-black ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-semibold text-[#259f83]">Drug Details</h1>
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}
