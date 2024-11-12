/**
 * @type {import('tailwindcss').Config}
 *
 */

module.exports = {
  darkMode: "class",
  content: ["./components/**/*.js", "./app/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        mainClr: "var(--text-main)",
        mainClrLighted: "var(--text-main-lighted)",
        secondClr: "var(--text-fire)",

        mainSection: "var(--ui-section)",
        mainSectionDarked: "var(--ui-section-darked)",
      },
      backgroundImage: {
        mainGradient:
          "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
      },
      fontFamily: {
        ubuntu: ["ubuntu", "var(--font-ubuntu)", "-apple-system", "sans-serif"],
      },
    },
  },
};
