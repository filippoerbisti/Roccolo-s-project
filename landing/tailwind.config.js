/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], // in our case we need only js, jsx
  theme: {
    extend: {},
  },
  plugins: [],
}
