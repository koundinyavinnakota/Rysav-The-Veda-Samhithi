/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        mutedText: "var(--mutedText)",
        gold: "var(--gold)",
        goldHover: "var(--goldHover)",
        olive: "var(--olive)",
        oliveHover: "var(--oliveHover)",
        border: "var(--border)",
        saffron: "var(--saffron)",
      },
      borderRadius: {
        card: "18px",
        pill: "999px",
        dropdown: "16px",
      },
      boxShadow: {
        soft: "var(--shadow)",
        card: "0 4px 20px rgba(0,0,0,0.06)",
        cardHover: "0 8px 30px rgba(0,0,0,0.10)",
        dropdown: "0 12px 40px rgba(0,0,0,0.12)",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "scroll-left": "scroll-left var(--scroll-duration, 40s) linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
