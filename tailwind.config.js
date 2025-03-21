/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#28A745",
        "primary-gray": "#282828B2",
      },
      fontFamily: {
        yekanbakh: ["bakh", "sans-serif"],
      },
    },
  },
  plugins: [],
};
