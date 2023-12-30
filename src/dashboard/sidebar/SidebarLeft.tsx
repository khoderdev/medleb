import { useState, useEffect, useRef } from "react";

import { MedLebLogoIcon } from "./icons/MedLebLogoIcon";
import { MedLebLogo } from "./icons/MedLebLogo";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import React from "react";
import { RiUserLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const SidebarLeft = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconsClick = (iconName) => {
    // Toggle the active state
    setActiveIcon((prevIcon) => (prevIcon === iconName ? null : iconName));
  };

  const handleIconClick = () => {
    // Toggle the active state on icon click
    setIsActive(!isActive);
  };
  const [isCollapsed, setCollapsed] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setCollapsed(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div ref={sidebarRef} className="">
      <div
        className={`z-50 h-[100svh] bg-white-contents dark:bg-black-contents shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)]  ${
          isCollapsed ? "w-50" : "w-250"
        }px text-gray-700 dark:text-white-text [100svh] shrink-0 overflow-hidden text-left text-xl transition-all duration-150 ease-in-out`}
        style={{ right: isCollapsed ? 0 : "auto" }}
      >
        {isCollapsed ? (
          // Collapsed state: MedLebLogoIcon
          <div className="logo-icon p-2">
            <MedLebLogo />
          </div>
        ) : (
          // Expanded state: MedLebLogo
          <div className="logo p-2">
            <MedLebLogoIcon />
          </div>
        )}

        <div
          className="relative top-0 flex cursor-pointer items-center justify-end w-full ml-3 p-2"
          onClick={toggleCollapse}
        >
          {/* Show expand/collapse arrow */}
          <svg
            className={`h-6 w-6 text-green-pri transition-transform duration-300 ease-in-out dark:text-white ${
              isCollapsed ? "rotate-90" : "rotate-90"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isCollapsed ? (
              // Show expand arrow when collapsed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            ) : (
              // Show collapse arrow when expanded
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            )}
          </svg>
        </div>

        {isCollapsed ? (
          // Show icons with text stacked when expanded
          <div className="w-[250px] p-2 pt-14 text-gray-900 dark:text-gray-100">
            <div className="flex flex-col items-start gap-5">
              <Link
                to="/profile"
                className="flex cursor-pointer items-center"
                onClick={() => handleIconClick()}
              >
                <RiUserLine
                  className={`text-[33px] ${
                    activeIcon === "user" ? "text-[#259F83]" : "text-[#9CA5BF]"
                  } hover:text-[#259F83]`}
                  onClick={() => handleIconsClick("user")}
                />
                <span className="text-md ml-4 text-gray-900 dark:text-gray-100">
                  Profile
                </span>
              </Link>
              <Link
                to="/notifications"
                className="flex cursor-pointer items-center"
                onClick={() => handleIconClick()}
              >
                <FaRegBell
                  className={`text-[33px] ${
                    activeIcon === "bell" ? "text-[#259F83]" : "text-[#9CA5BF]"
                  } hover:text-[#259F83]`}
                  onClick={() => handleIconsClick("bell")}
                />
                <span className="text-md ml-4 text-gray-900 dark:text-gray-100">
                  Notifications
                </span>
              </Link>
            </div>
          </div>
        ) : (
          // Show icons without text when collapsed, stacked
          <div className="flex flex-col items-center gap-5 p-2 pt-14 text-gray-900 dark:text-gray-100">
            <Link to="/profile" onClick={() => handleIconClick()}>
              <RiUserLine
                className={`text-[33px] ${
                  activeIcon === "user" ? "text-[#259F83]" : "text-[#9CA5BF]"
                } hover:text-[#259F83]`}
                onClick={() => handleIconsClick("user")}
              />
            </Link>
            <Link to="/notifications" onClick={() => handleIconClick()}>
              <FaRegBell
                className={`text-[33px] ${
                  activeIcon === "bell" ? "text-[#259F83]" : "text-[#9CA5BF]"
                } hover:text-[#259F83]`}
                onClick={() => handleIconsClick("bell")}
              />
            </Link>
          </div>
        )}
      </div>
      profile
    </div>
  );
};

export default SidebarLeft;
function setIsActive(arg0: boolean) {
  throw new Error("Function not implemented.");
}
