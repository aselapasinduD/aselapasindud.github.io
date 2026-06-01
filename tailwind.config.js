/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts}"
  ],
  theme: {
    screens: {
      "mb390": "390px",
      "mb400": "400px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    },
    colors: {
      "orange": "#ff6600",
      "black": "#000000",
      "white": "#ffffff",
      "red": {
        "500": "#ef4444"
      }
    },
    extend: {}
  },
  plugins: [],
}

