/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],

  theme: {
    container: {
      center: true,
      padding: "1em"
    },
    extend: {
      colors: {
        primary: {
          "purple": "#8C82FC",
          "teal": "#8EF6E4"
        },
        secondary: {
          "gray": "#BAB8D2",
          "teal": "#44E4C9",
          "gray-bg": "#F8F8FF"
        }
      },
    },
  },
  plugins: [],
}

