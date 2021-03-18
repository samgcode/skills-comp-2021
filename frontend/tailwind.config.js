const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.trueGray,
      white: colors.white,
      green: {
        superlight: '#66ff8a',
        light: '#42ff6e',
        DEFAULT: '#11fe48',
        dark: '#10e645',
      },
      blue: {
        superlight: '#cfe1ff', 
        light: '#478dfc',
        DEFAULT: '#3b83f6',
        dark: '#3375de',
        superdark: '#1F2937'
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover'],
      translate: ['hover'],
    },
  },
  plugins: [],
}
