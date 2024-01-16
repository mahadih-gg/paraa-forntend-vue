/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#424242",
          100: "#D1D1D1",
          200: "#AEAEAE",
          300: "#777777",
          400: "#242424",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#F5F5F5",
          200: "#F0F2EA",
          300: "#F9FAF6",
        },
      },
    },
  },
  plugins: [],
};
