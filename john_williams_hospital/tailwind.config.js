/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      colors: {
        'primary': '#5E5E5E',
        'secondary': '#F9FBFC',
        'tertiary': '#F2F2F2',  
      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [],
}