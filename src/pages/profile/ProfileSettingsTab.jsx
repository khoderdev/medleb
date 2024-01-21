import React, { useState, useEffect } from "react";
import "./styles.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const ProfileSettingsTab = (props) => {
  // Destructure props
  const {
    firstName: initialFirstName = "John",
    lastName: initialLastName = "Doe",
    userImage: initialUserImage,
    onFirstNameChange,
    onLastNameChange,
    onImageChange,
    onSave,
  } = props;

  // Local state for input fields and uploaded image
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [uploadedImage, setUploadedImage] = useState(initialUserImage);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setUploadedImage(imageDataUrl);
        onImageChange && onImageChange(imageDataUrl);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type. Please upload an image.");
    }
  };

  // Function to handle clicks on the avatar
  const handleAvatarClick = (e) => {
    if (!lightboxVisible) {
      console.log("Avatar image clicked");
      setLightboxVisible(true);
    }
    e.stopPropagation();
  };

  // Effect to update the uploaded image when initialUserImage changes
  useEffect(() => {
    setUploadedImage(initialUserImage);
  }, [initialUserImage]);

  // Function to handle save button click
  const handleSave = async () => {
    setIsSaving(true);

    try {
      // Simulate an asynchronous save operation
      await onSave(firstName, lastName, uploadedImage);
      setSaveSuccess(true);
    } catch (error) {
      console.error("Save failed:", error);
      setSaveSuccess(false);
    } finally {
      setIsSaving(false);
      // Reset save success state after a short delay
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }
  };

  // CSS utility class for the button styles
  const buttonClass = `bg-[#00a651] w-fit text-white py-2 px-4 rounded-lg ${
    isSaving ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <div className="flex justify-center w-full h-[100dvh pt-0 lg:pt-6">
      <div className="flex flex-col justify-center max-w-lg mt-4">
        {/* Avatar and User Info */}
        <div className="flex items-center mb-8">
          {/* Avatar Container */}
          <div className="avatar-container flex flex-col items-center justify-center relative rounded-full">
            <img
              src={uploadedImage}
              alt="User"
              className="w-24 h-24 object-cover bg-white-bg dark:bg-gray-200 rounded-full cursor-pointer"
              onClick={handleAvatarClick}
            />
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <a
              className={`text-[#00a651] w-[5em] text-center dark:bg-black bg-white text-sm cursor-pointer mt-[-0.5em]`}
              onClick={() => document.getElementById("avatarInput").click()}
            >
              Upload
            </a>
          </div>

          {/* User Name */}
          <h2 className="text-lg text-gray-700 dark:text-white-text ml-3 font-semibold">{`${firstName} ${lastName}`}</h2>
        </div>

        {/* Lightbox/modal component */}
        {lightboxVisible && (
          <div
            className="absolute mx-auto md:top-10 bottom-10 inset-0 bg-opacity-70 dark:bg-opacity-50 bg-white-bg dark:bg-[#1e1e1e]  flex justify-center items-center rounded-2xl md:w-[50dvw] h-auto "
            onClick={() => setLightboxVisible(false)}
          >
            {/* Close Icon */}
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setLightboxVisible(false)}
            >
              <Link className="text-sm text-[#00a651]">
                <CloseIcon fontSize="small" />
              </Link>
            </div>
            <div className="max-w-screen-lg p-4 mt-4 relative">
              <img
                src={uploadedImage}
                alt="User"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}

        {/* User Info Input Fields */}
        <div className="user-info-cont flex gap-3 sm:gap-8">
          <div className="mb-4">
            <label className="block text-sm text-left pl-2 font-medium text-gray-700 dark:text-white-text">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                onFirstNameChange(e.target.value);
              }}
              className="input-field mt-1 w-full rounded-full border border-[#00a65159] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-green-pri focus:outline-none focus:ring-1 focus:ring-green-pri dark:bg-[#1e1e1e]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-left pl-2 font-medium text-gray-700 dark:text-white-text">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                onLastNameChange(e.target.value);
              }}
              className="input-field mt-1 w-full rounded-full border border-[#00a65159] bg-white/10 px-4 py-2 font-normal shadow-md outline-none focus:border-green-pri focus:outline-none focus:ring-1 focus:ring-green-pri dark:bg-[#1e1e1e]"
            />
          </div>
        </div>

        {/* Save button */}
        <div className="btn-container mt-4 flex w-full justify-end">
          <button
            className={buttonClass}
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                Saving<span className="animate-ellipsis">...</span>
              </>
            ) : saveSuccess ? (
              <>Saved Successfully ✔</>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsTab;
