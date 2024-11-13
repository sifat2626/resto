/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Extra small screen size
        sm: "640px", // Small screen size (default Tailwind)
        md: "768px", // Medium screen size (default Tailwind)
        lg: "1200px", // Large screen size (default Tailwind)
        xl: "1500px", // Extra-large screen size (default Tailwind)
        "2xl": "1920px", // Custom 3XL screen size
      },
      backgroundImage: {
        "hero-bg": "url('assets/images/resto-bg.png')",
        "book-bg": "url('assets/images/book.jpeg')",
        "footer-bg": "url('assets/images/footer.jpeg')",
      },
      backgroundSize: {
        small: "8%",
        quarter: "25%",
      },
    },
    fontFamily: {
      robo: '"Roboto", sans-serif',
      rale: '"Raleway", sans-serif',
      bebas: '"Bebas Neue", sans-serif',
      pop: '"Poppins", sans-serif',
    },
  },
  plugins: [require("daisyui")],
}
