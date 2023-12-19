// /* eslint-disable tailwindcss/no-custom-classname */
// import AddDrug from "./Forms/Add";
// import { Link } from "react-router-dom";
// import CloseIcon from "@mui/icons-material/Close";

// const CenteredBoxContainer = () => {
//   return (
//     <div className="flex h-full flex-col items-center bg-gray-200 px-2 pb-24 dark:bg-[#1e1e1e] sm:h-[100svh] sm:py-16 sm:pt-0 lg:py-10 lg:pt-0 xl:pt-10">
//       <h1 className="ml-4 mt-5 text-center text-4xl text-[#259f83] sm:mt-0">
//         Add New Medicines
//       </h1>
//       <div className="flex w-full items-start justify-end py-1 pl-4 xs:w-full sm:w-[38em] md:w-[48em] lg:w-[60em]">
//         <Link to={`/list`} className="text-md  text-[#259f83]">
//           Close
//           <CloseIcon fontSize="medium" className="arrowLeft" />
//         </Link>
//       </div>

//       <div className="box border-2xl w-full overflow-y-auto rounded-3xl bg-white p-2 shadow-xl dark:bg-black dark:text-white xs:w-full sm:h-[730px] sm:w-[38em] md:h-[740px] md:w-[45em] lg:h-[900px] lg:w-[62em] xl:h-auto">
//         <AddDrug />

//     </div>
//     // </div>
//   );
// };

// export default CenteredBoxContainer;

// /* eslint-disable tailwindcss/no-custom-classname */
// import AddDrug from "./Forms/Add";
// import { Link } from "react-router-dom";
// import CloseIcon from "@mui/icons-material/Close";

// const CenteredBoxContainer = () => {
//   return (
//     <div className="flex h-full flex-col items-center bg-gray-200 px-2 pb-24 dark:bg-[#1e1e1e] sm:h-[100svh] sm:py-16 sm:pt-6 md:pt-8 lg:py-10 lg:pt-6 xl:pt-10">
//       <h1 className="ml-4 mt-5 text-center text-4xl text-[#259f83] sm:mt-0">
//         Add New Medicines
//       </h1>
//       <div className="flex w-full items-start justify-end py-1 pl-4 xs:w-full sm:w-[38em] md:w-[48em] lg:w-[60em]">
//         <Link to={`/list`} className="text-md  text-[#259f83]">
//           Close
//           <CloseIcon fontSize="medium" className="arrowLeft" />
//         </Link>
//       </div>
//       <div className="box border-2xl h-[48svh] w-full overflow-y-hidden rounded-3xl bg-white p-2  dark:bg-black dark:text-white xs:w-full sm:w-[38em] md:w-[45em] lg:w-[64em]">
//         <AddDrug />
//       </div>
//     </div>
//   );
// };

// export default CenteredBoxContainer;







/* eslint-disable tailwindcss/no-custom-classname */
import AddDrug from "./Forms/Add";
// import { Link } from "react-router-dom";
// import CloseIcon from "@mui/icons-material/Close";

const CenteredBoxContainer = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 dark:bg-[#1e1e1e] sm:pb-12 sm:pt-0">
      {/* <h1 className="pl-4 text-center text-4xl text-[#259f83]">
        Add New Medicines
      </h1> */}
      {/* <div className="flex w-full items-start justify-end py-1 pr-3 sm:w-[65em] ">
        <Link to={`/list`} className="text-md  text-[#259f83]">
          Close
          <CloseIcon fontSize="medium" className="arrowLeft" />
        </Link>
      </div> */}
      <div className="add-drug-container w-full overflow-hidden">
        <AddDrug />
      </div>
    </div>
  );
};

export default CenteredBoxContainer;