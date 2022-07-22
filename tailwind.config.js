/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        // Neutral
        "main-bg": "hsl(217, 54%, 11%)",
        "card-bg": "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
