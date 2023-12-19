// import React, { useState } from "react";
// import ImageViewer from "./ImageViewer";

// function ImageUploader() {
//   const [drugImage, setDrugImage] = useState();
//   const [imageUrl, setImageUrl] = useState();

//   const fileChangeHandler = (e) => {
//     setDrugImage(e.target.files[0]);
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("image", drugImage);

//     try {
//       const response = await fetch("http://localhost:3500/single", {
//         method: "POST",
//         body: data,
//       });

//       if (response.ok) {
//         const imageUrl = await response.text();
//         setImageUrl(imageUrl);
//         console.log("File Sent Successful");
//       } else {
//         console.error("File upload failed");
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };


//   return (
//     <div className="">
//       <h1>Image Uploading</h1>
//       <form onSubmit={onSubmitHandler}>
//         <input type="file" onChange={fileChangeHandler} />
//         <br />
//         <br />
//         <button type="submit">Submit File to Backend</button>
//       </form>

//       <div>
//         <h2>Uploaded Image</h2>
//         {imageUrl && (
//           <img
//             src={`http://localhost:3500/${imageUrl}`}
//             alt="Uploaded"
//             style={{ maxWidth: "100%" }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ImageUploader;



import React, { useState } from "react";
import axios from "axios";

function ImageUploader({ updateImageState }) {
  const [drugImages, setDrugImages] = useState([]);

  const fileChangeHandler = (e) => {
    const newImages = Array.from(e.target.files).map((file) => ({
      data_url: URL.createObjectURL(file),
      file,
    }));

    setDrugImages(newImages);
  };

  const onSubmitHandler = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  drugImages.forEach((image) => {
    formData.append("images", image.file);
  });

  try {
    const response = await axios.post("http://localhost:3500/drugs", formData);
    const { data: { imageUrls } } = response;

    // Update the image state on the AddDrug component
    updateImageState(0, imageUrls);

    console.log("Images Sent Successfully");
  } catch (error) {
    console.error("Image upload failed", error.message);
  }
};

  return (
    <div className="">
      <h1>Image Uploading</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} multiple />
        <br />
        <br />
        <button type="submit">Submit Files to Backend</button>
      </form>
    </div>
  );
}

export default ImageUploader;
