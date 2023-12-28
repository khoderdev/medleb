// // module.exports = {
// //   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
// //   darkMode: "class",

// //   theme: {
// //     screens: {
// //       xs: "366px",
// //       // => @media (min-width: 366px)
// //       sm: "640px",
// //       // => @media (min-width: 640px)

// //       md: "768px",
// //       // => @media (min-width: 768px)

// //       lg: "1024px",
// //       // => @media (min-width: 1024px)

// //       xl: "1280px",
// //       // => @media (min-width: 1280px)

// //       "2xl": "1536px",
// //       // => @media (min-width: 1536px)
// //     },

// //     extend: {},
// //   },
// //   variants: {},
// //   plugins: [
// //     // require("daisyui"),
// //     require("tailwindcss-animate"),
// //     require("@tailwindcss/forms")({
// //       strategy: "base",
// //     }),
// //   ],
// // };

// module.exports = {
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     screens: {
//       xs: "366px",
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//       "2xl": "1536px",
//     },
//     extend: {
//       colors: {
//         // Add your custom color palette here
//         siteBackground: {

//           500: "#FBF9FA",

//         contentsBackground: {

//           500: "#F5F5F5"

//         },
//       },
//     },
//   },
//   variants: {},
//   plugins: [
//     require("tailwindcss-animate"),
//     require("@tailwindcss/forms")({
//       strategy: "base",
//     }),
//   ],
// };
// }

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "366px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Add your custom color palette here
        green: {
          sec: "#5cd3b7",
          pri: "#259F83",
        },

        white: {
          bg: "#fbfcf8",
          contents: "#F5F5F5",
          text: "#F5F5F5",
        },
        black: {
          bg: "#0E0E0E",
          contents: "#393939",
          text: "#0E0E0E",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};
