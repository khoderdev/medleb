import React from "react";

function ImageViewer({ imageUrl }) {
  return (
    <div>
      <h2>Uploaded Image</h2>
      {imageUrl && (
        <img
          src={`http://192.168.43.138:3500/${imageUrl}`}
          alt="Uploaded"
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
}

export default ImageViewer;
