const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1.5)" },
        },
        fadeUp: {
          "10%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        fade: "fade 12s linear infinite",
        fadeUp: "fadeUp 12s linear infinite",
      },
    },
  },
  plugins: [],
});
