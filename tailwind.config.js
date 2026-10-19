const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        khushii: {
          gold: "#f8c053",
          "gold-dark": "#ad8639",
          brown: "#2d2210",
          gray: "#727272",
          "footer-gray": "#6c6c6c",
          involved: "#666666",
          cream: "#e2bf7f",
          "cream-light": "#f1d8b9",
          donate: "#4698ff",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
