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
import { RiUserLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const SidebarLeft = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const sidebarRef = useRef(null);
  const ref = useRef(null);

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
          className={`z-50 h-[100svh] bg-white-contents dark:bg-black-contents shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)]  ${
            isCollapsed ? "w-50" : "w-250"
          }px text-gray-700 dark:text-white-text [100svh] shrink-0 overflow-hidden text-left text-xl transition-all duration-150 ease-in-out `}
          style={{ right: isCollapsed ? 0 : "auto" }}
        >
          {isCollapsed ? (
            <div className="logo-icon flex justify-between items-center p-2">
              <div>
                <MedLebLogo />
              </div>
              <div>
                <div
                  className="collapse-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center justify-end w-fit "
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
            </div>
          ) : (
            <div>
              <div
                className="expand-icon absolute bg-[#259f83b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center justify-end w-fit ml-16 px-0 "
                onClick={toggleCollapse}
              >
                <svg
                  className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white ${
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
              <div className="logo p-2 mt-2">
                <MedLebLogoIcon />
              </div>
            </div>
          )}

          {isCollapsed ? (
            <div className="w-[250px] p-2 pt-0 text-gray-900 dark:text-gray-100">
              <ul className="items flex h-full max-h-[calc(100vh-72px)] overflow-y-scroll overflow-x-hidden flex-col justify-start pt-2 pb-6">
                {sections.map((section) => (
                  <div key={section.title} className="ml-5">
                    <h2 className="mb- text-lg font-semibold text-gray-700 dark:text-[#ffffffaf]">
                      {section.title}
                    </h2>
                    {section.items.map((item, idx) => (
                      <li key={item.title} className="mt-[-15px] flex flex-col">
                        <Link
                          to={item.to}
                          className="flex items-center gap-3 p-5 pl-10 text-gray-900 transition-all hover:text-[#259f83] dark:text-[#ffffffaf] dark:hover:bg-black"
                        >
                          <motion.div {...framerIcon}>
                            <item.Icon className="text-3xl" />
                          </motion.div>
                          <motion.span
                            {...framerText(idx)}
                            className={item.title === "Home" ? "mt-3" : ""}
                          >
                            {item.title}
                          </motion.span>
                        </Link>
                        {item.title === "Dashboard" && (
                          <div className="divider my-6 ml-[-25px] h-px w-[80%] self-center bg-[#259f83e1] dark:bg-[#ffffffaf]"></div>
                        )}
                      </li>
                    ))}
                  </div>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-evenly h-full p-2  text-gray-900 dark:text-gray-100">
              {/* icons without text when collapsed, stacked */}
              <div className="menu-section h-fit justify-center gap-8 items-center flex flex-col">
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

              <div className="drug-section h-fit gap-4 justify-center items-center flex flex-col pb-10">
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
    items: [
      { title: "Home", Icon: HomeGrayIcon, to: "/" },
      { title: "Search", Icon: SearchGrayIcon, to: "/search" },
      { title: "Dashboard", Icon: DashboardGrayIcon, to: "/dashboard" },
    ],
  },
  {
    title: "Drug",
    items: [
      { title: "Add", Icon: AddIcon, to: "/add" },
      { title: "Import", Icon: ImportIcon, to: "/import" },
      { title: "Inspection", Icon: InspectionIcon, to: "/inspection" },
      { title: "Distribution", Icon: DistributionIcon, to: "/distribution" },
      { title: "Track Records", Icon: TrackRecordsIcon, to: "/tracking" },
    ],
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
  animate: { x: 0, boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" },
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
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.6,
  },
};
