/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d0d0d",
        "brand-blue": "#2563eb",
        "brand-green": "#22c55e"
      }
    }
  },
  plugins: []
};
