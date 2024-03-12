/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';

import './LeftColumn.css';

const LeftColumn = () => {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    // Function to handle window resize and update state accordingly
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize once to initialize state
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex justify-between md:w-[50%] h-screen overflow-x-hidden">
      <div
        className={`absolute inset-0 overflow-x-hidden ${
          isSmallerScreen ? 'h-screen overflow-x-hidden' : 'h-screen 2xl:pl-16 overflow-x-hidden'
        }`}
      >
        <img
          src="/assets/EB-Quote.png"
          alt="Background Image"
          className={`w-3/4 lg:w-96 h-full ml-6 object-cover ${isSmallerScreen ? '' : '2xl:w-[80%] 2xl:ml-[-2rem]'}`}
          // style={{ position: 'fixed' }}
        />
      </div>
    </div>
  );
};

export default LeftColumn;
