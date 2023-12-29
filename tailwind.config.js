import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */

const sets = [{
  color1: "#F5A091",
  color2: "#A8DAF4",
  color3: "#B2DECA",
  color4: "#FBFDD2",
  color5: "#ABAEDB",
},{
  color1: "#58f5d9",
  color2: "#32c1ff",
  color3: "#9287ff",
  color4: "#ffe01b",
  color5: "#ff7381",
}, {
  color1: "#3A015C",
  color2: "#4F0147",
  color3: "#35012C",
  color4: "#290025",
  color5: "#11001C",
}, {
  color1: "#202030",
  color2: "#39304A",
  color3: "#635C51",
  color4: "#7D7461",
  color5: "#B0A990",
}, {
  color1: "#493548",
  color2: "#4B4E6D",
  color3: "#6A8D92",
  color4: "#80B192",
  color5: "#A1E887",
}, {
  color1: "#0F5257",
  color2: "#0B3142",
  color3: "#9C92A3",
  color4: "#C6B9CD",
  color5: "#D6D3F0",
}]
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: sets[0],
        text: {
          dark: "#000000",
          light: "#ffffff",
        }
      },
      screens: {
        'sm': {
          "min": "0",
           "max": "960px",
        },  
        'md': {
          "min": "576px",
          "max": "960px",
        }, 
        'xl': {
          "min": "960px",
          "max": "1440px",
        },  
        '2xl': {
          "min": "1440px",
          "max": "5000px",
        },
      },
    }
  },
  plugins: [],
}




/**

 */