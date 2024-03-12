import React from 'react';

import TaskView from './Tasks';
import SearchBar from './SearchBar';
import Notifications from './Notifications';

const RightColumn = () => (
  <div className="flex md:pl-2 md:pr-4 justify-between md:w-[65%] bg-white-bg dark:bg-black-bg h-screen md:min-h-[55%] z-50 overflow-x-hidden">
    {/* Right Column */}
    <div className="w-full h-screen flex flex-col px-2 pt-12 pb-[4.5rem] md:py-2 gap-2  overflow-x-hidden">
      {/* First Block */}
      <div className=''>
        <SearchBar />
      </div>

      {/* Second Block */}
      <div className="flex-0 p-0 rounded-2xl">
        <TaskView />
      </div>

      {/* Third Block */}
      <div className="flex-1 rounded-2xl p-3 bg-white-contents dark:bg-black-contents">
        <Notifications />
      </div>
    </div>
  </div>
);

export default RightColumn;
