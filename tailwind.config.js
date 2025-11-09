/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
