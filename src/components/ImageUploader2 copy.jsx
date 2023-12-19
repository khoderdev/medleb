/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
// import React, { useState } from "react";
// import ImageUploading from "react-images-uploading";

// export default function ImageUploader2(props) {
//   const { formDataStep1, handleInputChange } = props;
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const maxNumber = 6;

//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   const openImageModal = (index) => {
//     setSelectedImage(images[index]?.data_url);
//   };

//   const closeImageModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="ImageUploader2">
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           <div className="upload__image-wrapper flex flex-col gap-8 rounded-xl border-2 border-dotted p-4 text-xl">
//             <div className="flex flex-col items-center">
//               <button
//                 className={`${
//                   isDragging
//                     ? "border[#54daba] border text-[#54daba]"
//                     : "h-28 w-64 rounded-xl border-2 border-dotted border-[#259F83]"
//                 }`}
//                 onClick={onImageUpload}
//                 {...dragProps}
//               >
//                 Click or Drop here to upload images
//               </button>
//             </div>
//             <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
//               {imageList.map((image, index) => (
//                 <div
//                   key={index}
//                   className="image-item cursor-pointer"
//                   onClick={() => openImageModal(index)}
//                 >
//                   <img
//                     src={image["data_url"]}
//                     alt=""
//                     className="h-28 w-28 border-2 object-contain"
//                   />
//                   <div className="btns-cont mt-2 flex w-28 justify-between ">
//                     <button
//                       className="text-sm text-[#259F83]"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         onImageUpdate(index);
//                       }}
//                     >
//                       Update
//                     </button>
//                     <button
//                       className="text-sm text-red-500"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         onImageRemove(index);
//                       }}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {selectedImage && (
//               <div
//                 className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
//                 onClick={closeImageModal}
//               >
//                 <img
//                   src={selectedImage}
//                   alt="Selected Image"
//                   className="max-h-full max-w-full"
//                   onClick={(e) => e.stopPropagation()}
//                 />
//               </div>
//             )}
//           </div>
//         )}
//       </ImageUploading>
//     </div>
//   );
// }





// ****************************************************************************************************




/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */

import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import Modal from "./Modal"; // Update the path to your Modal component
import ReactModal from "react-modal";

export default function ImageUploader2(props) {
  const { formDataStep1, handleInputChange } = props;
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] =
    React.useState(false);
  const [imageToRemoveIndex, setImageToRemoveIndex] = React.useState(null);
  const maxNumber = 6;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const openImageModal = (index) => {
    setSelectedImage(images[index]?.data_url);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openConfirmationModal = (index) => {
    setImageToRemoveIndex(index);
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setImageToRemoveIndex(null);
    setConfirmationModalOpen(false);
  };

  const onConfirmRemove = () => {
    if (imageToRemoveIndex !== null) {
      setImages((prevImages) =>
        prevImages.filter((_, index) => index !== imageToRemoveIndex)
      );
    }
    closeConfirmationModal();
  };

  return (
    <div className="ImageUploader2">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper flex flex-col gap-8 rounded-xl border-2 border-dotted p-4 text-xl">
            <div className="flex flex-col items-center">
              <button
                className={`${
                  isDragging
                    ? "border[#54daba] border text-[#54daba]"
                    : "h-28 w-64 rounded-xl border-2 border-dotted border-[#259F83]"
                }`}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here to upload images
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="image-item cursor-pointer"
                  onClick={() => openImageModal(index)}
                >
                  <img
                    src={image["data_url"]}
                    alt=""
                    className="h-28 w-28 border-2 object-contain"
                  />
                  <div className="btns-cont mt-2 flex w-28 justify-between ">
                    <button
                      className="text-sm text-[#259F83]"
                      onClick={(e) => {
                        setImageToRemoveIndex(index);
                        onImageUpdate(index);
                        e.stopPropagation();
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="text-sm text-red-500"
                      onClick={(e) => {
                        setImageToRemoveIndex(index);
                        setConfirmationModalOpen(true);
                        e.stopPropagation();
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {selectedImage && (
              <div
                className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
                onClick={closeImageModal}
              >
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  className="max-h-[80%] max-w-full"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        )}
      </ImageUploading>
      <Modal
        isOpen={confirmationModalOpen}
        onRequestClose={closeConfirmationModal}
        onConfirm={onConfirmRemove}
        message="Are you sure you want to remove this image?"
      />
    </div>
  );
}
