/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F7F7F5",
        secondary: "#6B6B6B",
        tertiary: "#FFFFFF",
        ink: "#111111",
        "ink-muted": "#3D3D3D",
        "black-100": "#F0EFEC",
        "black-200": "#E8E7E4",
        "white-100": "#1A1A1A",
      },
      boxShadow: {
        card: "0px 8px 30px -12px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
