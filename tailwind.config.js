/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bg
        'blue': '#1fb6ff',
        'main-bg': '#2a3447',
        'soft-bg': '#384256',
        'dark-bg': '#222b3c',
        // text
        'main-color': 'white',
        'soft-color': '#ddd',
        'dark-color': '#2a3447',
      },
      gridAutoRows: {
        '2fr': 'minmax(135px, auto)',
      }
    },
  },
  plugins: [],
}

