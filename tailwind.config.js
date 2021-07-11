module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      DEFAULT: '4px 4px 8px 4px #b8b8b8, -5px -5px 10px -5px #ffffff', 
      sm: '2px 2px 4px 2px #cccbcb, -1px -1px 2px -1px #ffffff',
    },
    fontFamily: {
      'inconsolata': ['Inconsolata'],
      'montserrat' : ['Montserrat'],
     },
    extend: {
      colors: {
        indigo: {
          light: '#b3bcf5',
          DEFAULT: '#5c6ac4',
          dark: '#202e78',
        },
        black: {
          DEFAULT: '#333333',
        },
        ming: {
          DEFAULT: '#387780',
        },
        electric_blue: {
          DEFAULT: '#64E9EE'
        },
        white: {
          DEFAULT: '#F6F4F4',
        },
        bgcolor: {
          DEFAULT: '#e0e0e0',
        },
        white2: {
          DEFAULT: '#cacaca'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
