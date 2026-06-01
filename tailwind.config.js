/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts}"
  ],
  theme: {
    screens: {
      "mb400": "400px",
      "mb390": "390px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    },
    colors: {
      "orange": "#ff6600",
      "black": "#000000"
    },
    extend: {}
  },
  plugins: [],
}

