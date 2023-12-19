/* eslint-disable tailwindcss/no-custom-classname */
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { AiOutlineRollback } from "react-icons/ai";
import { MedLebLogo } from "../icons/MedLebLogo";
import { Link } from "react-router-dom";
import "../../sidebar/SideBar.css";

import HomeGrayIcon from "../icons/HomeGrayIcon.jsx";
import { SearchGrayIcon } from "../icons/SearchGrayIcon";
import { DashboardGrayIcon } from "../icons/DashboardGrayIcon";
import { AddIcon } from "../icons/AddIcon.jsx";
import { ImportIcon } from "../icons/ImportIcon";
import { DistributionIcon } from "../icons/DistributionIcon";
import { InspectionIcon } from "../icons/InspectionIcon";
import { TrackRecordsIcon } from "../icons/TrackRecordsIcon";
import React from "react";

export const SidebarOffCanvas = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className=" fixed left-0 top-0 z-50 ml-3 mt-4 rounded-xl border-2 border-[#259f83] p-3 text-[#259f83]  "
        aria-label="toggle sidebar"
      >
        <GiHamburgerMenu />
      </button>

      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed inset-0 z-40 backdrop-blur-sm dark:backdrop-blur-sm"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="custom-scrollbar  fixed inset-y-0 left-0 z-50 h-[100svh] w-[67%] overflow-x-hidden bg-[#e0e0e0] dark:bg-black sm:w-[20%]  "
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex  items-center justify-between  border-[#259f8373] p-5 text-gray-900 dark:text-[#ffffffaf] ">
                {/* <span className="text-2xl ">MedLeb</span> */}
                <MedLebLogo />
                <div className="flex items-center justify-between">
                  {/* <ThemeToggle /> */}

                  <button
                    onClick={toggleSidebar}
                    className="mr-[-15px] rounded-xl border border-[#259f83e1] p-3"
                    aria-label="close sidebar"
                  >
                    <AiOutlineRollback />
                  </button>
                </div>
              </div>
              <ul className="items flex h-full max-h-[calc(100vh-72px)] flex-col justify-start overflow-y-auto pt-4">
                {sections.map((section) => (
                  <div key={section.title} className="ml-5">
                    <h2 className="mb- text-lg font-semibold text-gray-700 dark:text-[#ffffffaf]">
                      {section.title}
                    </h2>
                    {section.items.map((item, idx) => (
                      <li key={item.title} className="mt-[-15px] flex flex-col">
                        {" "}
                        {/* Adjust mt value */}
                        <Link
                          onClick={toggleSidebar}
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
                        {/* Conditionally render a divider after "Dashboard" icon */}
                        {item.title === "Dashboard" && (
                          <div className="divider my-6 ml-[-25px] h-px w-[80%] self-center bg-[#259f83e1] dark:bg-[#ffffffaf]"></div>
                        )}
                      </li>
                    ))}
                  </div>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

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
      { title: "Import", Icon: ImportIcon, to: "/importation" },
      { title: "Inspection", Icon: InspectionIcon, to: "/inspection" },
      {
        title: "Distribution",
        Icon: DistributionIcon,
        to: "/distribution",
      },

      { title: "Track Records", Icon: TrackRecordsIcon, to: "/tracking" },
    ],
  },
  // Add more sections as needed
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
