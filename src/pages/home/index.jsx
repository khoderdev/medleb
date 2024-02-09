// // // import LeftColumn from "./LeftColumn";
// // // import RightColumn from "./RightColumn";

// // // export default function Home() {
// // //   return (
// // //     <div className="flex-1 lg:flex w-full h-screen relative gap-4 bg-white-bg dark:bg-black-bg">
// // //       <LeftColumn />
// // //       <RightColumn />
// // //     </div>
// // //   );
// // // }

// // import React from "react";

// // const Home = () => {
// //   return (
// //     <div className="flex h-screen">
// //       {/* Left Column */}
// //       <div
// //         className="w-2/6 h-full bg-fixed bg-contain bg-no-repeat bg-[5rem]"
// //         style={{ backgroundImage: `url('/src/images/EB-Quote.png')` }}
// //       >
// //         {/* Left content */}
// //       </div>

// //       {/* Right Column */}
// //       <div className="w-8/12 h-full flex flex-col">
// //         {/* First Block */}
// //         <div className="flex-1 bg-gray-300">
// //           {/* Search Bar */}
// //           <input
// //             type="text"
// //             className="w-full px-4 py-2"
// //             placeholder="Search"
// //           />
// //         </div>

// //         {/* Second Block */}
// //         <div className="flex-1 bg-gray-400">{/* Empty Block */}</div>

// //         {/* Third Block */}
// //         <div className="flex-1 bg-gray-500">{/* Empty Block */}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// // ///////////////////////////////
// // ///////////////////////////////
// // ///////////////////////////////
// // ///////////////////////////////

// import React from "react";
// import SearchBar from "../../pages/search/Bar";

// const Home = () => {
//   return (
//     <div className="flex flex-col sm:flex-row bg-transparent">
//       {/* Left Column */}
//       <div
//         className="sm:w-2/6 h-screen bg-fixed bg-contain bg-no-repeat"
//         style={{ backgroundImage: `url('/src/images/EB-Quote.png')` }}
//       >
//         {/* Left content */}
//       </div>

//       {/* Right Column */}
//       <div className="sm:w-4/6 h-screen flex flex-col gap-2 pt-28 pb-20 sm:py-4 md:p-14 md:pl-0 md:pr-4">
//         {/* First Block */}
//         <div className="flex-1 rounded-2xl bg-black-test2">
//           <SearchBar />
//         </div>

//         {/* Second Block */}
//         <div className="flex-1 rounded-2xl bg-black-test3">
//           {/* Empty Block */}
//         </div>

//         {/* Third Block */}
//         <div className="flex-1 rounded-2xl bg-black-test4">
//           {/* Empty Block */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import SearchBar from "../../pages/search/Bar";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Column */}
      <div
        className="lg:w-2/6 lg:flex-1 h-screen bg-fixed bg-contain bg-no-repeat md:bg-[6rem]"
        style={{ backgroundImage: `url('/public/assets/EB-Quote.png')` }}
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

// ////////////////////////////
// ////////////////////////////
// ////////////////////////////
// ////////////////////////////

// import React from "react";
// import "./home.css";
// import SearchBar from "../../pages/search/Bar";

// const Home = () => (
//   <div class="container">
//     <main>
//       <SearchBar />
//     </main>
//     <div id="left-col"></div>
//     <div id="content1">Content1</div>
//     <div id="content2">Content2</div>
//     <div id="content3">Content3</div>
//   </div>
// );

// export default Home;
