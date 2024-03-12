import React from 'react';
import { Link } from 'react-router-dom';

function StaticDataPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white-bg dark:bg-black-bg">
      <h1 className="text-2xl font-bold mb-8 text-center text-green-pri">Static Data</h1>

      <button
        type="button"
        className="text-white bg-green-pri hover:bg-[#00a650ef]  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-pri dark:hover:bg-[#00a650ef]"
      >
        <svg
          className="w-4 h-4 text-white-text"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>

      {/* <div className="text-center mt-20">
        <label className="text-lg font-semibold">Choose Date</label> <br />
        <input
          id="datepicker"
          className="border-2 border-gray-300 rounded-full px-3 py-2 w-56"
          type="text"
          placeholder="Select a date"
        />
      </div> */}
      <div className="bg-white-contents dark:bg-black-contents w-2/3 lg:w-1/2 p-10 rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            to="/user"
            //   className="btn text-center border-2 border-green-pri hover:bg-green-pri dark:text-white-text font-medium py-2 px-4 rounded transition duration-300"
            // >
            className="med-btn-3rd"
          >
            Users
          </Link>

          <Link
            to="/user-table"
            //   className="btn text-center border-2 border-green-pri hover:bg-green-pri dark:text-white-text font-medium py-2 px-4 rounded transition duration-300"
            // >
            className="med-btn-3rd"
          >
            Users Read Only
          </Link>

          <Link
            to="/geo/list"
            //   className="btn text-center border-2 border-green-pri hover:bg-green-pri dark:text-white-text font-medium py-2 px-4 rounded transition duration-300"
            // >
            className="med-btn-3rd"
          >
            Countries
          </Link>

          <Link
            to="/atc/list"
            //   className="btn text-center border-2 border-green-pri hover:bg-green-pri dark:text-white-text font-medium py-2 px-4 rounded transition duration-300"
            // >
            className="med-btn-3rd dark:med-btn-3rd-dark"
          >
            ATC Codes
          </Link>

          <Link
            to="/company/list"
            //   className="btn text-center border-2 border-green-pri hover:bg-green-pri dark:text-white-text font-medium py-2 px-4 rounded transition duration-300"
            // >
            className="med-btn-3rd"
          >
            Companies
          </Link>

          <Link
            to="/brands/list"
            //   className="btn text-center border-2 border-green-pri hover:bg-green-pri dark:text-white-text font-medium py-2 px-4 rounded transition duration-300"
            // >
            className="med-btn-3rd"
          >
            Brands
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StaticDataPage;
