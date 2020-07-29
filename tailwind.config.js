const config = require('./tailwind.config.full');

const defaultTheme = config.theme;

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#000000',
          200: '#0FD08B',
          300: '#000000',
          400: '#000000',
          500: '#02B0AF',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#442E83',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
