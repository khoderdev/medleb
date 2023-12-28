import React from "react";
import BarChart from "../../components/BarChart";
import Search from "../../pages/search/Search";

const RightColumn = () => {
  return (
    <div className="flex flex-col justify-around items-center w-full h-screen p-2 pb-20 sm:pb-2 gap-4 dark:bg-black-bg">
      <div className="w-full h-[65%] rounded-xl p-2 py-6 bg-white-contents dark:bg-black-contents overflow-auto">
        <Search />
      </div>
      <div className="w-full min-h-[45%] rounded-xl p-0 bg-white-contents dark:bg-black-contents">
        <BarChart isDashboard={true} />
      </div>
    </div>
  );
};

export default RightColumn;
