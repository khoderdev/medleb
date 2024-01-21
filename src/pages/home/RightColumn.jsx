// import React from "react";
// import SearchBar from "../../pages/search/Bar";

// const RightColumn = () => {
//   return (
//     <div className="flex flex-col bg-white-bg items-center w-full h-screen pt-14 md:pt-0 p-4 pb-20 sm:pb-2 dark:bg-black-bg z-20">
//       <div className="flex flex-col w-full h-auto rounded-2xl">
//         <SearchBar />
//       </div>
//       <div className="flex-grow w-full rounded-xl h-auto p-0 bg-white-contents dark:bg-black-contents mb-4">
//         {/* <MyChart chartId="myChartCanvas1" /> */}
//       </div>
//       <div className="flex-grow w-full rounded-xl h-auto p-0 bg-white-contents dark:bg-black-contents mb-4">
//         {/* <MyChart chartId="myChartCanvas2" /> */}
//       </div>
//     </div>
//   );
// };

// export default RightColumn;

// import React from "react";
// import MyChart from "../../pages/dashboards/MyChart";
// import Search from "../../pages/search/search";

// const RightColumn = () => {
//   return (
//     <>
//       <div className="flex flex-col justify-stretch bg-white-bg dark:text-white-contents items-center w-full h-[100dvh] p-2 pb-20 sm:pb-2 gap-4 dark:bg-black-bg border-2">
//         <div className="w-full h-auto rounded-xl p-4 bg-white-contents dark:bg-black-contents border-2 border-red-500">
//           <Search />
//         </div>
//         <div className="w-full rounded-xl p-4 h-full bg-white-contents dark:bg-black-contents border-2 border-red-500">
//           {/* <BarHorizontalStacked /> */}
//           <MyChart />
//           {/* <Bubble /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RightColumn;
import React from "react";
// import BarChart from "../../components/BarChart";
import SearchBar from "../../pages/search/Bar";

const RightColumn = () => {
  return (
    <div className="flex flex-col justify-around  items-center w-full h-screen lg:py-4 lg:pt-0 p-4 lg:pr-8 pb-20 sm:pb-2 gap-4 ">
      <div className="w-full flex flex-col justify-center items-stretch lg:w-[40rem] rounded-xl p-2 pt-6 pb-4 lg:pb-5 overflow-hidden  text-black-bg dark:text-white-text ">
        <label className="mb-2 text-center text-xl text-green-pri font-bold">
          Search
        </label>
        <SearchBar />
      </div>

      <div className="w-full h-[45%] rounded-xl p-2 py-6 text-black-bg dark:text-white-text bg-white-contents dark:bg-black-contents overflow-auto"></div>
      <div className="w-full min-h-[45%] rounded-xl p-0 bg-white-contents dark:bg-black-contents"></div>
    </div>
  );
};

export default RightColumn;
