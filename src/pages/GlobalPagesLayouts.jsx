import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import useCustomNavigation from "./useCustomNavigation";

const GlobalPagesLayouts = ({ title, children, titleStyles }) => {
  const { goBack } = useCustomNavigation();

  return (
    <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
      <div className="title py-4 pb-0 pl-0 flex w-full justify-center items-center">
        <div className=""></div>
        <h1
          className={`text-[2rem] leading-tight font-semibold text-green-pri text-center ${titleStyles}`}
        >
          {title}
        </h1>
        <div className=""></div>
      </div>
      <div className="content w-full sm:h-full overflow-auto rounded-t-3xl pt-4 pb-10 text-center bg-white-contents dark:bg-black-contents px-2">
        {children}
      </div>
    </div>
  );
};

export default GlobalPagesLayouts;
