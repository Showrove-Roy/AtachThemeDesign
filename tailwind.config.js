/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        atach: {
          primary: "#0066FF",
          secondary: "#1F2029",

          accent: "#85868D",
          neutral: "#F4F6F9",
          "neutral-100": "#E5F0F4",
          "base-100": "#ffffff",
          "base-200": "#FAFCFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
