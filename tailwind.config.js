/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla :['Karla','sans-serif'],
      },
      colors: {
        'light-coffee': '#c89f94'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fadeIn: {
          from:{opacity: 0},
          to: {opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}

