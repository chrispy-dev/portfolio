module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          'roboto-slab': ['"Roboto Slab"', 'serif'],
          'pacifico': ['Pacifico', 'cursive'],
          'fredoka-one': ['"Fredoka One"', 'cursive']
        },
        boxShadow: {
          'nav': '0 1rem 1rem -1rem #333',
          'footer': '0 -0.75rem 0.75rem -0.75rem #333'
        },
        padding: {
          'nav': '84px'
        },
        minHeight: {
          'nav-screen': 'calc(100vh - 84px - 165.5px)',
          'nav-screen-fun': 'calc(100vh - 84px - 166px)'
        },
        textColor: {
          'orange-600': '#FE5E01'
        }
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}