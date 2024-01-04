import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://192.168.43.138:3500/fetch-images");
        setImageUrls(response.data.imageUrls);
        setSelectedImage(response.data.imageUrls[0]); // Set the first image as selected by default
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col justify-items-center w-[32em] border-2 border-red-500 p-8 pt-20">
        <div className="mb-4">
          <img
            src={selectedImage && `data:${selectedImage.contentType};base64,${selectedImage.data}`}
            alt="Selected Product"
            className="w-[24em] h-[28em]"
          />
        </div>
        <div className="flex space-x-2">
          {imageUrls.map((image, index) => (
            <img
              key={index}
              src={`data:${image.contentType};base64,${image.data}`}
              alt={`Product Thumbnail ${index + 1}`}
              className="w-12 h-12 cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
        <p className="text-gray-700 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-700 mb-2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 mb-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="text-gray-700 mb-2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;




// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ImageGallery = () => {
//   const [imageUrls, setImageUrls] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(
//           "https://e6ca-85-112-70-8.ngrok-free.app/fetch-images"
//         );
//         console.log("Response data:", response.data);
//         setImages(response.data.imageUrls);
//       } catch (error) {
//         console.error("Error fetching images", error);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="md:w-1/2 p-4">
//         <div className="mb-4">
//           <img
//             src={
//               selectedImage &&
//               `data:${selectedImage.contentType};base64,${selectedImage.data}`
//             }
//             alt="Selected Product"
//             className="object-cover"
//           />
//         </div>
//         <div className="flex space-x-2">
//           {imageUrls.map((image, index) => (
//             <img
//               key={index}
//               src={`data:${image.contentType};base64,${image.data}`}
//               alt={`Product Thumbnail ${index + 1}`}
//               className="w-12 h-12 cursor-pointer object-cover"
//               onClick={() => handleImageClick(image)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="md:w-1/2 p-4">
//         <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
//         <p className="text-gray-700 mb-2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//         <p className="text-gray-700 mb-2">
//           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//           nisi ut aliquip ex ea commodo consequat.
//         </p>
//         <p className="text-gray-700 mb-2">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur.
//         </p>
//         <p className="text-gray-700 mb-2">
//           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//           officia deserunt mollit anim id est laborum.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ImageGallery = () => {
//   const [imageUrls, setImageUrls] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(
//           "https://e6ca-85-112-70-8.ngrok-free.app/fetch-images"
//         );
//         console.log("Response data:", response.data);
//         setImageUrls(response.data.imageUrls || []); // Ensure imageUrls is not undefined
//       } catch (error) {
//         console.error("Error fetching images", error);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="md:w-1/2 p-4">
//         <div className="mb-4">
//           <img
//             src={
//               selectedImage &&
//               `data:${selectedImage.contentType};base64,${selectedImage.data}`
//             }
//             alt="Selected Product"
//             className="object-cover w-full h-64"
//           />
//         </div>
//         <div className="flex space-x-2">
//           {imageUrls &&
//             imageUrls.map((image, index) => (
//               <img
//                 key={index}
//                 src={`data:${image.contentType};base64,${image.data}`}
//                 alt={`Product Thumbnail ${index + 1}`}
//                 className="w-12 h-12 cursor-pointer object-cover"
//                 onClick={() => handleImageClick(image)}
//               />
//             ))}
//         </div>
//       </div>
//       <div className="md:w-1/2 p-4">
//         <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
//         <p className="text-gray-700 mb-2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//         <p className="text-gray-700 mb-2">
//           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//           ut aliquip ex ea commodo consequat.
//         </p>
//         <p className="text-gray-700 mb-2">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur.
//         </p>
//         <p className="text-gray-700 mb-2">
//           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//           officia deserunt mollit anim id est laborum.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;
