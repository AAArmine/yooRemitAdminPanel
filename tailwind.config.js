/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ff4b2b",
        secondary: "#2F80ED",
        secondaryTitle: "#4E6CA8",
        alternative: "#ff44ab",
        grey: "#6a6b6b",
        lightGrey: "#e0e0e0",
        buttonGrey: "#6B6D73",
        background: "#f7f7f7",
        success: "#27ae60",
        lightSuccess: "#27ae601a",
        error: "#f42b58",
        black: "#070808",
        thumb: "#D5D5D5",
      },
    },
  },
  plugins: [],
};
