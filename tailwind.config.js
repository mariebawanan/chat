/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bubble:
          "10px 10px 25px rgba(112, 124, 151, 0.05), 15px 15px 35px rgba(112, 124, 151, 0.05)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
};
