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
        'primary': '#8979B3',
        'secondary': '#DFA4C7',
        'tertiary': '#ABD2DF',
        'tertiary-dark': '#A2BFC9'
      }
    },
  },
  plugins: [],
}

