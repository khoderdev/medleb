/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import SearchComponent from '../components/SearchComponent';

export default function SearchPage() {
  return (
    // <div className="inspection-page flex flex-wrap items-center justify-center px-4 md:py-14 ">
    //   <div className="w-[100%] bg-white rounded-3xl p-4 pb-24 pt-10 dark:bg-black md:w-[93%] md:rounded-3xl md:p-6 md:shadow-xl md:shadow-gray-400 dark:md:shadow-black ">
        <div className="flex flex-col items-center bg-gray-200 dark:bg-[#1e1e1e] sm:pb-12 sm:pt-0">
          <h1 className="text-4xl text-[#259F83]">Search Medicines</h1>
          <SearchComponent />
        </div>
    //   </div>
    // </div>
  );
}
