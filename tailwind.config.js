/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientStart: "#F2B257",
        gradientMiddle: "#EB9B57",
        gradientEnd: "#E98856",
      },
    },
  },
  plugins: [],
};
