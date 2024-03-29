module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    boxShadow: {
      DEFAULT: '4px 4px 8px 4px #b8b8b8, -4px -4px 8px -4px #ffffff', 
      sm: '2px 2px 4px 2px #cccbcb, -1px -1px 2px -1px #ffffff',
      dark: '8px 8px 16px 16px #2b2b2b, -8px -8px 16px -8px #3b3b3b',
      darkSm: '4px 4px 8px 4px #2b2b2b, -4px -8px 4px -4px #3b3b3b',
      none: 'none',
      insetDark: 'inset 12px 12px 24px #2b2b2b, inset -12px -12px 24px #3b3b3b',
      inset: 'inset 12px 12px 24px #d1cfcf, inset -12px -12px 24px #ffffff',
      md: '4px 4px 16px 8px #acacac, -8px -8px 16px -8px #e8e8e8',
      darkMd: '8px 8px 16px 8px #acacac, -8px -8px 16px -8px #e8e8e8',
    },

    fontFamily: {
      'inconsolata': ['Inconsolata'],
      'montserrat' : ['Montserrat'],
     },
    extend: {
      colors: {
        black: {
          DEFAULT: '#333333',
        },
        black2: {
          DEFAULT: '#444444',
        },
        ming: {
          DEFAULT: '#387780', //'#BA5C12',  ming,
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
    extend: {
      boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark'],
    },
  },
  plugins: [],
}
