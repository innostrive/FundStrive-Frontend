const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00CCDD",
        secondary: "#2D3250",
        "text-primary": "#f3f4f7",
      },
      keyframes: {
        "nav-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "nav-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "nav-down": "nav-down 0.3s ease-in-out",
        "nav-up": "nav-up 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
});
