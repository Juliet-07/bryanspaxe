const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        primarySemibold: ["SemiBold"],
        primaryBold: ["Bold"],
      },
    },
  },
  plugins: [],
});
