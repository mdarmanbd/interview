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
        colorCarcol: '#F88C3D',
        blackShow : 'rgb(28 29 30 / 70%)',
        whiteShadow : 'rgb(255 255 255 / 75%);',
        lightBlack : '#2C2C2C',
        lightGray : '#808080',
        deepGreen : '#245D51',
        lightPink : 'rgba(203, 132, 97, 0.19)',
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
