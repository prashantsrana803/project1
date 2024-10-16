import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: { 
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralDGrey' : '#4D4D4D',
        'brandPrimary' : '#262543',
        'neutralGrey' : '#717171',
        'gray900': '#18191F',
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

