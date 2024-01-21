// import React from "react";
// const containerStyle = {
//   backgroundImage: `url('/src/images/EB-Quote.png')`,
// };

// const LeftColumn = () => {
//   return (
//     <div
//       className="bg-img h-screen flex justify-center items-center bg-left bg-fixed bg-no-repeat bg-contain"
//       style={containerStyle}
//     >
//       {/* <style>
//         {`
//           @media (min-width: 768px) {
//             .bg-img {
//               background-position: left;
//             }
//           }

//           @media (min-width: 640px) {
//             .bg-img {
//               background-position: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .bg-img {
//               background-position: 10%;
//             }
//           }
//         `}
//       </style> */}
//     </div>
//   );
// };

// export default LeftColumn;

// // import React from "react";

// // const LeftColumn = () => {
// //   const containerStyle = {
// //     backgroundImage: `url('/src/images/EB-Quote.png')`,
// //     //   // backgroundSize: "contain",
// //     backgroundPosition: "50% 35%",
// //     //   // backgroundAttachment: "fixed",
// //     //   // backgroundRepeat: "no-repeat",
// //     //   // height:"100vh",
// //   };

// // // Media query for screens larger than or equal to 768px
// // containerStyle["@media (min-width: 768px)"] = {
// //   backgroundPosition: "left 20px",
// // };

// // // Media query for screens larger than or equal to 1024px
// // containerStyle["@media (min-width: 1024px)"] = {
// //   backgroundPosition: "left 0px",
// // };

// //   // Add more media queries and adjust values as needed for different screen sizes

// //   return (
// //     <div
// //       className="flex justify-center items-center w-full h-screen bg-center md:bg-left bg-fixed bg-no-repeat bg-contain"
// //       style={containerStyle}
// //     ></div>
// //   );
// // };

// //
import React from "react";

const containerStyle = {
  backgroundImage: `url('/src/images/EB-Quote.png')`,
  // backgroundImage: `url('/src/images/EB-Quote.png')`,
  // backgroundSize: "50% 70%",
  // backgroundSize: "contain",
  // backgroundPosition: "center",
};
const LeftColumn = () => {
  return (
    <div
      className="bg-img w-full flex justify-center items-center  h-screen  bg-left bg-fixed bg-no-repeat bg-contain"
      style={containerStyle}
    >
      <style>
        {`

          @media (min-width: 366px) {
            .bg-img {
              background-position: 25%;
               background-size: 480px
            }
          }
          @media (min-width: 640px) {
            .bg-img {
              background-position: 20%;
              background-size: 550px
              
            }
          }

          @media (min-width: 768px) {
            .bg-img {
              background-position: 40%;
              background-size: 500px
            }
          }
          
          @media (min-width: 1024px) {
            .bg-img {
              background-position: 5%;
              background-size: 400px
              
            }

          @media (min-width: 1321px) {
            .bg-img {
              background-position: 10%;
              background-size: 370px
              
            }

          @media (min-width: 1536px) {
            .bg-img {
              background-position: 8%;
              background-size: 520px
              
            }
          }
        `}
      </style>
    </div>
  );
};
export default LeftColumn;
// background-size: 20px 20px
