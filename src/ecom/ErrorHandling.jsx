// ErrorHandling.js
import React from "react";

const ErrorHandling = ({ error }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      {/* Add additional error handling UI or logic here */}
    </div>
  );
};

export default ErrorHandling;
