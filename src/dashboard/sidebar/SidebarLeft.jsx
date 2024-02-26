// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import MedLebLogoOffCanvas from "./MedLebLogoOffCanvas";
// import MedLebLogo from "./MedLebLogo";
// import HomeGrayIcon from "./icons/HomeGrayIcon.jsx";
// import SearchGrayIcon from "./icons/SearchGrayIcon.jsx";
// import DashboardGrayIcon from "./icons/DashboardGrayIcon.jsx";
// import AddIcon from "./icons/AddIcon.jsx";
// import ImportIcon from "./icons/ImportIcon.jsx";
// import DistributionIcon from "./icons/DistributionIcon.jsx";
// import InspectionIcon from "./icons/InspectionIcon.jsx";
// import TrackRecordsIcon from "./icons/TrackRecordsIcon.jsx";

// const SidebarLeft = () => {
//   const menus = [
//     {
//       title: "Menu",
//       // margin: true,
//       items: [
//         { name: "Home", link: "/", icon: HomeGrayIcon },
//         { name: "Search", link: "/search", icon: SearchGrayIcon },
//         { name: "Dashboard", link: "/dashboard", icon: DashboardGrayIcon },
//       ],
//     },
//     {
//       title: "Drug",
//       margin: true,
//       items: [
//         { name: "Add", link: "/add", icon: AddIcon, margin: false },
//         { name: "Import", link: "/import", icon: ImportIcon },
//         { name: "Inspection", link: "/inspection", icon: InspectionIcon },
//         { name: "Distribution", link: "/distribution", icon: DistributionIcon },
//         { name: "Track Records", link: "/tracking", icon: TrackRecordsIcon },
//       ],
//     },
//   ];

//   const [open, setOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <section className="flex flex-col md:flex-row bg-white-contents dark:bg-black-contents  md:h-screen gap-6 overflow-auto overflow-x-hidden shadow-md shadow-[#00000057]">
//       <div
//         ref={sidebarRef}
//         className={`${
//           open
//             ? "md:w-[14rem]  overflow-x-hidden"
//             : "md:w-20  overflow-x-hidden"
//         } w-full duration-200 px- flex flex-col justify-between`}
//       >
//         <div>
//           <div className="pt-3 flex justify-end ">
//             <div
//               className="absolute top-0 flex cursor-pointer items-center justify-end border-green-500 border w-full"
//               onClick={toggleSidebar}
//             >
//               <svg
//                 className="h-6 w-6  rotate-90 text-green-pri transition-transform duration-200 ease-in-out dark:text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {open ? (
//                   // Show collapse arrow when expanded
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   ></path>
//                 ) : (
//                   // Show expand arrow when collapsed
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 15l7-7 7 7"
//                   ></path>
//                 )}
//               </svg>
//             </div>
//           </div>

//           <div className="text-xl mt-6 font-semibold px-3 overflow-hidden">
//             {open ? <MedLebLogo /> : <MedLebLogoOffCanvas />}
//           </div>

//           <div className="mt-4 2xl:mt-14 flex flex-col relative items-center md:items-start overflow-auto overflow-x-hidden px-3">
//             <div className="gap-1 md:gap-1 2xl:gap-6 relative flex flex-col text-black-text dark:text-white-text">
//               {menus?.map((group, groupIndex) => (
//                 <React.Fragment key={groupIndex}>
//                   {/* Title */}
//                   <h2
//                     className={`text-sm font-semibold px-3 mt-1 ${
//                       group.margin ? "2xl:mt-20" : ""
//                     }`}
//                   >
//                     {group.title}
//                   </h2>
//                   {/* Menu items */}
//                   {group.items.map((menu, itemIndex) => (
//                     <div key={itemIndex} className="flex flex-row">
//                       {" "}
//                       {/* Wrap each Link in a div with flex-row */}
//                       <Link
//                         to={menu.link}
//                         className={` ${
//                           group.margin ? "m-0" : "" // Apply margin above the section title if section has margin property
//                         } group  w-full flex items-center gap-3.5 p-2 rounded-md hover:text-green-pri`}
//                       >
//                         {/* Icon rendering */}
//                         <div className="group-hover:text-green-pri">
//                           {React.createElement(menu.icon, {
//                             size: open ? 20 : 16,
//                           })}
//                           {/* Adjust size value as needed */}
//                         </div>
//                         {/* Menu name */}
//                         <h2
//                           style={{
//                             fontSize: "16px", // Adjust font size as needed
//                             fontWeight: "500", // Adjust font weight as needed
//                             transitionDelay: `${
//                               groupIndex * 100 + itemIndex * 100
//                             }ms`,
//                           }}
//                           className={`whitespace-pre duration-200 ${
//                             !open && "opacity-0 translate-x-28 overflow-hidden"
//                           }`}
//                         >
//                           {menu.name}
//                         </h2>
//                         {/* Additional menu name */}
//                         <h2
//                           className={`${
//                             open && "hidden"
//                           } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 px-0 py-0 w-0 overflow-hidden `}
//                         >
//                           {menu.name}
//                         </h2>
//                       </Link>
//                     </div>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SidebarLeft;
// // ///////////////////
// // ///////////////////
// // ///////////////////
// // ///////////////////
// // ///////////////////
// // ///////////////////

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MedLebLogoOffCanvas from "./MedLebLogoOffCanvas";
import MedLebLogo from "./MedLebLogo";
import HomeGrayIcon from "./icons/HomeGrayIcon.jsx";
import SearchGrayIcon from "./icons/SearchGrayIcon.jsx";
import DashboardGrayIcon from "./icons/DashboardGrayIcon.jsx";
import AddIcon from "./icons/AddIcon.jsx";
import ImportIcon from "./icons/ImportIcon.jsx";
import DistributionIcon from "./icons/DistributionIcon.jsx";
import InspectionIcon from "./icons/InspectionIcon.jsx";
import TrackRecordsIcon from "./icons/TrackRecordsIcon.jsx";

const SidebarLeft = () => {
  const menus = [
    {
      title: "Menu",
      // margin: true,
      items: [
        { name: "Home", link: "/", icon: HomeGrayIcon },
        { name: "Search", link: "/search", icon: SearchGrayIcon },
        { name: "Dashboard", link: "/dashboard", icon: DashboardGrayIcon },
      ],
    },
    {
      title: "Drug",
      margin: true,
      items: [
        { name: "Add", link: "/add", icon: AddIcon, margin: false },
        { name: "Import", link: "/import", icon: ImportIcon },
        { name: "Inspection", link: "/inspection", icon: InspectionIcon },
        { name: "Distribution", link: "/distribution", icon: DistributionIcon },
        { name: "Track Records", link: "/tracking", icon: TrackRecordsIcon },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row bg-white-contents dark:bg-black-contents  md:h-screen gap-6 overflow-auto overflow-x-hidden shadow-md shadow-[#00000057]">
      <div
        ref={sidebarRef}
        className={`${
          open
            ? "md:w-[14rem]  overflow-x-hidden"
            : "md:w-20  overflow-x-hidden"
        } w-full duration-200 px- flex flex-col justify-between`}
      >
        <div>
          <div className="pt-3 flex justify-end ">
            <div
              className="absolute top-0 flex cursor-pointer p-2 items-center justify-end w-full"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6  rotate-90 text-green-pri transition-transform duration-200 ease-in-out dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  // Show collapse arrow when expanded
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                ) : (
                  // Show expand arrow when collapsed
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

          <div className="text-xl mt-6 font-semibold px-3 overflow-hidden">
            {open ? <MedLebLogo /> : <MedLebLogoOffCanvas />}
          </div>

          <div className="mt-4 2xl:mt-14 flex flex-col relative items-center md:items-start overflow-auto overflow-x-hidden px-3">
            <div className="gap-1 md:gap-1 2xl:gap-6 relative flex flex-col text-black-text dark:text-white-text">
              {menus?.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {/* Title */}
                  <h2
                    className={`text-sm font-semibold px-3 mt-1 ${
                      group.margin ? "2xl:mt-20" : ""
                    }`}
                  >
                    {group.title}
                  </h2>
                  {/* Menu items */}
                  {group.items.map((menu, itemIndex) => (
                    <div key={itemIndex} className="flex flex-row">
                      {" "}
                      {/* Wrap each Link in a div with flex-row */}
                      <Link
                        to={menu.link}
                        className={` ${
                          group.margin ? "m-0" : "" // Apply margin above the section title if section has margin property
                        } group  w-full flex items-center gap-3.5 p-2 rounded-md hover:text-green-pri`}
                      >
                        {/* Icon rendering */}
                        <div className="group-hover:text-green-pri">
                          {React.createElement(menu.icon, {
                            size: open ? 20 : 16,
                          })}
                          {/* Adjust size value as needed */}
                        </div>
                        {/* Menu name */}
                        <h2
                          style={{
                            fontSize: "16px", // Adjust font size as needed
                            fontWeight: "500", // Adjust font weight as needed
                            transitionDelay: `${
                              groupIndex * 100 + itemIndex * 100
                            }ms`,
                          }}
                          className={`whitespace-pre duration-200 ${
                            !open && "opacity-0 translate-x-28 overflow-hidden"
                          }`}
                        >
                          {menu.name}
                        </h2>
                        {/* Additional menu name */}
                        <h2
                          className={`${
                            open && "hidden"
                          } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 px-0 py-0 w-0 overflow-hidden `}
                        >
                          {menu.name}
                        </h2>
                      </Link>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarLeft;
// ///////////////////
// ///////////////////
// ///////////////////
// ///////////////////
// ///////////////////
// ///////////////////

