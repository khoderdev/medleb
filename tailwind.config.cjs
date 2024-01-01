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
        green: {
          pri: "#259F83",
          sec: "#5cd3b7",
        },

        white: {
          bg: "#fbfcf8",
          contents: "#e0e0e0",
          fg: "#e5e7eb",
          text: "#F5F5F5",
          input: "#bcbcbc",
        },

        black: {
          bg: "#0f0f0f",
          fg: "#393939",
          contents: "#292929",
          text: "#292929",
          input: "#ffffff1a",
          border: "#f1f1f1",
          test1: "#292929",
          test2: "#393939",
          test3: "#282828",
          test4: "#212121",
        },
      },
    },
  },
  // input: "#3a3c3d"
  // input: "#259f8300"
  // fg: "#292929",
  // contents: "#393939",
  // contents: "#282828; 212121"
  variants: {},
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};

//   -searchbox-border-color: #8886;
//   -searchbox-legacy-border-color: #303030;
//   -searchbox-legacy-border-shadow-color: #0000;
//   -searchbox-legacy-button-color: #ffffff14;
//   -searchbox-legacy-button-border-color: #303030;
//   -searchbox-legacy-button-focus-color: #ffffff14;
//   -searchbox-legacy-button-hover-color: #ffffff14;
//   -searchbox-legacy-button-hover-border-color: #303030;
//   -searchbox-legacy-button-icon-color: #ffffff80;
//   -searchbox-background: #121212;
//   -searchbox-text-color: #ffffffe0;
//   -button-chip-background-hover: #fff3  #ffffff1a
