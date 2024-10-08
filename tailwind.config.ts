/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#2B2C35',
        blue: {
          50:'#BAB0E8',
          100: '#09213F',
          200: '#5a00f0',
          300:'#0D2B4C',
          400:"#071429",
        },
        neutral:{
          50:"#5c5c5c",
          100:"#F1F0F4",
          200:"#3c465a",
        },
        red:{
          100:"#ff2d46",
          200:"#691b00",
        },
        black:{
          100:"#030913"
        },
        purple:{
          300:"#220A28",
        },

      },
      container: {
        center: true,
        padding: "6rem",
    }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]
}

