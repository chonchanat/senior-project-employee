/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fha": "#5FAAF0",
        "fha-desktop": "#77BEFF",
        "bg-desktop": "#F4F4F4", 
        "accept": "#5FC356",
        "decline": "#F96A6A",
        "hover": "#F8F8F8",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}