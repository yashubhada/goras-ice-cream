/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grandstander: ['Grandstander', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        bounce: "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
    }
  },
  plugins: [],
}