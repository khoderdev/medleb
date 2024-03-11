import React from "react";
import SearchBar from "../../pages/search/Bar";
import "./home.css";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Column */}
      <div
        className="left-col lg:w-2/6 lg:flex-1 h-screen bg-fixed bg-contain bg-no-repeat md:bg-[6rem]"
        style={{ backgroundImage: `url('/dist/assets/EB-Quote.png')` }}
      >
        {/* Left content */}
      </div>

      {/* Right Column */}
      <div className="lg:w-4/6 h-screen flex flex-col gap-2 pt-28 pb-20 sm:py-4 md:p-14 md:pl-0 md:pr-4">
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

export default Home;
