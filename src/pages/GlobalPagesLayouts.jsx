import React from "react";

const GlobalPagesLayouts = ({ title, children }) => {
  return (
    <div className="main-page items-center w-full h-[100svh] text-black-bg dark:text-white-text bg-white-bg dark:bg-black-bg flex flex-col sm:pt-4 pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
      <div className="title py-4 pl-4 flex w-full justify-center items-center">
        <h1 className="text-3xl font-semibold text-center text-green-pri">
          {title}
        </h1>
      </div>
      <div className="content w-full sm:h-full overflow-auto rounded-3xl p-4 text-center bg-white-contents dark:bg-black-contents">
        {children}
      </div>
    </div>
  );
};

export default GlobalPagesLayouts;
