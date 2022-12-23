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
          primary: "#D926A9",

          secondary: "#D926A9",

          accent: "#1FB2A6",

          neutral: "#ffffff",

          "base-100": "#ffffff",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
