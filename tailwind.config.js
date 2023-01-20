module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   fadeIn: "fadeIn 2s ease-in forwards",
      // },
      // keyframes: {
      //   fadeIn: {
      //     "0%": { opacity: 0 },
      //     "100%": { opacity: 1 },
      //   },
      // },
    },
    // variants: {
    //   animation: ["motion-safe"],
    // },
  },
  plugins: [
    // require("@tailwindcss/forms")
  ],
};
