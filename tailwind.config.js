/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.5rem',
        xl: '85px',
        '2xl': '213px',
      },
    },
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