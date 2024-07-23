/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        uniWhite: "#D4F4FB",
        uniLight: "#4EB3D3",
        uniBlue: "#0754EB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
