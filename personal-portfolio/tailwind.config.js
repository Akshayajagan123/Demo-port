module.exports = {
  purge: ['./index.html', './assets/**/*.{js,jsx,ts,tsx,vue}', './**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#9333EA', // Custom secondary color
      },
      spacing: {
        '128': '32rem', // Custom spacing
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}