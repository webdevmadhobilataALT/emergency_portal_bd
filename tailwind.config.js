/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
        pine: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          400: "#10B37E",
          500: "#0F7A5C",
          600: "#0D6B4E",
          700: "#0B5A41",
          800: "#0A4A36",
          900: "#083A2A",
        },
        ink: {
          900: "#0B1120",
          800: "#111827",
          700: "#1F2937",
        },
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        lift: "0 12px 32px rgba(185, 28, 28, 0.14), 0 4px 12px rgba(15, 23, 42, 0.06)",
        glow: "0 0 0 4px rgba(220, 38, 38, 0.12)",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
        ticker: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 2s ease-in-out infinite",
        ticker: "ticker 14s linear infinite",
      },
    },
  },
  plugins: [],
}
