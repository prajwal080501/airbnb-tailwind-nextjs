/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'bounce-slow': 'bounce 0.5s ease-in-out 3',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
