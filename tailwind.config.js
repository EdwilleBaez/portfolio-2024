/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Reemplaza 'Montserrat' con el nombre de tu fuente personalizada
      },
      colors: {
        'primary': '#D39CA2',
        'secondary': '#FF5769',
      }
    },
  },
  plugins: [],
}

