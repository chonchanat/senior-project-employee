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
        "light-blue": "#E8F0FD",
        "yellow": "#F4D35E",
        "gray": "#D9D9D9",
        "inputBorder": "#C7C7C7",
        "light-gray": "#E0E0E0",
        "text-gray": "#0000008A",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}