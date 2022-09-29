/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        mygrey: "#F4F4F4",
        dark: {
          1: "#1A1C20",
          2: "#141619",
          alpha: "#1A1C20E6",
        },
        gold: {
          primary: "#F0A500",
          secondary: "#fa9c24",
          1: "rgba(248, 117, 55, 1)",
          2: "rgba(251, 168, 31, 1)",
        },
      },
      fontFamily: {
        BigJohn: "Big John",
        SlimJoe: "Slim Joe",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
