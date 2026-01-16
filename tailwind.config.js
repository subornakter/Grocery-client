/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- এটা আবশ্যক
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
}
