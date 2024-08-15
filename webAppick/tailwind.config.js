/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      
        colorPrimary: '#245D51',
        colorSecondary: '#CB8461',
        blackShow : 'rgb(28 29 30 / 70%)',
        
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
      },
      width:{
        container : '1280px',
      },
    },
  },
  plugins: [],
}
