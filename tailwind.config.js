/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  // Default padding for all screens
          sm: '2rem',       // Padding for small screens and above
          md: '3rem',       // Padding for medium screens and above
          lg: '4rem',       // Padding for large screens and above
          xl: '5rem',       // Padding for extra large screens and above
          '2xl': '6rem',    // Padding for 2xl screens and above
        },
      },
    },
  },
  plugins: [],
};
