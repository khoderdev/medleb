// import React from "react";
// import EBQuote from "../../images/EB-Quote.png";

// const LeftColumn = () => {
//   return (
//     <div className="flex justify-between md:w-[35%] rounded-xl h-screen">
//       <img className="bitar-image w-full object-contain" src={EBQuote} alt="Emil" />
//     </div>
//   );
// };

// export default LeftColumn;


import React from "react";
import EBQuote from "../../images/EB-Quote.png";

const LeftColumn = () => {
  return (
    <div className="flex justify-center md:w-[35%] pb-10 sm:pb-0 rounded-xl h-[100svh]">
      <img
        className="bitar-image w-[84%] sm:w-auto h- object-contain"
        src={EBQuote}
        alt="Emil Bitar"
      />
    </div>
  );
};

export default LeftColumn;
