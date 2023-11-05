/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: { "defaultPrimaryColor": '#FA2371', "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#ff38116b", "400": "#60a5fa", "500": "#FF3811", "600": "#FF3811", "700": "#FF3811", "800": "#FF3811", "900": "#FF3811", "950": "#FF3811" }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
