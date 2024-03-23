/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans"],
      },
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        mainBlue: "#410DEB",
        purple: "#410DEB",
        gray: "#E0E8E4",
        green: "#79E003",
        icons: {
          light: "#F3F3F3",
        },
        border: {
          main: "#D3DBDA",
        },
        text: {
          spicalColor: "#2F3333A6",
        },
        backgrounds: {
          main: "#F6F9F9",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
