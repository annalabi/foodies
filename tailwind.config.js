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
      'gray-100':'#f3f4f6',
      'gray-200':'#e5e7eb',
      'gray-500':'#6b7280',
      'gray-600':'#4B5563',
      'gray-700':'#374151',
      'gray-900':'#111827',
      'gray-800':'##1f2937',
      'teal': '#134e4a',
      'teal-700': '#0f766e',
      'white': '#fff',
      'offwhite': '#C8BEBE',
      'orange-50': '#fff7ed',
      'orange-100': '#ffedd5',
      'orange-300': '#fdba74',
      'orange-800': '#9a3412',
      'yellow-600': '#ca8a04',
      'amber-600': '#d97706',
      'amber-50': '#fffbeb',
      
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
