import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import useCustomNavigation from "./useCustomNavigation";

const GlobalPagesLayouts = ({ title, children, titleStyles }) => {
  const { goBack } = useCustomNavigation();

  return (
    <div className="main-page items-center w-full h-[100svh] text-black-bg dark:text-white-text bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
      <div className="title py-4 pb-1 flex w-full justify-between items-end pl-2 ">
        <div className=""></div> {/* Placeholder */}
        {/* <h1 className="text-[2rem] leading-tight font-semibold text-center text-green-pri"> */}
        <h1
          className={`text-[2rem] leading-tight font-semibold text-green-pri text-center ${titleStyles}`}
        >
          {title} {/* Page Title */}
        </h1>
        <div className=""></div> {/* Placeholder */}
      </div>
      <div className="content w-full h-full sm:h-full overflow-auto rounded-3xl p-0 text-center bg-white-contents dark:bg-black-contents">
        {children}
      </div>
    </div>
  );
};

export default GlobalPagesLayouts;
// import React from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";

// const GlobalPagesLayouts = ({ title, children, customNavigation }) => {
//   return (
//     <div className="main-page items-center w-full h-[100svh] text-black-bg dark:text-white-text bg-white-bg dark:bg-black-bg flex flex-col pb-[4.5em] sm:pb-4 px-2 sm:px-6 dark:text-white-500">
//       <div className="title py-4 pb-1 flex w-full justify-between items-end pl-2 ">
//         <div className=""></div> {/* Placeholder */}
//         <h1 className="text-[2rem] leading-tight font-semibold text-center text-green-pri">
//           {title} {/* Page Title */}
//         </h1>
//         <div className="flex w-fit">
//           <Link to={`/list`} className="text-md text-[#00a651]">

//             <AiOutlineClose fontSize="small" />
//             Close
//           </Link>
//         </div>
//       </div>
//       <div className="content w-full h-full sm:h-full overflow-auto rounded-3xl p-0 text-center bg-white-contents dark:bg-black-contents">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default GlobalPagesLayouts;
