/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        wideScreen: {
          raw: "(min-aspect-ratio: 3/2)",
        },
        tallScreen: {
          raw: "(min-aspect-ratio: 13/20)",
        },
      },
      Keyframes: {
        openMenu: {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        openMenu: "openMenu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
