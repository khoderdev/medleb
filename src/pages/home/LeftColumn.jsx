import React from "react";
import EBQuote from "../../images/EB-Quote.png";

const LeftColumn = () => {
  return (
    <div className="flex justify-between md:w-[35%] rounded-xl h-screen">
      <img className="bitar-image w-full object-contain" src={EBQuote} alt="Emil" />
    </div>
  );
};

export default LeftColumn;
