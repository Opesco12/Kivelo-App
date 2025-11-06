/** @type {import('tailwindcss').Config} */

const fontMap = require("./tailwind.fonts.json");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: fontMap,
      colors: {
        white: "#FFFFFF",
        background: "#F5F5F5",
        buttonPrimary: "#9333EA",
        error: "#dc2626",
        border: "#1E1E1E80",
      },
    },
  },
  plugins: [],
};
