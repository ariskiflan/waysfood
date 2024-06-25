/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4eb883",
        secondary: "#e9f9f4",
      },
    },
  },
  plugins: [],
};
