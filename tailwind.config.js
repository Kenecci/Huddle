/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    screens: {
      'sm': {'max': '640px',},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'max': '880px',},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'max': '1400px', 'min': '881px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
