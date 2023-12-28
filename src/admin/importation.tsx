/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import  Importation  from "../../components/Importation";

export default function importationPage() {
  return (
    <div className="flex flex-wrap items-center justify-center px-4 py-10 pb-28 sm:pt-10 ">
      <div className=" md:pb-18 w-[100%] rounded-3xl bg-white pb-6 pt-10 dark:bg-black md:w-[93%] md:p-6 md:shadow-xl md:shadow-gray-400 dark:md:shadow-black ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#259f83]">Importation</h1>
          <Importation />
        </div>
      </div>
    </div>
  );
}
