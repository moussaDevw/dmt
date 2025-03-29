/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2850",
        secondary: "#4A76C299",
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, #1B2850, #4A76C2)",
        "gradient-to-l": "linear-gradient(to left, #1B2850, #4A76C299)",
        "gradient-to-t": "linear-gradient(to top, #1B2850, #4A76C299)",
        "gradient-to-b": "linear-gradient(to bottom, #1B2850, #4A76C299)",
      },
    },
  },
  plugins: [],
};
