/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-modern-gothic)"],
      },
      colors: {
        primary: {
          800: "#283139",
          700: "#3C4F5F",
          600: "#5F5F5F",
          500: "#76848F",
          400: "#A8E9EF",
        },
        light: {
          300: "#F3F3F3",
          200: "#FEF9F3",
        },
        dark: "#1A1A1A",
      },
      borderRadius: {
        custom: "4px",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
