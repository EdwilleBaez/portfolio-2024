/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        shettricka: ['Shettricka', 'sans-serif' ]

      },
      colors: {
        'primary': '#D39CA2',
        'secondary': '#FF5769',
        'tertiary': '#8E754F',
        'tertiary-dark': '#5E4E36'
      }
    },
  },
  plugins: [],
}

