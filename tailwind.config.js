/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": ["Jost", "sans-serif"],
        "spartan": ["League Spartan", "sans-serif"]
      },
      colors: {
        'dark-gray': '#333136',
        'light-gray': '#F1F3F5',
        'black': '#1D1C1E',
        'peach': '#E7816B',
        'light-peach': '#FFAD9B'
      }
    }
  },
  plugins: [],
}