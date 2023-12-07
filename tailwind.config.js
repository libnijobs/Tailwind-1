/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{ 
        'primary': '#CC2D4A', 
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', 
      }, 
      textColor:{ 
        'primary': '#CC2D4A', 
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', 
      },
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'img2': "url('../assets/img/bali.jpg')",
        'img3': "url('../assets/img/chicago.jpg')",
        'img4': "url('../assets/img/europe.jpg')",
        'img5': "url('../assets/img/iceland.jpg')",
        'img6': "url('../assets/img/LA.jpg')",
        'img7': "url('../assets/img/miami.jpg')",
        'img8': "url('../assets/img/new-york.jpg')",
        'img9': "url('../assets/img/norway.jpg')",
        'img10': "url('../assets/img/sanFrancisco.jpg')",
        'img11': "url('../assets/img/sanFranciscoDesktop.jpg')",
        'img12': "url('../assets/img/seattle.jpg')",
        'img13': "url('../assets/img/switzerland.jpg')",
        'img14': "url('../assets/img/sydney.jpg')",
        'img15': "url('../assets/img/yosemite.jpg')",
      
      },
    },
  },
  plugins: [],
}

