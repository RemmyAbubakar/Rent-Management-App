/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage:{
        "apartment": "url('/images/bello12.jpeg')", 
      }
    },
    fontFamily: {
      abc: ["Piazzolla", "serif"],
      cdm: ["Roboto Flex", "sans-serif"],
      second: ["Urbanist", "sans-serif"],
      another: ["Ultra", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
