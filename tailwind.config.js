//** @type {import('tailwindcss').Config} */
//module.exports = {
  //content: ["./src/**/*.{html,js}"],
  //theme: {
    //extend: {},
  //},
  //plugins: [],
//}

/*module.exports={
  content:[
    "./src/**///*.{js,jsx,ts,tsx}",
//  ],
 // theme:{
 //   extend:{},
//  },
//  plungins:[],
//}*/

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: '#0047AB', // Define the azure color
      },
    },
  },
  plugins: [],
}