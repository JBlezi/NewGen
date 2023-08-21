/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.vue', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'footer': '#464646',
        'main': '#FFBD59',
        'main-light': '#FFF8EE',
      },
      backgroundImage: {
        'mainFestivalImage': "url('@/assets/newgen_2023.png')",
        'projectorImage': "url('@/assets/projector.png')",
        'gradient': 'linear-gradient(180deg, #FFF2DE 9.38%, rgba(255, 255, 255, 0.90) 29.69%, rgba(255, 255, 255, 0.70) 48.44%, rgba(255, 255, 255, 0.95) 73.96%, #FFF 100%)'
      }
    }
  },
  variants: {},
  plugins: [],
}
