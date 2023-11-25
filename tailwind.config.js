/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        zoomIn: "zoomIn 400ms ease",
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      fontFamily: {
        main: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
