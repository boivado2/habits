/** @type {import('tailwindcss').Config} */


// tailwind.config.js

module.exports = {
//  content: [
//     "./screens/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}",
//  ],
 content: [
  "./App.{js,jsx,ts,tsx}", 
  "./components/**/*.{js,jsx,ts,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
  "./hooks/**/*.{js,ts,jsx,tsx}",

  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: '#573353',
        // 'primary-2': '#DE672D',
        secondary: '#FDA758',
        'light-secondary': '#FFF6ED',
        'light-secondary-2': '#E5E5E5',
        dark: '#060606',
        neutral: '#667085',
        light: "#DCDBDE"

      },
    },
  },
  plugins: [],
}