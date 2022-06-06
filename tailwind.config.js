const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 12 row grid
        12: 'repeat(12, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ['Fira Code', ...defaultTheme.fontFamily['sans']],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
