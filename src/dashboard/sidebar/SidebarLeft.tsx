import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { MedLebLogoSidebar } from "./icons/MedLebLogoSidebar";
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
          className={`z-50 h-[100svh] bg-white-contents dark:bg-black-contents ${isCollapsed ? "w-50" : "w-250"
            }px text-gray-700 dark:text-white-text h-[100svh] shrink-0 text-lg transition-all duration-150 ease-in-out sm:overflow-y-auto 2xl:overflow-hidden`}
          style={{ right: isCollapsed ? 0 : "auto" }}
        >
          {/* Sidebar Header */}
          {isCollapsed ? (
            <>
              <div className="header-expanded w-56 logo-icon flex justify-between items-center pl-2 pt-2 pb-0">
                <div className="flex justify-start items-center logo pl-2 pt-2">
                  <MedLebLogoIcon />
                  <p className="text-[#FAAF40] font-bold text-xl">MedLeb</p>
                </div>
                <div className="ARROW-CONTAINER mr-3">
                  <div
                    className="collapse-icon absolute bg-[#00a651b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center w-fit"
                    onClick={toggleCollapse}
                  >
                    <svg
                      className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white ${isCollapsed ? "rotate-90" : "rotate-90"
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
            </>
          ) : (
            <div className="header-collapsed bg-white-bg dark:bg-black-contents">
              <div className="logo px-4 pt-4">
                <MedLebLogoIcon />
              </div>
              <div
                className="expand-icon absolute bg-[#00a651b7] mt-1 rounded-[8px] z-50 top-0 flex cursor-pointer items-center justify-end w-fit ml-20 px-0 "
                onClick={toggleCollapse}
              >
                <svg
                  className={`h-5 w-5 text-white-bg transition-transform duration-300 ease-in-out dark:text-white-text ${isCollapsed ? "hidden ml-6" : "rotate-90"
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
            <div className="flex flex-col w-full h-full items-center justify-evenly mt-[-1em] px-2 pl-4 overflow-y-auto text-gray-900 dark:text-gray-100 ">
              {/* icons without text when collapsed, stacked */}

              <div className="menu-section w-full justify-center items-start mt-[-1em] 2xl:mt-[-3em] gap-6 lg-gap-4 flex flex-col">
                {/* Menu Section Expanded/Open */}
                <motion.div
                  {...framerIcon}
                  className="menu-section w-full justify-center items-start md:gap-4 2xl:gap-6 flex flex-col"
                >
                  <h2 className="text-md font-semibold mb-[-1em] 2xl:mb-0 text-gray-700 dark:text-[#ffffffaf]">
                    {sections[0].title}
                  </h2>
                  <Link
                    to="/"
                    className="flex w-full gap-3 mt-[] text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <HomeGrayIcon />
                    {/* <motion.span {...framerText} className="text-md"> */}
                    Home
                    {/* </motion.span> */}
                  </Link>
                  <Link
                    to="/list"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <SearchGrayIcon />
                    Search
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <DashboardGrayIcon />
                    Dashboard
                  </Link>
                </motion.div>
              </div>

              <div className="divider mt-[-1.9em]  h-px w-[80%] self-center bg-[#00a651e1] dark:bg-green-pri"></div>

              {/* Drug Section Expanded/Open */}

              <div className="drug-section w-full justify-center items-start mt-[-2em] gap-6 flex flex-col">
                <motion.div
                  {...framerIcon}
                  className="justify-center items-start md:gap-4 2xl:gap-6 flex flex-col"
                >
                  <h2 className="text-md font-semibold mb-[-1em] 2xl:mb-0 text-gray-700 dark:text-[#ffffffaf]">
                    {sections[1].title}
                  </h2>
                  <Link
                    to="/add"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <AddIcon className="text-3xl" />
                    Add
                  </Link>
                  <Link
                    to="/import"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <ImportIcon className="text-3xl" />
                    Importation
                  </Link>
                  <Link
                    to="/inspection"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <InspectionIcon className="text-3xl" />
                    Inspection
                  </Link>
                  <Link
                    to="/distribution"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <DistributionIcon className="text-3xl" />
                    Distribution
                  </Link>
                  <Link
                    to="/tracking"
                    className="flex w-full gap-3 text-gray-900 transition-all hover:text-[#00a651] dark:text-[#ffffffaf] dark:hover:text-green-pri"
                  >
                    <TrackRecordsIcon className="text-3xl" />
                    Track Records
                  </Link>
                </motion.div>
              </div>
            </div>
          ) : (
            // /////////////////////////////////COLLAPSED/CLOSED///////////////////////////////////////////////////////////////////////////////////

            <div className="flex flex-col  w-full h-full items-center justify-evenly px-2 overflow-y-auto bg-white-bg dark:bg-black-contents text-gray-900 dark:text-gray-100 mt-[-2em]">
              {/* icons without text when collapsed, stacked */}

              <div className="menu-section w-full justify-center items-center gap-6 flex flex-col">
                {/* Menu Section */}
                {/* <h2 className="text-md font-semibold  text-gray-700 dark:text-[#ffffffaf]">
                {sections[1].title}
              </h2> */}
                <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
                  <div className="h-6"></div>
                </h2>
                <Link to="/">
                  <HomeGrayIcon />
                </Link>
                <Link to="/list">
                  <SearchGrayIcon />
                </Link>
                <Link to="/dashboard">
                  <DashboardGrayIcon />
                </Link>
              </div>

              <div className="divider ol  2xl:pt-0"></div>

              {/* Drug Section */}
              <div className="drug-section w-full mt-[-2em] gap-6 lg:gap-6 justify-center items-center flex flex-col">
                <h2 className="text-lg font-semibold mb- text-gray-700 dark:text-[#ffffffaf]">
                  <div className="h-6"></div>
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
  scrollY: "none",
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
