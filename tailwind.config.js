// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradientSlow: "gradientAnimation 12s ease infinite", // Slower animation
        gradientFast: "gradientAnimation 4s ease infinite", // Faster animation
      },
      backdropBlur: {
        xl: "20px",
        "2xl": "30px",
        "3xl": "40px",
      },
      keyframes: {
        gradientAnimation: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      backgroundSize: {
        300: "300% 300%",
      },
    },
  },
  plugins: [],
};
