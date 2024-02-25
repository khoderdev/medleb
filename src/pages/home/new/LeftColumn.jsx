// const LeftColumn = () => {
//   return (
//     <div
//       className="flex justify-between md:w-[35%] h-screen md:min-h-[45%]"
//       style={{
//         backgroundImage: "url('/public/assets/EB-Quote.png')",
//         backgroundAttachment: "fixed",
//         backgroundPosition: "120px 20px", // Adjust horizontal and vertical position
//         backgroundSize: "contain", // Adjust the size
//         backgroundRepeat: "no-repeat", // Adjust the size
//       }}
//     >
//       {/* Content goes here */}
//     </div>
//   );
// };
// export default LeftColumn;

import React, { useState, useEffect } from "react";
import "./LeftColumn.css"; // Import the CSS file

const LeftColumn = () => {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    // Function to handle window resize and update state accordingly
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to initialize state
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
    id="EB"
      className={`flex justify-between md:w-[35%] h-screen md:min-h-[45%] ${
        isSmallerScreen ? "smaller-screen-background" : "default-background"
      }`}
      style={{
        backgroundImage: "url('/public/assets/EB-Quote.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content goes here */}
    </div>
  );
};

export default LeftColumn;
