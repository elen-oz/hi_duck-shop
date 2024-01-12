/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#282c34",
        accent: "#fbbf24",
        accentSecond: "#f97316",
        gray: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
