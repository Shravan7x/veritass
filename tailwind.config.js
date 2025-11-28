/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#6CE975",
        deepSpace: "#082235",
        roseKiss: "#FF6392",
        mintCream: "#F7FFF7",
        onyx: "#121212",
        periwinkle: "#8A76FC", 
      },
      fontFamily: {
        sansation: ["var(--font-sansation)", "sans-serif"],
      },
    },
  },
  plugins: [],
};