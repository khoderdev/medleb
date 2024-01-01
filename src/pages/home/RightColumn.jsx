import React from "react";
import BarChart from "../../components/BarChart";
import SearchBar from "../../pages/search/Bar";

const RightColumn = () => {
  return (
    <div className="flex flex-col justify-around bg-white-bg items-center w-full h-screen p-2 pb-20 sm:pb-2 gap-4 dark:bg-black-bg">
      <div className="w-full h-[45%] rounded-xl p-2 py-6 text-black-bg dark:text-white-text bg-white-contents dark:bg-black-contents overflow-auto">
        <SearchBar />
      </div>
      <div className="w-full min-h-[45%] rounded-xl p-0 bg-white-contents dark:bg-black-contents">
        <BarChart isDashboard={true} />
      </div>
    </div>
  );
};

export default RightColumn;
