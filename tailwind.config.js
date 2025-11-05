/** @type {import('tailwindcss').Config} */

const fontMap = require("./tailwind.fonts.json");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { fontFamily: fontMap },
  },
  plugins: [],
};
