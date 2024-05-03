/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'blue-geg': '#03032B'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

