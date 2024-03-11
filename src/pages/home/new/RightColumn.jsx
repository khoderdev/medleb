import React from "react";
import SearchBar from "../../../pages/search/Bar";
import TaskView from "./Tasks";

const RightColumn = () => {
  return (
    <div className="flex md:pl-2 md:pr-4 justify-between md:w-[65%] bg-white-bg dark:bg-black-bg h-screen md:min-h-[55%] z-50">
      {/* Right Column */}
      <div className="w-full h-screen flex flex-col pt-12 pb-[4.5rem] md:py-2 gap-2">
        {/* First Block */}
        {/* <div className="flex-1 rounded-2xl bg-black-test2"> */}
        <SearchBar />
        {/* </div> */}

        {/* Second Block */}
        <div className="flex-1 py-2 rounded-2xl border-2 border-gray-200">
          <TaskView />
        </div>

        {/* Third Block */}
        <div className="flex-1 rounded-2xl border-2 border-gray-200">
          {/* Empty Block */}
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
