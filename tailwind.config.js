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
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      scrollbar: ['rounded'],
      '&::-webkit-scrollbar':{
        display:'none',
      },
      '&::-webkit-scrollbar-thumb':{
        background: 'transparent',
      },
    },
  },
  plugins: [],
}

