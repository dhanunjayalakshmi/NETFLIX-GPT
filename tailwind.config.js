/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbar": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
