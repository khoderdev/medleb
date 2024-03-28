import React from 'react';
import PropTypes from 'prop-types';

import useCustomNavigation from './useCustomNavigation';

const GlobalPagesLayouts = ({ title, children, titleStyles }) => {
  useCustomNavigation();

  // const renderContent = (
  //   <div className="flex border border-red-500 items-center">
  //     <div className="flex-grow" />
  //     <div className="flex flex-row items-center space-x-1">
  //       <LanguagePopover />
  //       <NotificationsPopover />
  //       <AccountPopover />
  //     </div>
  //   </div>
  // );

  return (
    <div className="main-page items-center w-full h-[100svh] bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
      <div className="header py-4 pb-0 pl-0 flex w-full justify-center items-center">
        {/* <div className="" /> */}
        <h1
          className={`text-[2rem] leading-tight font-semibold text-green-pri text-center ${titleStyles}`}
        >
          {title}
        </h1>
     
        {/* <Searchbar /> */}
      </div>
      <div className="content w-full h-full overflow-auto rounded-3xl pt-4 pb-10 text-center bg-white-contents dark:bg-black-contents px-2">
        {children}
      </div>
    </div>
  );
};

GlobalPagesLayouts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  titleStyles: PropTypes.string,
};

export default GlobalPagesLayouts;
