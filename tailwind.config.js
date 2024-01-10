/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        zoomIn: "zoomIn 400ms ease",
        menu: "menu 500ms ease forwards",
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        menu: {
          "0%": { transform: "translateY(-60%)" },
          "100%": { transform: "translateY(30%)" },
        },
      },
      fontFamily: {
        main: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
