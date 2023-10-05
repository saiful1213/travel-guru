/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImgGradient': "linear-gradient(to right, #000000b3, #000000b3), url('/public/bg1.png')",
      },
      colors: {
        'primaryColor': '#F9A51A'
      },
    },
  },
  plugins: [require("daisyui")],
}
