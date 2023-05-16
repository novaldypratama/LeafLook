/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/home.svg')",
        bg_check_plant: "url('/src/assets/bg_check_plant.svg')",
        bg_result: "url('/src/assets/bg_result.svg')",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
