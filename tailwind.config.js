module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          'roboto-slab': ['"Roboto Slab"', 'serif'] 
        },
        boxShadow: {
          'nav': '0 1rem 1rem -1rem #333;'
        },
        padding: {
          'nav': '84px'
        }
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}