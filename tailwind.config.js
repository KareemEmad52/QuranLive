/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#F1E1B4',
        'secondry': '#f2f2f2',
      },
      fontFamily:{
        'Readexpro': ["Readex Pro", "sans-serif"]
      },
      backgroundImage:{
        'star': "url('/ring.svg')"
      }
    },
  },
  plugins: [],
}

