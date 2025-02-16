/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'primary-color': ' linear-gradient(to right, #0B859A, #6ABEC8, #6CBFC7)',  // Red to Orange to Blue
      }
    },
  },
  plugins: [],
}

