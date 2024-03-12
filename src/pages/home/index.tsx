import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-white-bg dark:bg-black-bg  overflow-x-hidden">
      <div className="flex-1 md:flex h-screen relative overflow-x-hidden">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
