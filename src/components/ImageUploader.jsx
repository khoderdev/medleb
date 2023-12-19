// import React, { useState } from "react";
// import ImageUploading from "react-images-uploading";

// export default function ImageUploader(props) {
//   const { formDataStep1, handleInputChange } = props;
//   const [drugImagesList, setImagesList] = useState(Array(6).fill([]));
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
//   const [imageToRemoveIndex, setImageToRemoveIndex] = useState(null);
//   const maxNumber = 1;

//   const labels = [
//     "Front Side",
//     "Back Side",
//     "Right Side",
//     "Left side",
//     "Top side",
//     "Down side",
//   ];

//   const onChange = (drugImageList, index) => {
//     console.log(drugImageList, index);

//     if (drugImageList.length > maxNumber) {
//       setConfirmationModalOpen(true);
//       setImageToRemoveIndex(null);
//       setSelectedImage(null);
//       return;
//     }

//     setImagesList((prevImagesList) => {
//       const newImagesList = [...prevImagesList];
//       newImagesList[index] = drugImageList;
//       return newImagesList;
//     });
//   };

//   const openImageModal = (index) => {
//     setSelectedImage(drugImagesList[index][0]?.data_url);
//   };

//   const closeImageModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="grid w-full grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
//       {drugImagesList.map((drugImages, index) => (
//         <div key={index} className="flex flex-col gap-4">
//           <ImageUploading
//             value={drugImages}
//             onChange={(drugImageList) => onChange(drugImageList, index)}
//             maxNumber={maxNumber}
//             dataURLKey="data_url"
//             formDataStep1={formDataStep1}
//             handleInputChange={handleInputChange}
//           >
//             {({ onImageUpload, onImageRemove, isDragging, dragProps }) => (
//               <div className="uploader-container h-32 w-32 gap-10 rounded-xl border-2 border-dotted p-2 pt-4 text-lg text-gray-900 dark:border-[#0f241f] dark:text-gray-400 sm:h-40 sm:w-40">
//                 {drugImages.length === 0 ? (
//                   <div className="flex h-full flex-col items-center justify-center">
//                     <button
//                       className={`${
//                         isDragging
//                           ? "border border-[#54daba] text-[#54daba]"
//                           : "h-44 w-32 sm:h-32 sm:w-32 "
//                       }`}
//                       onClick={onImageUpload}
//                       {...dragProps}
//                     >
//                       {labels[index]}
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="mt-0 grid grid-cols-1 gap-4">
//                     {drugImages.map((image, imageIndex) => (
//                       <div
//                         key={imageIndex}
//                         className="image-item cursor-pointer"
//                         onClick={() => openImageModal(index)}
//                       >
//                         {image && (
//                           <img
//                             src={image["data_url"]}
//                             alt=""
//                             className="h-20 w-full object-contain sm:h-28"
//                           />
//                         )}
//                         <div className="btns-cont mt-0 flex w-full justify-end">
//                           {image && (
//                             <>
//                               <button
//                                 className="text-sm text-[#259F83]"
//                                 onClick={(e) => {
//                                   setImageToRemoveIndex(index);
//                                   onImageRemove(imageIndex);
//                                   e.stopPropagation();
//                                 }}
//                               >
//                                 Remove
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 {selectedImage && (
//                   <div
//                     className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#0000003b] bg-opacity-60"
//                     onClick={closeImageModal}
//                   >
//                     <img
//                       src={selectedImage}
//                       alt="Selected Image"
//                       className="max-h-[80%] max-w-full"
//                       onClick={(e) => e.stopPropagation()}
//                     />
//                     <div
//                       className="absolute right-4 top-0 cursor-pointer text-6xl text-[#259F83] hover:text-[#25c5a0] sm:right-14 sm:top-2"
//                       onClick={closeImageModal}
//                     >
//                       &times;
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//       ))}
//     </div>
//   );
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import axios from "axios";

const ImageUploader = (props) => {
  const { formDataStep1, handleInputChange } = props;
  const [drugImagesList, setImagesList] = useState(Array(6).fill([]));
  const maxNumber = 1;

  const labels = [
    "Front Side",
    "Back Side",
    "Right Side",
    "Left side",
    "Top side",
    "Down side",
  ];

  const onChange = (drugImageList, index) => {
    console.log(drugImageList, index);

    if (drugImageList.length > maxNumber) {
      // Handle max number of images
      return;
    }

    setImagesList((prevImagesList) => {
      const newImagesList = [...prevImagesList];
      newImagesList[index] = drugImageList;
      return newImagesList;
    });
  };

  const uploadImages = async () => {
    try {
      const formData = new FormData();
      drugImagesList.forEach((drugImages, index) => {
        drugImages.forEach((image, imageIndex) => {
          formData.append(`images[0]`, image.file);
        });
      });

      // await axios.post("https://e6ca-85-112-70-8.ngrok-free.app/upload", formData);
      await axios.post("http://localhost:3500/upload", formData);

      console.log("Images uploaded successfully");
    } catch (error) {
      console.error("Error uploading images", error);
    }
  };

  return (
    <div className="grid w-full grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
      {drugImagesList.map((drugImages, index) => (
        <div key={index} className="flex flex-col gap-4">
          <ImageUploading
            value={drugImages}
            onChange={(drugImageList) => onChange(drugImageList, index)}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            formDataStep1={formDataStep1}
            handleInputChange={handleInputChange}
          >
            {({ onImageUpload, isDragging, dragProps }) => (
              <div className="uploader-container h-32 w-32 gap-10 rounded-xl border-2 border-dotted p-2 pt-4 text-lg text-gray-900 dark:border-[#0f241f] dark:text-gray-400 sm:h-40 sm:w-40">
                {drugImages.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center">
                    <button
                      className={`${
                        isDragging
                          ? "border border-[#54daba] text-[#54daba]"
                          : "h-44 w-32 sm:h-32 sm:w-32 "
                      }`}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      {labels[index]}
                    </button>
                  </div>
                ) : (
                  <div className="mt-0 grid grid-cols-1 gap-4">
                    {drugImages.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="image-item cursor-pointer"
                      >
                        {image && (
                          <img
                            src={image["data_url"]}
                            alt=""
                            className="h-20 w-full object-contain sm:h-28"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </ImageUploading>
        </div>
      ))}
      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={uploadImages}
        >
          Submit All
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;

// //////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import ImageUploading from "react-images-uploading";
// import Modal from "./Modal"; // Update the path to your Modal component
// import ReactModal from "react-modal";
// import { useDrugContext } from "../pages/drugs/DrugContext";

// const ImageUploader = (props) => {
//   const { formDataStep1, handleInputChange, formSubmitted } = props;
//   const { imageState, updateImageState } = useDrugContext();
//   const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
//   const [imageToRemoveIndex, setImageToRemoveIndex] = useState(null);
//   const maxNumber = 1;

//   const labels = [
//     "Front Side",
//     "Back Side",
//     "Right Side",
//     "Left side",
//     "Top side",
//     "Down side",
//   ];

//   const onSubmitHandler = async (drugImages, index) => {
//     if (!formSubmitted) {
//       // Do nothing if the form is not submitted
//       return;
//     }

//     const data = new FormData();

//     // Append all images for the drug to the FormData
//     drugImages.forEach((image, imageIndex) => {
//       data.append(`images[${imageIndex}]`, image.file);
//     });

//     try {
//       // Use axios for making the POST request
//       const response = await axios.post("http://localhost:3500/drugs", data);

//       if (response.status === 200) {
//         const imageUrls = response.data.imageUrls;
//         updateImageState(index, imageUrls);
//         console.log("Files Sent Successfully");
//       } else {
//         console.error("Files upload failed");
//         // Handle the error, show a message to the user, or log it
//       }
//     } catch (error) {
//       console.error(error.message);
//       // Handle the error, show a message to the user, or log it
//     }
//   };

//   const onChange = (drugImageList, index) => {
//     updateImageState(index, drugImageList);
//     console.log(drugImageList, index);

//     if (drugImageList.length > maxNumber) {
//       setConfirmationModalOpen(true);
//       setImageToRemoveIndex(null);
//       return;
//     }

//     // Call the fetch function for each uploaded image
//     drugImageList.forEach((drugImage) => {
//       onSubmitHandler(drugImage, index);
//     });
//   };

//   const openImageModal = (index) => {
//     // Implement this if needed
//   };

//   const closeImageModal = () => {
//     // Implement this if needed
//   };

//   const openConfirmationModal = (index) => {
//     setImageToRemoveIndex(index);
//     setConfirmationModalOpen(true);
//   };

//   const closeConfirmationModal = () => {
//     setImageToRemoveIndex(null);
//     setConfirmationModalOpen(false);
//   };

//   const onConfirmRemove = () => {
//     if (imageToRemoveIndex !== null) {
//       updateImageState(imageToRemoveIndex, []);
//     }
//     closeConfirmationModal();
//   };

//   return (
//     <div className="grid w-full grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-6 px-3">
//       {imageState.map((drugImages, index) => (
//         <div
//           key={index}
//           className="flex flex-col gap-4 border-dotted border rounded-lg center w-fit items-center"
//         >
//           <ImageUploading
//             value={drugImages}
//             onChange={(drugImageList) => onChange(drugImageList, index)}
//             maxNumber={maxNumber}
//             dataURLKey="data_url"
//             formDataStep1={formDataStep1}
//             handleInputChange={handleInputChange}
//           >
//             {({ onImageUpload, onImageRemove, isDragging, dragProps }) => (
//               <div className="uploader-container h-32 w-32 gap-10 rounded-xl p-2 text-lg text-gray-900 dark:border-[#0f241f] dark:text-gray-400 sm:h-35 sm:w-35">
//                 {drugImages.length === 0 ? (
//                   <div className="flex h-full flex-col items-center justify-center">
//                     <button
//                       className={`${
//                         isDragging
//                           ? "border border-[#54daba] text-[#54daba]"
//                           : "h-44 w-32 sm:h-32 sm:w-32 "
//                       }`}
//                       onClick={onImageUpload}
//                       {...dragProps}
//                     >
//                       {labels[index]}
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="image">
//                     {drugImages.map((image, imageIndex) => (
//                       <div
//                         key={imageIndex}
//                         className="image-item cursor-pointer"
//                         onClick={() => openImageModal(index)}
//                       >
//                         {image && (
//                           <img
//                             src={image["data_url"]}
//                             alt=""
//                             className="h-20 w-full object-contain sm:h-28"
//                           />
//                         )}
//                         <div className="btns-cont p-2 flex w-full justify-center">
//                           {image && (
//                             <>
//                               <button
//                                 className="text-sm text-[#259F83]"
//                                 onClick={(e) => {
//                                   setImageToRemoveIndex(index);
//                                   onImageRemove(imageIndex);
//                                   e.stopPropagation();
//                                 }}
//                               >
//                                 Remove
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </ImageUploading>
//           <Modal
//             isOpen={confirmationModalOpen}
//             onRequestClose={closeConfirmationModal}
//             onConfirm={onConfirmRemove}
//             message="Are you sure you want to remove this image?"
//           >
//             {imageState.reduce(
//               (count, drugImages) => count + drugImages.length,
//               0
//             ) >=
//               maxNumber * 6 && (
//               <span className="text-red-500">
//                 Warning: You can only upload up to 6 images.
//               </span>
//             )}
//           </Modal>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageUploader;
