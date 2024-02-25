import React from "react";
import SearchBar from "../../../pages/search/Bar";

const RightColumn = () => {
  return (
    <div className="flex md:pl-2 md:pr-14 justify-between md:dark:bg-transparent md:w-[65%] h-screen md:min-h-[55%]">
      {/* Right Column */}
      <div className="w-full h-screen flex flex-col md:dark:bg-transparent pt-12 pb-[4.5rem] md:py-2 gap-2">
        {/* First Block */}
        <div className="flex-1 rounded-2xl bg-black-test2">
          <SearchBar />
        </div>

        {/* Second Block */}
        <div className="flex-1 rounded-2xl bg-black-test3">
          {/* Empty Block */}
        </div>

        {/* Third Block */}
        <div className="flex-1 rounded-2xl bg-black-test4">
          {/* Empty Block */}
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
