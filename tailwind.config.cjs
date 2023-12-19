/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// module.exports = {
//   content: ["./src/**/*.{html,js,ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "366px",
      // => @media (min-width: 366px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  variants: {},
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
  ],
};
