import React from "react";
import { Link } from "react-router-dom";

function StaticDataPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Static Data Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link
          to="/geo/list"
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Countries
        </Link>
        <Link
          to="/atc/list"
          className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          ATC Codes
        </Link>
        <Link
          to="/agents/list"
          className="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Agents
        </Link>
      </div>
    </div>
  );
}

export default StaticDataPage;
