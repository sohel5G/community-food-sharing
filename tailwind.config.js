/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [],
  },
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: { "defaultPrimaryColor": '#FA2371', "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#FA2371", "400": "#60a5fa", "500": "#FA2371", "600": "#FA2371", "700": "#FA2371", "800": "#FA2371", "900": "#FA2371", "950": "#FA2371" },
        blue: { "400": "#FA2371", "500": "#FA2371", "600": "#FA2371", "700": "#FA2371" }
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
