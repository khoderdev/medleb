// import React, { useState, useEffect } from 'react';
// import { css } from '@emotion/react';
// import { RingLoader } from 'react-spinners';

// const LoadingSpinner = () => {
//   const [loading, setLoading] = useState(true);

//   // Simulate loading for demonstration purposes
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 10000);

//     // Clean up the timer on component unmount
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <RingLoader loading={loading} css={override} size={150} color="#123abc" />
//     </div>
//   );
// };

// // Styles for the spinner (customize as needed)
// const override = css`
//   display: block;
//   margin: 0 auto;
// `;

// export default LoadingSpinner;
import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-auto">
    <RingLoader css={override} size={100} color="#259f83" />
  </div>
);

export default LoadingSpinner;
