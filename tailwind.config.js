/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0A1F44',
        'navy-light': '#12395B',
        'gold': '#C8A15A',
        'bronze': '#8B6B3F',
        'mineral': '#F5F4EF',
        'stone': '#8A8F98',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



