/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-main': '#FAFBFD',
      'active': '#090F31',
      'non-active': '#9E9E9E',
      'secondary': '#F7542E',
      'header': '#4F4F4F',
      'btn-text-default': '#3F3F3F',
      'btn-bg-default': '#E0E0E0',
      'btn-bg-default-hover': '#AEAEAE',
      'btn-bg-outline': '#fffff',
      'btn-bg-outline-border': '#3D5AFE',
      'btn-bg-outline-hover': '#2962FF1A',
      'btn-text-outline': '#3D5AFE',
      'btn-bg-text-hover': '#2962FF1A',
      'btn-text-text': '#3D5AFE',
      'btn-bg-primary': '#3D5AFE',
      'btn-text-primary': '#ffffff',
      'btn-bg-disabled': '#E0E0E0',
      'btn-text-disabled': '#9E9E9E',
      'btn-bg-icon': '#2962FF',

    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
