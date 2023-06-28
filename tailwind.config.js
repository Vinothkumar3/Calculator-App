/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ['Montserrat', "sans-serif"],
        Oswald: ['Oswald', "sans-serif"],
        Poppins:['Poppins', "sans-serif"],
        Roboto: [ 'Roboto', "sans-serif"],
      },
    },
  },
  plugins: [],
}

