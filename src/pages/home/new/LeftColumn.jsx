// // const LeftColumn = () => {
// //   return (
// //     <div
// //       className="flex justify-between md:w-[35%] h-screen md:min-h-[45%]"
// //       style={{
// //         backgroundImage: "url('/public/assets/EB-Quote.png')",
// //         backgroundAttachment: "fixed",
// //         backgroundPosition: "120px 20px", // Adjust horizontal and vertical position
// //         backgroundSize: "contain", // Adjust the size
// //         backgroundRepeat: "no-repeat", // Adjust the size
// //       }}
// //     >
// //       {/* Content goes here */}
// //     </div>
// //   );
// // };
// // export default LeftColumn;

// import React, { useState, useEffect } from "react";
// import "./LeftColumn.css"; // Import the CSS file

// const LeftColumn = () => {
//   const [isSmallerScreen, setIsSmallerScreen] = useState(false);

//   useEffect(() => {
//     // Function to handle window resize and update state accordingly
//     const handleResize = () => {
//       setIsSmallerScreen(window.innerWidth <= 768);
//     };

//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Call handleResize once to initialize state
//     handleResize();

//     // Remove event listener on component unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       id="left-col"
//       className={`flex justify-between md:w-[35%] h-screen md:min-h-[45%] ${
//         isSmallerScreen ? "smaller-screen-background" : "default-background"
//       }`}
//       style={{
//         backgroundImage: "url('/dist/assets/EB-Quote.png')",
//         backgroundAttachment: "fixed",
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Content goes here */}
//     </div>
//   );
// };

// // export default LeftColumn;
import React, { useState, useEffect } from "react";
import "./LeftColumn.css"; // Import the CSS file

const LeftColumn = () => {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to handle window resize and update state accordingly
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to initialize state
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`relative flex justify-between md:w-[35%] h-screen `}>
      {/* Background image wrapper */}
      <div
        className={`absolute inset-0 ${
          isSmallerScreen
            ? "h-screen"
            : "h-screen 2xl:pl-16"
        }`}
      >
        <img
          src="/assets/EB-Quote.png"
          alt="Background Image"
          className="w-[23rem] h-full object-cover"
          style={{ position: "fixed" }}
        />
      </div>
      {/* Content goes here */}
    </div>
  );
};

export default LeftColumn;
// import React, { useState, useEffect } from "react";
// import "./LeftColumn.css"; // Import the CSS file

// const LeftColumn = () => {
//   const [isSmallerScreen, setIsSmallerScreen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [imageSize, setImageSize] = useState("contain");

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallerScreen(window.innerWidth <= 768);
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     // Adjust image size based on screen width
//     setImageSize(window.innerWidth <= 768 ? "contain" : "contain");
//   }, [isSmallerScreen]);

//   return (
//     <div className="relative flex justify-between md:w-[35%] h-screen">
//       <div
//         className={`absolute inset-0 ${
//           isSmallerScreen
//             ? "h-screen w-[20rem] sm:bg-red-500"
//             : "h-screen w-== bg-blue-500"
//         }`}
//       >
//         <img
//           src="/dist/assets/EB-Quote.png"
//           alt="Emile Bitar"
//           className={`w-full h-full object-${imageSize}`}
//           style={{
//             position: "fixed",
//             top: isSmallerScreen ? "0" : "50%", // Center vertically for larger screens
//             transform: isSmallerScreen ? "none" : "translateY(-50%)", // Center vertically for larger screens
//           }}
//         />
//       </div>
//       {/* Content goes here */}
//     </div>
//   );
// };

// export default LeftColumn;
