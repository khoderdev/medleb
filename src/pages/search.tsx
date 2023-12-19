/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import SearchComponent from "../components/SearchComponent";

export default function SearchPage() {
  return (
    <div className="items-center h-[100svh] flex flex-col py-4 px-4 ">
      <h1 className="text-4xl pb-4 text-[#259f83]">Search Medicines</h1>
      <div className="content h-[37em] sm:w-full overflow-auto rounded-3xl bg-white p-0 text-center dark:bg-black sm:h-full sm:py-0 sm:pt-0">
        <SearchComponent />
      </div>
    </div>
  );
}
