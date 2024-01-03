// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import ArrowBack from "@mui/icons-material/ArrowBack";
// import panadol from "../../images/panadol.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Modal from "react-modal";
// import { Magnifier } from "react-image-magnifiers";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import "./ModalStyles.css";
// // Set the app root element for Modal
// Modal.setAppElement("#root");

// function Drugs() {
//   const { id } = useParams();
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [drug, setDrug] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:3500/drugs/${id}`).then((res) => {
//       setDrug(res.data);
//     });
//   }, [id]);

//   const openModal = () => {
//     console.log("Opening modal...");
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     console.log("Closing modal...");
//     setModalIsOpen(false);
//   };
//   console.log("Is modal open?", modalIsOpen);

//   console.log(drug);
//   return (
//     <div className="p-4 dark:text-white-text sm:p-8">
//       <div className="mx-auto max-w-[95%] text-left">
//         <Link
//           to={`/list`}
//           className="mb-4 inline-block self-start p-3 text-lg text-teal-600"
//         >
//           <ArrowBackIosIcon fontSize="medium" className="inline align-middle" />
//           Back
//         </Link>

//         {drug && (
//           <div className="rounded-xl bg-white-contents dark:bg-black-contents p-4 shadow-lg shadow-[#0000006e] dark:bg-black sm:p-8 ">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div className="flex flex-col items-center">
//                 <img
//                   onClick={openModal}
//                   src={panadol}
//                   alt="Drug"
//                   className="h-auto cursor-pointer w-[300px] rounded-lg p-4"
//                 />
//                 <p className="text-gray-500 text-sm mt-2">Medicine Image</p>
//               </div>
//               {/* Image Modal */}
//               <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="Image Modal"
//                 className="modal-content"
//                 overlayClassName="modal-overlay"
//               >
//                 <div className="flex justify-end">
//                   <button
//                     onClick={closeModal}
//                     className="text-3xl cursor-pointer"
//                   >
//                     &times;
//                   </button>
//                 </div>
//                 <Magnifier
//                   imageSrc={panadol}
//                   imageAlt="Drug"
//                   className="modal-image"
//                 />
//               </Modal>

//               <div className="flex flex-col  border border-red-500">
//                 <h2 className="text-5xl font-bold mb-8">{drug.drugName}</h2>
//                 <p className="text-gray-600 mb-4">{drug.presentation}</p>
//                 <div className="flex flex-col justify-between gap-2 mb-24">
//                   <h3 className="text-2xl">
//                     Foreign Price:
//                     <span className="text-2xl font-bold text-teal-600 ml-2">
//                       {drug.priceForeign} {drug.currencyForeign}
//                     </span>
//                   </h3>
//                   <h3 className="text-2xl">
//                     Price in US Dollar:
//                     <span className="text-2xl font-bold text-teal-600 ml-2">
//                       {drug.convertToUSD} USD
//                     </span>
//                   </h3>
//                   <h3 className="text-2xl">
//                     Price in Lebanese Pound:
//                     <span className="text-2xl font-bold text-teal-600 ml-2">
//                       {drug.convertToLBP} LBP
//                     </span>
//                   </h3>
//                 </div>
//                 <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
//                   Substitute
//                 </button>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-xl font-semibold mb-4">Medicine Details</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Left Column */}
//                 <div>
//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold">Ingredients</h4>
//                     <p>{drug.ingredientsAndstrength}</p>
//                   </div>
//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold">Dosage</h4>
//                     <p>
//                       {drug.dosageValueN} {drug.dosageUnitN}
//                     </p>
//                   </div>
//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold">Form</h4>
//                     <p>{drug.form}</p>
//                   </div>
//                   {/* Add more details as needed */}
//                 </div>
//                 {/* Right Column */}
//                 <div>
//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold">Manufacturer</h4>
//                     <p>{drug.manufacturer}</p>
//                   </div>
//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold">
//                       Manufacturer Country
//                     </h4>
//                     <p>{drug.manufacturingCountry}</p>
//                   </div>
//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold">Stratum</h4>
//                     <p>{drug.stratum}</p>
//                   </div>
//                   {/* Add more details as needed */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Drugs;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import { Magnifier } from "react-image-magnifiers";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import panadol from "../../../images/panadol.png";
import "../ModalStyles.css";

Modal.setAppElement("#root");

function Drugs() {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drug, setDrug] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3500/drugs/${id}`).then((res) => {
      setDrug(res.data);
    });
  }, [id]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-4 dark:text-white-text sm:p-8">
      <div className="mx-auto max-w-[95%] text-left">
        <Link
          to={`/list`}
          className="mb-4 inline-block self-start p-3 text-lg text-teal-600"
        >
          <ArrowBackIosIcon fontSize="medium" className="inline align-middle" />
          Back
        </Link>

        {drug && (
          <div className="rounded-xl bg-white-contents dark:bg-black-contents p-4 shadow-lg sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="w-full sm:w-[35%] flex flex-col items-center">
                <img
                  onClick={openModal}
                  src={panadol}
                  alt="Drug"
                  className="h-auto cursor-pointer w-full rounded-lg p-4"
                />
                <p className="text-gray-500 text-sm mt-2">Medicine Image</p>
              </div>

              {/* Image Modal */}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
              >
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="text-3xl cursor-pointer"
                  >
                    &times;
                  </button>
                </div>
                <Magnifier
                  imageSrc={panadol}
                  imageAlt="Drug"
                  className="modal-image"
                />
              </Modal>

              <div className="w-full sm:w-[65%] flex flex-col">
                <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-8">
                  {drug.drugName}
                </h2>
                <p className="text-gray-600 mb-4">{drug.presentation}</p>
                <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4 sm:mb-24">
                  <div className="text-2xl">
                    Foreign Price:
                    <span className="font-bold text-teal-600 ml-2">
                      {drug.priceForeign} {drug.currencyForeign}
                    </span>
                  </div>
                  <div className="text-2xl">
                    Price in US Dollar:
                    <span className="font-bold text-teal-600 ml-2">
                      {drug.convertToUSD} USD
                    </span>
                  </div>
                  <div className="text-2xl">
                    Price in Lebanese Pound:
                    <span className="font-bold text-teal-600 ml-2">
                      {drug.convertToLBP} LBP
                    </span>
                  </div>
                </div>
                <Link to="/Substitute">
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                    Substitute
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Medicine Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Ingredients</h4>
                    <p>{drug.ingredientsAndstrength}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Dosage</h4>
                    <p>
                      {drug.dosageValueN} {drug.dosageUnitN}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Form</h4>
                    <p>{drug.form}</p>
                  </div>
                  {/* Add more details as needed */}
                </div>
                {/* Right Column */}
                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Manufacturer</h4>
                    <p>{drug.manufacturer}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">
                      Manufacturer Country
                    </h4>
                    <p>{drug.manufacturingCountry}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Stratum</h4>
                    <p>{drug.stratum}</p>
                  </div>
                  {/* Add more details as needed */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drugs;
