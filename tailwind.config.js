// tailwind.config.js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if your files are in a different folder
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-out forwards",
        slideUpDelay: "slideUp 1s ease-out 0.5s forwards",
        slideUpDelay2: "slideUp 1s ease-out 1s forwards",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: true, // enables all built-in DaisyUI themes
  },
};
