/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        floeva: "#9a4f50"
      },
      backgroundColor: {
        leftPanel: "#ffe6e7",
        rightPanel: "#fff9f8"
      }
    },
  },
  plugins: [],
}

