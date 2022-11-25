/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus1: ['"M PLUS 1"', "sans-serif"],
      },
      colors: {
        'default': "#094067",
        'primary': "F9FBFD", //mau side bar
        'secondary': "#F9FBFD", //mau background
        'third': "#F3F3F9", //mau background
        'greenup': "#0AB39C",
        'white': "#ffffff",
        'danger': "#ef4565",
        'warning': "#ffc53d",
        'success': "#73c42d",
        'disabled': "#8d8d8d",
        'button-disabled': '#c6c6c6'
      },
    },
  },
  plugins: [],
}
