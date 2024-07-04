/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#f7f7f8",
        thirty: '#0b0b0e',
        darkPrimary: "#f7f7f8",
        darkSecondary: "#141414",
        darkThirty: '#0b0b0e',
        greenChat: '#a7fb1f'  
      }
    },
  },
  plugins: [],
}