// // import React, { useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { useClickAway } from "react-use";
// // import { MedLebLogo } from "./icons/MedLebLogo";
// // import { MedLebLogoIcon } from "./icons/MedLebLogoIcon";
// // import HomeGrayIcon from "./icons/HomeGrayIcon.jsx";
// // import { SearchGrayIcon } from "./icons/SearchGrayIcon.jsx";
// // import { DashboardGrayIcon } from "./icons/DashboardGrayIcon.jsx";
// // import { AddIcon } from "./icons/AddIcon.jsx";
// // import { ImportIcon } from "./icons/ImportIcon.jsx";
// // import { DistributionIcon } from "./icons/DistributionIcon.jsx";
// // import { InspectionIcon } from "./icons/InspectionIcon.jsx";
// // import { TrackRecordsIcon } from "./icons/TrackRecordsIcon.jsx";

// // const SidebarLeft = () => {
// //   const [isCollapsed, setCollapsed] = useState(false);
// //   const sidebarRef = useRef(null);

// //   useClickAway(sidebarRef, () => {
// //     setCollapsed(false);
// //   });

// //   const toggleCollapse = () => {
// //     setCollapsed(!isCollapsed);
// //   };

// //   return (
// //     <AnimatePresence mode="wait" initial={false}>
// //       <div ref={sidebarRef} className="">
// //         <motion.div
// //           {...framerSidebarPanel}
// //           className={`z-50 h-[100svh] bg-white-contents dark:bg-black-contents ${
// //             isCollapsed ? "w-50" : "w-250"
// //           }px text-gray-700 dark:text-white-text h-[100svh] shrink-0 text-xl transition-all duration-150 ease-in-out `}
// //           style={{ right: isCollapsed ? 0 : "auto" }}
// //         >
// //           {/* Sidebar Header */}
// //           {isCollapsed ? (
// //             <div className="header-expanded logo-icon flex justify-between items-center px-2 ">
// //               <div className="logo">
// //                 <MedLebLogoIcon />
// //               </div>
// //               <div
// //                 className="collapse-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center ml-[8.5em] w-fit "
// //                 onClick={toggleCollapse}
// //               >
// //                 <svg
// //                   className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white ${
// //                     isCollapsed ? "rotate-90" : "rotate-90"
// //                   }`}
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   {isCollapsed ? (
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M19 9l-7 7-7-7"
// //                     ></path>
// //                   ) : (
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M5 15l7-7 7 7"
// //                     ></path>
// //                   )}
// //                 </svg>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="header-collapsed">
// //               <div className="logo px-2 pt-4">
// //                 <MedLebLogoIcon />
// //               </div>
// //               <div
// //                 className="expand-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center justify-end w-fit ml-16 px-0 "
// //                 onClick={toggleCollapse}
// //               >
// //                 <svg
// //                   className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white-text ${
// //                     isCollapsed ? "hidden ml-6" : "rotate-90"
// //                   }`}
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   {isCollapsed ? (
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M19 9l-7 7-7-7"
// //                     ></path>
// //                   ) : (
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M5 15l7-7 7 7"
// //                     ></path>
// //                   )}
// //                 </svg>
// //               </div>
// //             </div>
// //           )}

// //           {/* icons & text when expanded, open */}
// //           {isCollapsed ? (
// //             <div className="flex flex-col w-full h-full itesm justify-evenly px-2 pl-4 pb-16 overflow-y-auto overflow-x-hidden text-gray-900 dark:text-gray-100">
// //               {/* Menu Section */}
// //               <div className="drug-section w-full  justify-center items-start flex flex-col">
// //                 <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-[#ffffffaf]">
// //                   {sections[0].title}
// //                 </h2>
// //                 <ul className="items flex flex-col w-full h-fit justify-center items-start gap-6 pb-2 overflow-x-hidden">
// //                   {sections[0].items.map((item, idx) => (
// //                     <li key={item.title} className="w-full ">
// //                       <Link
// //                         to={item.to}
// //                         className="flex items-center gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:bg-black"
// //                       >
// //                         {/* <motion.div {...framerIcon}> */}
// //                         <item.Icon />
// //                         {/* </motion.div> */}
// //                         <motion.span {...framerText(idx)} className="text-md">
// //                           {item.title}
// //                         </motion.span>
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               <div className="divider h-px w-[80%] self-center bg-[#259f83e1] dark:bg-green-pri"></div>

// //               {/* Drug Section */}
// //               <div className="drug-section  justify-center items-start flex flex-col  border border-red-500">
// //                 <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-[#ffffffaf]">
// //                   {sections[1].title}
// //                 </h2>
// //                 <ul className="items flex flex-col w-full h-fit justify-center items-start lg:gap-5 2xl:gap-6 pb-2 overflow-x-hidden">
// //                   {sections[1].items.map((item, idx) => (
// //                     <li key={item.title} className="w-full ">
// //                       <Link
// //                         to={item.to}
// //                         className="flex items-center gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:bg-black"
// //                       >
// //                         {/* <motion.div {...framerIcon}> */}
// //                         <item.Icon />
// //                         {/* </motion.div> */}
// //                         <motion.span {...framerText(idx)} className="text-md">
// //                           {item.title}
// //                         </motion.span>
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="flex flex-col w-full h-full items-center justify-evenly px-2 text-gray-900 dark:text-gray-100">
// //               {/* icons without text when collapsed, stacked */}
// //               <div className="menu-section h-64 justify-center items-center gap-6 flex flex-col border border-red-500">
// //                 {/* Menu Section */}
// //                 <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
// //                   {sections[0].title}
// //                 </h2>
// //                 <Link to="/">
// //                   <HomeGrayIcon />
// //                 </Link>
// //                 <Link to="/search">
// //                   <SearchGrayIcon />
// //                 </Link>
// //                 <Link to="/dashboard">
// //                   <DashboardGrayIcon />
// //                 </Link>
// //               </div>

// //               <div className="ol"></div>

// //               {/* Drug Section */}
// //               <div className="drug-section  gap-6 justify-center items-center flex flex-col pb-  border border-red-500">
// //               <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
// //                   {sections[1].title}
// //                 </h2>
// //                 <Link to="/add">
// //                   <AddIcon />
// //                 </Link>
// //                 <Link to="/import">
// //                   <ImportIcon />
// //                 </Link>
// //                 <Link to="/inspection">
// //                   <InspectionIcon />
// //                 </Link>
// //                 <Link to="/distribution">
// //                   <DistributionIcon />
// //                 </Link>
// //                 <Link to="/tracking">
// //                   <TrackRecordsIcon />
// //                 </Link>
// //               </div>
// //             </div>
// //           )}
// //         </motion.div>
// //       </div>
// //     </AnimatePresence>
// //   );
// // };

// // export default SidebarLeft;
// // const sections = [
// //   {
// //     title: "Menu",
// //     items: [
// //       { title: "Home", Icon: HomeGrayIcon, to: "/" },
// //       { title: "Search", Icon: SearchGrayIcon, to: "/search" },
// //       { title: "Dashboard", Icon: DashboardGrayIcon, to: "/dashboard" },
// //     ],
// //   },
// //   {
// //     title: "Drug",
// //     items: [
// //       { title: "Add", Icon: AddIcon, to: "/add" },
// //       { title: "Import", Icon: ImportIcon, to: "/import" },
// //       { title: "Inspection", Icon: InspectionIcon, to: "/inspection" },
// //       { title: "Distribution", Icon: DistributionIcon, to: "/distribution" },
// //       { title: "Track Records", Icon: TrackRecordsIcon, to: "/tracking" },
// //     ],
// //   },
// // ];

// // const framerSidebarBackground = {
// //   initial: { opacity: 0 },
// //   animate: { opacity: 1 },
// //   exit: { opacity: 0, transition: { delay: 0.2 } },
// //   transition: { duration: 0.3 },
// // };

// // const framerSidebarPanel = {
// //   initial: { x: "-100%", zIndex: 1000 },
// //   animate: { x: 0 },
// //   exit: { x: "-100%" },
// //   transition: { duration: 0.3 },
// // };

// // const framerText = (delay) => {
// //   return {
// //     initial: { opacity: 0, x: -50 },
// //     animate: { opacity: 1, x: 0 },
// //     transition: {
// //       delay: 0.2 + delay / 10,
// //     },
// //   };
// // };

// // const framerIcon = {
// //   initial: { scale: 0 },
// //   animate: { scale: 1 },
// //   transition: {
// //     type: "spring",
// //     stiffness: 260,
// //     damping: 20,
// //     delay: 0.6,
// //   },
// // };

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { useClickAway } from "react-use";
// import { MedLebLogo } from "./icons/MedLebLogo";
// import { MedLebLogoIcon } from "./icons/MedLebLogoIcon";
// import HomeGrayIcon from "./icons/HomeGrayIcon.jsx";
// import { SearchGrayIcon } from "./icons/SearchGrayIcon.jsx";
// import { DashboardGrayIcon } from "./icons/DashboardGrayIcon.jsx";
// import { AddIcon } from "./icons/AddIcon.jsx";
// import { ImportIcon } from "./icons/ImportIcon.jsx";
// import { DistributionIcon } from "./icons/DistributionIcon.jsx";
// import { InspectionIcon } from "./icons/InspectionIcon.jsx";
// import { TrackRecordsIcon } from "./icons/TrackRecordsIcon.jsx";

// const SidebarLeft = () => {
//   const [isCollapsed, setCollapsed] = useState(false);
//   const sidebarRef = useRef(null);

//   useClickAway(sidebarRef, () => {
//     setCollapsed(false);
//   });

//   const toggleCollapse = () => {
//     setCollapsed(!isCollapsed);
//   };

//   return (
//     <AnimatePresence mode="wait" initial={false}>
//       <div ref={sidebarRef} className="">
//         <motion.div
//           {...framerSidebarPanel}
//           className={`z-50 h-[100svh] bg-white-contents dark:bg-black-contents ${
//             isCollapsed ? "w-50" : "w-250"
//           }px text-gray-700 dark:text-white-text h-[100svh] shrink-0 text-xl transition-all duration-150 ease-in-out `}
//           style={{ right: isCollapsed ? 0 : "auto" }}
//         >
//           {/* Sidebar Header */}
//           {isCollapsed ? (
//             <div className="header-expanded logo-icon flex justify-between items-center px-2 ">
//               <div className="logo pr-2 pt-4">
//                 <MedLebLogo />
//               </div>
//               <div
//                 className="collapse-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center ml-[8.5em] w-fit "
//                 onClick={toggleCollapse}
//               >
//                 <svg
//                   className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white ${
//                     isCollapsed ? "rotate-90" : "rotate-90"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isCollapsed ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 15l7-7 7 7"
//                     ></path>
//                   )}
//                 </svg>
//               </div>
//             </div>
//           ) : (
//             <div className="header-collapsed">
//               <div className="logo px-2 pt-4">
//                 <MedLebLogoIcon />
//               </div>
//               <div
//                 className="expand-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center justify-end w-fit ml-16 px-0 "
//                 onClick={toggleCollapse}
//               >
//                 <svg
//                   className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white-text ${
//                     isCollapsed ? "hidden ml-6" : "rotate-90"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isCollapsed ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 15l7-7 7 7"
//                     ></path>
//                   )}
//                 </svg>
//               </div>
//             </div>
//           )}

//           {/* icons & text when expanded, open */}
//           {isCollapsed ? (
//             <div className="flex flex-col w-full h-full items-center justify-evenly px-2 pl-4 overflow-y-auto text-gray-900 dark:text-gray-100">
//               {/* icons without text when collapsed, stacked */}

//               <div className="menu-section w-full justify-center items-start gap-6 flex flex-col">
//                 {/* Menu Section Expanded/Open */}
//                 <motion.div
//                   {...framerIcon}
//                   className="menu-section w-full border border-red-500 justify-center items-start gap-6 flex flex-col"
//                 >
//                   <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
//                     {sections[0].title}
//                   </h2>
//                   <Link
//                     to="/"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <HomeGrayIcon />
//                     {/* <motion.span {...framerText} className="text-md"> */}
//                     Home
//                     {/* </motion.span> */}
//                   </Link>
//                   <Link
//                     to="/search"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <SearchGrayIcon />
//                     Search
//                   </Link>
//                   <Link
//                     to="/dashboard"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <DashboardGrayIcon />
//                     Dashboard
//                   </Link>
//                 </motion.div>
//               </div>

//               <div className="ol"></div>

//               {/* Drug Section Expanded/Open */}

//               <div className="drug-section w-full justify-center items-start gap-6 flex flex-col">
//                 <motion.div {...framerIcon} className="border border-red-500 justify-center items-start gap-6 flex flex-col">
//                   <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
//                     {sections[1].title}
//                   </h2>
//                   <Link
//                     to="/add"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <AddIcon className="text-3xl" />
//                     Add
//                   </Link>
//                   <Link
//                     to="/import"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <ImportIcon className="text-3xl" />
//                     Importation
//                   </Link>
//                   <Link
//                     to="/inspection"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <InspectionIcon className="text-3xl" />
//                     Inspection
//                   </Link>
//                   <Link
//                     to="/distribution"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <DistributionIcon className="text-3xl" />
//                     Distribution
//                   </Link>
//                   <Link
//                     to="/tracking"
//                     className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
//                   >
//                     <TrackRecordsIcon className="text-3xl" />
//                     Track Records
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>
//           ) : (
//             // /////////////////////////////////COLLAPSED/CLOSED///////////////////////////////////////////////////////////////////////////////////

//             <div className="flex flex-col w-full h-full items-center justify-evenly px-2 overflow-y-auto text-gray-900 dark:text-gray-100">
//               {/* icons without text when collapsed, stacked */}
//               <div className="menu-section w-full justify-center items-center gap-6 flex flex-col">
//                 {/* Menu Section */}
//                 <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
//                   {sections[0].title}
//                 </h2>
//                 <Link to="/">
//                   <HomeGrayIcon />
//                 </Link>
//                 <Link to="/search">
//                   <SearchGrayIcon />
//                 </Link>
//                 <Link to="/dashboard">
//                   <DashboardGrayIcon />
//                 </Link>
//               </div>

//               <div className="ol"></div>

//               {/* Drug Section */}
//               <div className="drug-section w-full gap-6 justify-center items-center flex flex-col pb- ">
//                 <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
//                   {sections[1].title}
//                 </h2>
//                 <Link to="/add">
//                   <AddIcon />
//                 </Link>
//                 <Link to="/import">
//                   <ImportIcon />
//                 </Link>
//                 <Link to="/inspection">
//                   <InspectionIcon />
//                 </Link>
//                 <Link to="/distribution">
//                   <DistributionIcon />
//                 </Link>
//                 <Link to="/tracking">
//                   <TrackRecordsIcon />
//                 </Link>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default SidebarLeft;
// const sections = [
//   {
//     title: "Menu",
//   },
//   {
//     title: "Drug",
//   },
// ];

// const framerSidebarBackground = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0, transition: { delay: 0.2 } },
//   transition: { duration: 0.3 },
// };

// const framerSidebarPanel = {
//   initial: { x: "-100%", zIndex: 1000 },
//   animate: { x: 0 },
//   exit: { x: "-100%" },
//   transition: { duration: 0.3 },
// };

// const framerText = (delay) => {
//   return {
//     initial: { opacity: 0, x: -50 },
//     animate: { opacity: 1, x: 0 },
//     transition: {
//       delay: 0.2 + delay / 10,
//     },
//   };
// };

// const framerIcon = {
//   initial: { opacity: 0, x: -50 },
//   animate: { opacity: 1, x: 0 },
//   transition: {
//     // delay: 0.2 + delay / 10,
//   },
//   // initial: { scale: 0 },
//   // animate: { scale: 1 },
//   // transition: {
//   //   type: "spring",
//   //   stiffness: 260,
//   //   damping: 20,
//   //   delay: 0.6,
//   // },
// };

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { useClickAway } from "react-use";
// import { MedLebLogo } from "./icons/MedLebLogo";
// import { MedLebLogoIcon } from "./icons/MedLebLogoIcon";
// import HomeGrayIcon from "./icons/HomeGrayIcon.jsx";
// import { SearchGrayIcon } from "./icons/SearchGrayIcon.jsx";
// import { DashboardGrayIcon } from "./icons/DashboardGrayIcon.jsx";
// import { AddIcon } from "./icons/AddIcon.jsx";
// import { ImportIcon } from "./icons/ImportIcon.jsx";
// import { DistributionIcon } from "./icons/DistributionIcon.jsx";
// import { InspectionIcon } from "./icons/InspectionIcon.jsx";
// import { TrackRecordsIcon } from "./icons/TrackRecordsIcon.jsx";

// const SidebarLeft = () => {
//   const [isCollapsed, setCollapsed] = useState(false);
//   const sidebarRef = useRef(null);

//   useClickAway(sidebarRef, () => {
//     setCollapsed(false);
//   });

//   const toggleCollapse = () => {
//     setCollapsed(!isCollapsed);
//   };

//   return (
//     <AnimatePresence mode="wait" initial={false}>
//       <div ref={sidebarRef} className="">
//         <motion.div
//           {...framerSidebarPanel}
//           className={`z-50 h-[100svh] bg-white-contents dark:bg-black-contents ${
//             isCollapsed ? "w-50" : "w-250"
//           }px text-gray-700 dark:text-white-text h-[100svh] shrink-0 text-xl transition-all duration-150 ease-in-out `}
//           style={{ right: isCollapsed ? 0 : "auto" }}
//         >
//           {/* Sidebar Header */}
//           {isCollapsed ? (
//             <div className="header-expanded logo-icon flex justify-between items-center px-2 ">
//               <div className="logo">
//                 <MedLebLogoIcon />
//               </div>
//               <div
//                 className="collapse-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center ml-[8.5em] w-fit "
//                 onClick={toggleCollapse}
//               >
//                 <svg
//                   className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white ${
//                     isCollapsed ? "rotate-90" : "rotate-90"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isCollapsed ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 15l7-7 7 7"
//                     ></path>
//                   )}
//                 </svg>
//               </div>
//             </div>
//           ) : (
//             <div className="header-collapsed">
//               <div className="logo px-2 pt-4">
//                 <MedLebLogoIcon />
//               </div>
//               <div
//                 className="expand-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center justify-end w-fit ml-16 px-0 "
//                 onClick={toggleCollapse}
//               >
//                 <svg
//                   className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white-text ${
//                     isCollapsed ? "hidden ml-6" : "rotate-90"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isCollapsed ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 15l7-7 7 7"
//                     ></path>
//                   )}
//                 </svg>
//               </div>
//             </div>
//           )}

//           {/* icons & text when expanded, open */}
//           {isCollapsed ? (
//             <div className="flex flex-col w-full h-full itesm justify-evenly px-2 pl-4 pb-16 overflow-y-auto overflow-x-hidden text-gray-900 dark:text-gray-100">
//               {/* Menu Section */}
//               <div className="drug-section w-full  justify-center items-start flex flex-col">
//                 <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-[#ffffffaf]">
//                   {sections[0].title}
//                 </h2>
//                 <ul className="items flex flex-col w-full h-fit justify-center items-start gap-6 pb-2 overflow-x-hidden">
//                   {sections[0].items.map((item, idx) => (
//                     <li key={item.title} className="w-full ">
//                       <Link
//                         to={item.to}
//                         className="flex items-center gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:bg-black"
//                       >
//                         {/* <motion.div {...framerIcon}> */}
//                         <item.Icon />
//                         {/* </motion.div> */}
//                         <motion.span {...framerText(idx)} className="text-md">
//                           {item.title}
//                         </motion.span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="divider h-px w-[80%] self-center bg-[#259f83e1] dark:bg-green-pri"></div>

//               {/* Drug Section */}
//               <div className="drug-section  justify-center items-start flex flex-col  border border-red-500">
//                 <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-[#ffffffaf]">
//                   {sections[1].title}
//                 </h2>
//                 <ul className="items flex flex-col w-full h-fit justify-center items-start lg:gap-5 2xl:gap-6 pb-2 overflow-x-hidden">
//                   {sections[1].items.map((item, idx) => (
//                     <li key={item.title} className="w-full ">
//                       <Link
//                         to={item.to}
//                         className="flex items-center gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:bg-black"
//                       >
//                         {/* <motion.div {...framerIcon}> */}
//                         <item.Icon />
//                         {/* </motion.div> */}
//                         <motion.span {...framerText(idx)} className="text-md">
//                           {item.title}
//                         </motion.span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col w-full h-full items-center justify-evenly px-2 text-gray-900 dark:text-gray-100">
//               {/* icons without text when collapsed, stacked */}
//               <div className="menu-section h-64 justify-center items-center gap-6 flex flex-col border border-red-500">
//                 {/* Menu Section */}
//                 <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
//                   {sections[0].title}
//                 </h2>
//                 <Link to="/">
//                   <HomeGrayIcon />
//                 </Link>
//                 <Link to="/search">
//                   <SearchGrayIcon />
//                 </Link>
//                 <Link to="/dashboard">
//                   <DashboardGrayIcon />
//                 </Link>
//               </div>

//               <div className="ol"></div>

//               {/* Drug Section */}
//               <div className="drug-section  gap-6 justify-center items-center flex flex-col pb-  border border-red-500">
//               <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
//                   {sections[1].title}
//                 </h2>
//                 <Link to="/add">
//                   <AddIcon />
//                 </Link>
//                 <Link to="/import">
//                   <ImportIcon />
//                 </Link>
//                 <Link to="/inspection">
//                   <InspectionIcon />
//                 </Link>
//                 <Link to="/distribution">
//                   <DistributionIcon />
//                 </Link>
//                 <Link to="/tracking">
//                   <TrackRecordsIcon />
//                 </Link>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default SidebarLeft;
// const sections = [
//   {
//     title: "Menu",
//     items: [
//       { title: "Home", Icon: HomeGrayIcon, to: "/" },
//       { title: "Search", Icon: SearchGrayIcon, to: "/search" },
//       { title: "Dashboard", Icon: DashboardGrayIcon, to: "/dashboard" },
//     ],
//   },
//   {
//     title: "Drug",
//     items: [
//       { title: "Add", Icon: AddIcon, to: "/add" },
//       { title: "Import", Icon: ImportIcon, to: "/import" },
//       { title: "Inspection", Icon: InspectionIcon, to: "/inspection" },
//       { title: "Distribution", Icon: DistributionIcon, to: "/distribution" },
//       { title: "Track Records", Icon: TrackRecordsIcon, to: "/tracking" },
//     ],
//   },
// ];

// const framerSidebarBackground = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0, transition: { delay: 0.2 } },
//   transition: { duration: 0.3 },
// };

// const framerSidebarPanel = {
//   initial: { x: "-100%", zIndex: 1000 },
//   animate: { x: 0 },
//   exit: { x: "-100%" },
//   transition: { duration: 0.3 },
// };

// const framerText = (delay) => {
//   return {
//     initial: { opacity: 0, x: -50 },
//     animate: { opacity: 1, x: 0 },
//     transition: {
//       delay: 0.2 + delay / 10,
//     },
//   };
// };

// const framerIcon = {
//   initial: { scale: 0 },
//   animate: { scale: 1 },
//   transition: {
//     type: "spring",
//     stiffness: 260,
//     damping: 20,
//     delay: 0.6,
//   },
// };

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { MedLebLogo } from "./icons/MedLebLogo";
import { MedLebLogoIcon } from "./icons/MedLebLogoIcon";
import HomeGrayIcon from "./icons/HomeGrayIcon.jsx";
import { SearchGrayIcon } from "./icons/SearchGrayIcon.jsx";
import { DashboardGrayIcon } from "./icons/DashboardGrayIcon.jsx";
import { AddIcon } from "./icons/AddIcon.jsx";
import { ImportIcon } from "./icons/ImportIcon.jsx";
import { DistributionIcon } from "./icons/DistributionIcon.jsx";
import { InspectionIcon } from "./icons/InspectionIcon.jsx";
import { TrackRecordsIcon } from "./icons/TrackRecordsIcon.jsx";

const SidebarLeft = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const sidebarRef = useRef(null);

  useClickAway(sidebarRef, () => {
    setCollapsed(false);
  });

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div ref={sidebarRef} className="">
        <motion.div
          {...framerSidebarPanel}
          className={`z-50 h-[100svh] bg-white-contents dark:bg-black-contents ${
            isCollapsed ? "w-50" : "w-250"
          }px text-gray-700 dark:text-white-text h-[100svh] shrink-0 text-xl transition-all duration-150 ease-in-out lg:overflow-y-auto 2xl:overflow-hidden`}
          style={{ right: isCollapsed ? 0 : "auto" }}
          // className={`z-50 h-[${
          //   isCollapsed ? "100" : "100"
          // }svh] bg-white-contents dark:bg-black-contents ${
          //   isCollapsed ? "w-50" : "w-250"
          // } text-gray-700 dark:text-white-text h-[100svh] shrink-0 text-xl transition-all duration-150 ease-in-out lg:overflow-y-auto 2xl:overflow-hidden overflow-x-hidden`}
        >
          {/* Sidebar Header */}
          {isCollapsed ? (
            <div className="header-expanded logo-icon flex justify-between items-center px-2 ">
              <div className="logo mr-12 pt-4">
                <MedLebLogo />
              </div>
              <div
                className="collapse-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center ml-[8.5em] w-fit "
                onClick={toggleCollapse}
              >
                <svg
                  className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white ${
                    isCollapsed ? "rotate-90" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isCollapsed ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  )}
                </svg>
              </div>
            </div>
          ) : (
            <div className="header-collapsed">
              <div className="logo px-2 pt-4">
                <MedLebLogoIcon />
              </div>
              <div
                className="expand-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center justify-end w-fit ml-16 px-0 "
                onClick={toggleCollapse}
              >
                <svg
                  className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white-text ${
                    isCollapsed ? "hidden ml-6" : "rotate-90"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isCollapsed ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  )}
                </svg>
              </div>
            </div>
          )}

          {/* icons & text when expanded, open */}
          {isCollapsed ? (
            <div className="flex flex-col w-full h-full items-center justify-evenly px-2 pl-4 overflow-y-auto text-gray-900 dark:text-gray-100">
              {/* icons without text when collapsed, stacked */}

              <div className="menu-section w-full justify-center items-start gap-6 flex flex-col">
                {/* Menu Section Expanded/Open */}
                <motion.div
                  {...framerIcon}
                  className="menu-section w-full justify-center items-start gap-6 flex flex-col"
                >
                  <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
                    {sections[0].title}
                  </h2>
                  <Link
                    to="/"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <HomeGrayIcon />
                    {/* <motion.span {...framerText} className="text-md"> */}
                    Home
                    {/* </motion.span> */}
                  </Link>
                  <Link
                    to="/search"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <SearchGrayIcon />
                    Search
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <DashboardGrayIcon />
                    Dashboard
                  </Link>
                </motion.div>
              </div>

              <div className="divider h-px w-[80%] self-center bg-[#259f83e1] dark:bg-green-pri"></div>

              {/* Drug Section Expanded/Open */}

              <div className="drug-section w-full justify-center items-start gap-6 flex flex-col">
                <motion.div
                  {...framerIcon}
                  className="justify-center items-start gap-6 flex flex-col"
                >
                  <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
                    {sections[1].title}
                  </h2>
                  <Link
                    to="/add"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <AddIcon className="text-3xl" />
                    Add
                  </Link>
                  <Link
                    to="/import"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <ImportIcon className="text-3xl" />
                    Importation
                  </Link>
                  <Link
                    to="/inspection"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <InspectionIcon className="text-3xl" />
                    Inspection
                  </Link>
                  <Link
                    to="/distribution"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <DistributionIcon className="text-3xl" />
                    Distribution
                  </Link>
                  <Link
                    to="/tracking"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <TrackRecordsIcon className="text-3xl" />
                    Track Records
                  </Link>
                </motion.div>
              </div>
            </div>
          ) : (
            // /////////////////////////////////COLLAPSED/CLOSED///////////////////////////////////////////////////////////////////////////////////

            <div className="flex flex-col w-full h-full items-center justify-evenly px-2 overflow-y-auto text-gray-900 dark:text-gray-100">
              {/* icons without text when collapsed, stacked */}
              <div className="menu-section w-full justify-center items-center gap-6 flex flex-col">
                {/* Menu Section */}
                <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
                  {sections[0].title}
                </h2>
                <Link to="/">
                  <HomeGrayIcon />
                </Link>
                <Link to="/search">
                  <SearchGrayIcon />
                </Link>
                <Link to="/dashboard">
                  <DashboardGrayIcon />
                </Link>
              </div>

              <div className="ol"></div>

              {/* Drug Section */}
              <div className="drug-section w-full gap-6 justify-center items-center flex flex-col pb- ">
                <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
                  {sections[1].title}
                </h2>
                <Link to="/add">
                  <AddIcon />
                </Link>
                <Link to="/import">
                  <ImportIcon />
                </Link>
                <Link to="/inspection">
                  <InspectionIcon />
                </Link>
                <Link to="/distribution">
                  <DistributionIcon />
                </Link>
                <Link to="/tracking">
                  <TrackRecordsIcon />
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SidebarLeft;
const sections = [
  {
    title: "Menu",
  },
  {
    title: "Drug",
  },
];

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: "-100%", zIndex: 1000 },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.2 + delay / 10,
    },
  };
};

const framerIcon = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: {
    // delay: 0.2 + delay / 10,
  },
  // initial: { scale: 0 },
  // animate: { scale: 1 },
  // transition: {
  //   type: "spring",
  //   stiffness: 260,
  //   damping: 20,
  //   delay: 0.6,
  // },
};
