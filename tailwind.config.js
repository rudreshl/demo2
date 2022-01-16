const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      SMECOLORS: { gray: "#2B399012", lightGreen: "#ECF7F5" },
    },
    extend: {},
  },
  plugins: [],
};
