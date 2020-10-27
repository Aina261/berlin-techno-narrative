module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        home: "url('/static/background.jpg')",
      }),
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
      screens: {
        "1k": "1920px",
        "2k": "2048px",
        "4k": "3840px",
      },
    },
  },
  variants: {},
  plugins: [],
}
