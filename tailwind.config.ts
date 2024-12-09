module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      clg: "1365px",
      clg2: "1367px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        login: "url('/img/loginbg.jpg')",
      },
      colors: {
        dark: "#141414",
        primary: "#008000",
        secondary: "#5c57a6",
      },
      borderRadius: { lg: "10px" },
    },
    animation: {
      bounce: "bounce 2s infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    },

    keyframes: {
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: 0,
        },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-10%)",
          "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    },
  },
  plugins: [],
};
