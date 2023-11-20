/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.vue', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'footer': '#464646',
        'main': '#FFBD59',
        'main-light': '#FFF8EE',
        'main-dark': '#584932',
      },
      backgroundImage: {
        'mainFestivalImage': "url('@/assets/newgen_2023.png')",
        'projectorImage': "url('@/assets/projector.png')",
        'gradient': 'linear-gradient(180deg, #FFF2DE 9.38%, rgba(255, 255, 255, 0.90) 29.69%, rgba(255, 255, 255, 0.70) 48.44%, rgba(255, 255, 255, 0.95) 73.96%, #FFF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #D39C49 0%, rgba(47, 34, 16, 0.70) 40.63%, rgba(0, 0, 0, 0.95) 73.96%, #000 100%)'
      }
    }
  },
  variants: {},
  plugins: [],
}
