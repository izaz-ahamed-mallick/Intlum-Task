/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      Regular: "Geomanist Medium",
      Medium: "Geomanist Medium, sans-serif",
      Bold: "Geomanist Bold, sans-serif",
      Light: "Geomanist Light, sans-serif",
      Book: "Geomanist Book, sans-serif",
      Libre: "Libre Baskerville Regular",
    },
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "6rem",
          "2xl": "6rem",
        },
      },

      backgroundImage: {
        "gradient-image":
          'linear-gradient(to right bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.2), rgba(255,255,255,0.7)),url("./Images/BG/Homepage.png")',
        "gradient-angle":
          "linear-gradient(120deg, #fa1d8f, #8250a3,#2f57aa, #175ead)",
        "gradient-angle-hover":
          "linear-gradient(120deg,#ff9c40, #fe4587, #cf2ea3,#7d34a2, #4d47a6)",
        "gradient-angle2":
          "linear-gradient(120deg, #f9b208, #ceae14,#a6aa1f, #72a52d)",
        gradientText: "linear-gradient(to right,#fa1d8f,#175ead)",
        bgGradient: "linear-gradient(120deg,#f12f61,#e53d2d)",

        ContactBG:
          'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.2)),url("./Images/BG/contactbg.png")',
      },

      colors: {
        secondaryText: "#616161",
        borderColor: "#ef375d",
        boldColor: "#2b2a2a",
      },
    },
  },
  plugins: [],
};
