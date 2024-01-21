// // // import LeftColumn from "./LeftColumn";
// // // import RightColumn from "./RightColumn";

// // // export default function Home() {
// // //   return (
// // //     <div className="flex-1 md:flex w-full h-screen relative gap-4 bg-white-bg dark:bg-black-bg">
// // //       <LeftColumn />
// // //       <RightColumn />
// // //     </div>
// // //   );
// // // }

// // // /////////////////////////////////////////

// // import React from "react";
// // import LeftColumn from "./LeftColumn";
// // import RightColumn from "./RightColumn";

// // export default function Home() {
// //   return (
// //     <div className="flex-1 md:flex w-full h-[100dvh] relative gap-4 bg-white-bg dark:bg-black-bg">
// //       <div className="flex flex-col">
// //         <LeftColumn />
// //       </div>
// //       <div className="md:w-[75%] flex flex-col">
// //         <RightColumn />
// //       </div>
// //     </div>
// //   );
// // }

// // ///////////////////////////////////

// import React from "react";
// import LeftColumn from "./LeftColumn";
// import RightColumn from "./RightColumn";
// const containerStyle = {
//   backgroundImage: `url('/src/images/EB-Quote.png')`,
// };
// export default function Home() {
//   return (
//     <div className="home-main h-screen grid grid-col-2 sm:grid-col-2 md:grid-col-2 lg:grid-col-">
//       <div
//         className="bg-img col-span-2 h-screen flex justify-center items-center bg-left bg-fixed bg-no-repeat bg-contain w-full"
//         style={containerStyle}
//       >
//         {/* <LeftColumn /> */}
//       </div>
//       <div className="flex col-span-3 w-full">
//         <RightColumn />
//       </div>
//       <style>
//         {`
//           @media (min-width: 768px) {
//             .bg-img {
//               background-position: left;
//             }
//           }

//           @media (min-width: 640px) {
//             .bg-img {
//               background-position: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .bg-img {
//               background-position: 10%;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// // // ////////////////////////////////////////////////////////

// // import React from "react";
// // import SearchBar from "../../pages/search/Bar";
// // import MyChart from "../../pages/dashboards/MyChart";

// // const containerStyle = {
// //   backgroundImage: `url('/src/images/EB-Quote.png')`,
// // };
// // const Home = () => {
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-blue-500 h-[100dvh]">
// //       {/* Left Column */}
// //       {/* <div className="border-2 border-green-500 "> */}
// //       <div
// //         style={containerStyle}
// //         className="bg-img h-screen flex col-span- justify-center items-center bg-left bg-fixed bg-no-repeat bg-contain"
// //       ></div>
// //       {/* </div> */}

// //       {/* /////////////////////////////////////////////////////////////////////////////// */}

// //       {/* Right Column */}
// //       {/* <div className="flex flex-col h-screen py-16 md:py-2 p-4 border-2 border-red-500 w-full"> */}
// //       <div className="grid grid-cols- md:grid-cols-3 gap-8 h-screen px-3">
// //         {/* Row 1 */}
// //         <div className="md:col-span-full rounded-xl bg-white-contents dark:bg-black-contents p-4">
// //           <SearchBar />
// //         </div>

// //         {/* Row 2 */}
// //         <div className="md:col-span-3 rounded-xl bg-white-contents dark:bg-black-fg p-4 flex flex-col">
// //           {/* <MyChart /> */}
// //           <div className="text-xl font-bold ">Row 2</div>
// //         </div>

// //         {/* Row 3 */}
// //         <div className="md:col-span-3 rounded-xl bg-white-contents dark:bg-black-contents p-4 flex flex-col">
// //           <div className="text-xl font-bold ">Row 3</div>
// //           {/* Add content for the third row */}
// //         </div>
// //         {/* </div> */}
// //       </div>

//       <style>
//         {`
//           @media (min-width: 768px) {
//             .bg-img {
//               background-position: left;
//             }
//           }

//           @media (min-width: 640px) {
//             .bg-img {
//               background-position: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .bg-img {
//               background-position: 10%;
//             }
//           }
//         `}
//       </style>
// //     </div>
// //   );
// // };

// // export default Home;

// // ///////////////////////////////////////////////////

// // import React from "react";
// // import SearchBar from "../../pages/search/Bar";
// // import MyChart from "../../pages/dashboards/MyChart";
// // import LeftColumn from "./LeftColumn";

// // const containerStyle = {
// //   backgroundImage: `url('/src/images/EB-Quote.png')`,
// // };
// // const Home = () => {
// //   return (
// //     <div className="grid grid-rows-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 grid-flow-row gap-3 p-1 px-3">
// //       <div className="row-span-6 rounded-2xl p-3 h-screen bg-fixed bg-left bg-no-repeat bg-contain bg-red-500" style={containerStyle}>01</div>

// //       <div className="grid col-span-2 grid-rows-7 gap-2 h-screen">
// //         <div className="row-span-1 col-span-3 rounded-2xl p-3 bg-blue-500">
// //           02
// //         </div>
// //         <div className="row-span-3 col-span-3 rounded-2xl p-3 bg-green-500">
// //           03
// //         </div>
// //         <div className="row-span-3 col-span-3 rounded-2xl p-3 bg-yellow-500">
// //           03
// //         </div>
// //         {/* <div className="row-span-1"></div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export default function Home() {
  return (
    <div className="flex-1 lg:flex w-full h-screen relative gap-4 bg-white-bg dark:bg-black-bg">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}
