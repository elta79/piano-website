/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js, ts, jsx, tsx}",
    "./src/components/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ['Rubik', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}

