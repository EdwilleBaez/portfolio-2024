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
        'primary': '#DFA4C7',
        'secondary': '#8979B3',
        'tertiary': '#ABD2DF',
        'tertiary-dark': '#A2BFC9',
        'detail-color': '#B84C45'
      }
    },
  },
  plugins: [],
}

