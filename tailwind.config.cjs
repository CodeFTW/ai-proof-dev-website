/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost', 'sans-serif'],
      },
      colors: {
        primary: '#f95f16',
        secondary: '#ffa500',
        tertiary: '#f4cf99',

        dark: '#1E2223'
      },
    },
  },
  plugins: [],
}
