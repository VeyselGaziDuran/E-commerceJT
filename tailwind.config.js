/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
      },
      center: true,
      screens: {
        lg: '1200px',
        xl: '1200px',
        '2xl': '1200px'
      }
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
       colors: {
         'vege-white': '#EFF5F5',
         'vege-grey': '#D6E4E5',
         'vege-blue': '#497174',
         'vege-black': '#112B3C',
         'vege-red': '#EB6440',
       },

      // spacing: {
      //   128: '32rem',
      // },
    }
  },
  plugins: []
};