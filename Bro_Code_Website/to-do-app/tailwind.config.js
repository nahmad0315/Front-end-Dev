/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}", //This line tells tailwind to scan files.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
