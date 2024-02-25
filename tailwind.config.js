/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-background': '#1a1a20', // Rename and provide a valid color value
      },
    },
  },
  plugins: [],
}
