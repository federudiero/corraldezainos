/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#4caf50',
        },}
    },
  },
  plugins: [require("daisyui")],
};
