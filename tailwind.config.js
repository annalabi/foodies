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
      'gray-dark': "#111827",
      'gray-light': "#d3dce6",
      'gray-100': '#f3f4f6',
      'gray-700': '#374151',
      'teal': '#042f2e',
      'white': '#fff',
      'offwhite': '#C8BEBE',
      'orange-50': '#fff7ed',
      'orange-800': '#9a3412',
      'yellow-400': '#facc15',
      'yellow-600': '#ca8a04',
    },

    
    extend: {
      spacing:{
        '128': '32rem',
        '144': '36rem',
        '80': '20.5rem',
      },

      borderRadius:{
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
