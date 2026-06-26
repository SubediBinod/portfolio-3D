/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary, #050816)",
        secondary: "var(--text-secondary, #aaa6c3)",
        tertiary: "var(--bg-tertiary, #151030)",
        "black-100": "var(--bg-black-100, #100d25)",
        "black-200": "var(--bg-black-200, #090325)",
        "white-100": "var(--text-white-100, #f3f3f3)",
        "electric-purple": "var(--bg-electric-purple, #915eff)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(33, 30, 53, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
