import React, { useState } from "react";

import ImageUploader from "./ImageUploader"; // Update the path to the ImageUploader component

export default function UploadData() {
  const [formDataStep1, setFormDataStep1] = useState(/* initial form data */);

  const handleInputChange = (event) => {
    // Handle form input changes and update formDataStep1
    setFormDataStep1({
      ...formDataStep1,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Upload Data</h1>
      {/* Other components or UI elements */}
      <ImageUploader
        formDataStep1={formDataStep1}
        handleInputChange={handleInputChange}
      />
      {/* Other components or UI elements */}
    </div>
  );
}
