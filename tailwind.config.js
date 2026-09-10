/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: false,
    extend: {
      colors: {
        night: {
          DEFAULT: "#12261F",
          50: "#E8EDEA",
          100: "#C7D4CC",
          200: "#9BB0A2",
          300: "#6C8B76",
          400: "#3F624C",
          500: "#1F4A3C",
          600: "#1A3D33",
          700: "#16332A",
          800: "#122921",
          900: "#12261F",
          950: "#0A1712",
        },
        brass: {
          DEFAULT: "#C79A46",
          50: "#FBF4E4",
          100: "#F4E4BE",
          200: "#EBD095",
          300: "#DDB86C",
          400: "#D2A857",
          500: "#C79A46",
          600: "#A87C34",
          700: "#87622A",
          800: "#644722",
          900: "#463319",
        },
        paper: {
          DEFAULT: "#F6F1E6",
          soft: "#EFE7D4",
          card: "#FCFAF3",
        },
        ink: {
          DEFAULT: "#211F1B",
          soft: "#4A473F",
          faint: "#7A776C",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        body: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        arabic: ["'Amiri'", "'Noto Naskh Arabic'", "serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      boxShadow: {
        lantern: "0 18px 40px -18px rgba(18, 38, 31, 0.45)",
        card: "0 1px 0 rgba(33,31,27,0.06), 0 12px 24px -16px rgba(33,31,27,0.18)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          "0%,100%": { opacity: 0.55 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        glow: "glow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
