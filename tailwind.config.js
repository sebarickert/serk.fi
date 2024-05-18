/** @type {import('tailwindcss').Config} */
const { colors } = require("@carbon/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const carbonColors = Object.keys(colors).reduce((acc, color) => {
  if (Object.keys(colors[color]).length === 1) {
    return { ...acc, [color]: Object.values(colors[color])[0] };
  }

  const palette = Object.keys(colors[color]).reduce((paletteAcc, stop) => {
    const stopNumber = Number(`${stop}0`);
    paletteAcc[stopNumber] = colors[color][stop];
    return paletteAcc;
  }, {});

  return { ...acc, [color]: palette };
}, {});

module.exports = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        ...carbonColors,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
