/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Extra small screen size
        sm: "640px", // Small screen size (default Tailwind)
        md: "768px", // Medium screen size (default Tailwind)
        lg: "1024px", // Large screen size (default Tailwind)
        xl: "1440px", // Extra-large screen size (default Tailwind)
        "2xl": "1920px", // Custom 3XL screen size
      },
      backgroundImage: {
        "hero-bg": "url('assets/images/resto-bg.png')",
      },
      backgroundSize: {
        small: "8%",
        quarter: "25%",
      },
    },
  },
  plugins: [require("daisyui")],
}
