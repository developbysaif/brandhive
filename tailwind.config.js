/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#0a0a0a",
        card: {
          light: "#ffffff",
          border: "#e5e5e5",
          dark: "#0d0d0d",
          darkBorder: "#222222"
        },
        brand: {
          accent: "#F6C53C", // brand gold accent
          yellow: "#F6C53C",
          hover: "#F6C53C",
          green: "#22c55e",  // open for work green
          dark: "#0a0a0a"
        },
        lamosa: {
          bg: "#fafafa",
          card: "#ffffff",
          darkCard: "#0d0d0d",
          border: "#e5e5e5",
          darkBorder: "#262626",
          text: "#0a0a0a",
          textMuted: "#737373",
          textLight: "#a3a3a3",
          red: "#F6C53C"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
