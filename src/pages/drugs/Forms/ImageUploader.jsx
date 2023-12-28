import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import axios from "axios";

const ImageUploader = (props) => {
  const {
    formDataStep1,
    handleInputChange,
    updateImageState,
    uploadedImages,
    handleImageUpload,
  } = props;

  const maxNumber = 1; // Define maxNumber

  const [drugImagesList, setImagesList] = useState(Array(6).fill([]));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [imageToRemoveIndex, setImageToRemoveIndex] = useState(null);

  const labels = [
    "Front Side",
    "Back Side",
    "Right Side",
    "Left side",
    "Top side",
    "Down side",
  ];

  const onChange = (drugImageList, index) => {
    if (drugImageList.length > maxNumber) {
      setConfirmationModalOpen(true);
      setImageToRemoveIndex(null);
      setSelectedImage(null);
      return;
    }

    setImagesList((prevImagesList) => {
      const newImagesList = [...prevImagesList];
      newImagesList[index] = drugImageList;
      return newImagesList;
    });
  };

  const openImageModal = (index) => {
    setSelectedImage(drugImagesList[index][0]?.data_url);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const uploadImages = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      const newUploadedImages = [];

      drugImagesList.forEach((drugImages, index) => {
        drugImages.forEach((image, imageIndex) => {
          formData.append(`images[0]`, image.file);
          newUploadedImages.push(image);
        });
      });

      // await axios.post("https://e6ca-85-112-70-8.ngrok-free.app/upload", formData);
      await axios.post("http://localhost:3030/api/images/v1.0", formData);

      setSuccess(true);
      handleImageUpload(newUploadedImages); // Notify the parent component about the uploaded images
      console.log("Images uploaded successfully");
    } catch (error) {
      console.error("Error uploading images", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="image-uploader-cont w-full flex flex-col justify-items-center items-center text-gray-700 dark:text-white-text">
        <h1 className="py-6 text-center text-xl sm:py-10 sm:text-2xl ">
          2- Medicine Images
        </h1>
        <div className="grid w-full sm:w-[50em] grid-cols-2 justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {drugImagesList.map((drugImages, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <ImageUploading
                value={drugImages}
                onChange={(drugImageList) => onChange(drugImageList, index)}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                formDataStep1={formDataStep1}
                handleInputChange={handleInputChange}
              >
                {({ onImageUpload, isDragging, dragProps, onImageRemove }) => (
                  <div className="uploader-container h-32 w-32 gap-10 rounded-xl border-2 border-dotted p-2 pt-4 text-lg text-gray-900 dark:border-[#4b4d4e] dark:text-gray-400 sm:h-40 sm:w-40 flex items-center justify-center">
                    {drugImages.length === 0 ? (
                      <div className="flex h-full flex-col items-center justify-center">
                        <button
                          className={`${
                            isDragging
                              ? "border border-[#54daba] text-[#54daba]"
                              : "h-44 w-32 sm:h-32 sm:w-32 "
                          }`}
                          onClick={(e) => {
                            onImageUpload(e);
                            e.preventDefault();
                          }}
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
                            onClick={() => openImageModal(index)}
                          >
                            {image && (
                              <img
                                src={image["data_url"]}
                                alt=""
                                className="h-20 w-full object-contain sm:h-28"
                              />
                            )}
                            <div className="btns-cont mt-0 flex w-full justify-end">
                              {image && (
                                <>
                                  <button
                                    className="text-sm text-[#259F83]"
                                    onClick={(e) => {
                                      setImageToRemoveIndex(index);
                                      onImageRemove(imageIndex);
                                      e.stopPropagation();
                                    }}
                                  >
                                    Remove
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {selectedImage && (
                      <div
                        className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[#0000003b] bg-opacity-60"
                        onClick={closeImageModal}
                      >
                        <img
                          src={selectedImage}
                          alt="Selected Image"
                          className="max-h-[80%] max-w-full" // Adjust the Opened image size
                          onClick={(e) => e.stopPropagation()}
                        />
                        <div
                          className="absolute right-4 top-0 cursor-pointer text-6xl text-[#259F83] hover:text-[#25c5a0] sm:right-14 sm:top-2"
                          onClick={closeImageModal}
                        >
                          &times;
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ImageUploading>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            className="bg-[#259F83] hover:bg-[#45a58f] text-white font-bold py-2 px-4 rounded"
            onClick={uploadImages}
            disabled={loading}
          >
            {loading ? "Uploading..." : success ? "Confirmed ✔" : "Confirm All"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageUploader;

// //////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import axios from "axios";

// const ImageUploadForm = () => {
//   const [drugGuid, setDrugGuid] = useState(""); // You may get this value dynamically
//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setImages(selectedFiles);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("drugGuid", drugGuid);

//       images.forEach((image, index) => {
//         formData.append("images", image);
//       });

//       await axios.post("http://localhost:3030/api/images/v1.0", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log("Images uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading images:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Drug GUID:</label>
//         <input
//           type="text"
//           value={drugGuid}
//           onChange={(e) => setDrugGuid(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Upload Images:</label>
//         <input type="file" onChange={handleImageChange} multiple />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ImageUploadForm;
