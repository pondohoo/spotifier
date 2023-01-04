/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: "'Gotham', serif"
      }
    },
  },
  plugins: [],
};
