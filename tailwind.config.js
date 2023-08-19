/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.vue', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'footer': '#464646',
        'main': '#FFBD59',
      },
    }
  },
  variants: {},
  plugins: [],
}
