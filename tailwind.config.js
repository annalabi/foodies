/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      'gray': "#8492a6",
      'gray-dark': "#273444",
      'gray-light': "#d3dce6",
      'teal': '#143727',
      'white': '#fff',
      'offwhite': '#C8BEBE',
      'orange-50': '#fff7ed',
      'orange-800': '#9a3412',
      'yellow-600': '#ca8a04',
    },

    
    extend: {
      spacing:{
        '128': '32rem',
        '144': '36rem',
      },

      borderRadius:{
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
