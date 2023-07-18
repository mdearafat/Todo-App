/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Chela One", "cursive"],
        regular: ["Domine", "serif"],
      },
    },
  },
  plugins: [],
};
