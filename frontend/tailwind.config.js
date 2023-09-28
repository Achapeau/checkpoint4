/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        japanese: ["NotoSansJP", "sans-serif"],
        french: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#E5E9E7", // WHITE
        secondary: "#525B5A", // BLACK
      },
      backgroundImage: {
        desktop: 'url("./images/background/desktop.jpg")',
        mobile: 'url("./images/background/mobile.jpg")',
      },
    },
  },
  plugins: [require("daisyui")],
};
