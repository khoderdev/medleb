import React from "react";
import { Link } from "react-router-dom";

function StaticDataPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white-bg dark:bg-black-bg">
      <h1 className="text-2xl font-bold mb-8 text-center text-green-pri">
        Static Data
      </h1>
      <div className="bg-white-contents dark:bg-black-contents w-2/3 lg:w-1/2 p-10 rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            to="/geo/list"
            className="btn text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Countries
          </Link>
          <Link
            to="/atc/list"
            className="btn text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            ATC Codes
          </Link>
          <Link
            to="/company/list"
            className="btn text-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Companies
          </Link>
          <Link
            to="/brands/list"
            className="btn text-center bg-pink-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Brands
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StaticDataPage;
