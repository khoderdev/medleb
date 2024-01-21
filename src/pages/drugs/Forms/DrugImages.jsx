import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import axios from "axios";

const DrugImages = (props) => {
  const { formDataStep12, handleInputChange, handleImageUpload } = props;

  const maxNumber = 1; // Define maxNumber
  const [drugImagesList, setImagesList] = useState(
    Array.from({ length: 6 }, () => [])
  );
  // const [drugImagesList, setImagesList] = useState(Array(6).fill([]));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [imageToRemoveIndex, setImageToRemoveIndex] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
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

      drugImagesList.forEach((drugImages) => {
        drugImages.forEach((image) => {
          formData.append("images", image.file);
          newUploadedImages.push({
            imageUrl: image.data_url,
          });
        });
      });

      // Use axios to post the images to your backend
      const response = await axios.post(
        "http://1.1.1.252:3500/upload",
        formData
      );

      if (response.data) {
        setSuccess(true);
        setUploadSuccess(true); // Set the state to indicate successful upload
        handleImageUpload(newUploadedImages); // Notify the parent component about the uploaded images
        // console.log("Images uploaded successfully");
      }
    } catch (error) {
      // console.error("Error uploading images", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="image-uploader-cont w-full flex flex-col justify-items-center items-center text-gray-700 dark:text-white-text">
        <h1 className="py-6 text-center text-xl sm:py-10 pb-10 font-medium">
          3- Medicine Images
        </h1>
        <div className="grid w-full lg:w-[50em] grid-cols-2 justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 rounded-2xl border-2 border-dashed dark:border-[#474747] p-10">
          {drugImagesList.map((drugImages, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <ImageUploading
                value={drugImages}
                onChange={(drugImageList) => onChange(drugImageList, index)}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                formDataStep12={formDataStep12}
                handleInputChange={handleInputChange}
              >
                {({ onImageUpload, isDragging, dragProps, onImageRemove }) => (
                  <div className="uploader-container h-32 w-32 gap-10 rounded-xl border-2 border-dotted p-2 pt-4 text-lg text-gray-900 border-[#727272c4] dark:border-[#474747] dark:text-gray-400 sm:h-40 sm:w-40 flex items-center justify-center">
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
                                    className="text-sm text-green-pri"
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
                          className="absolute right-4 top-0 cursor-pointer text-6xl text-green-pri hover:text-green-pri sm:right-14 sm:top-2"
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
            className="med-btn border-2 border-green-pri hover:bg-green-pri text-white font-bold py-2 px-4 rounded-xl"
            onClick={uploadImages}
            disabled={loading || uploadSuccess}
          >
            {loading
              ? "Uploading... please wait"
              : uploadSuccess
              ? "Done ✔"
              : "Upload Images"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DrugImages;

// /////////////////////////////////////////////////////////////////////////////