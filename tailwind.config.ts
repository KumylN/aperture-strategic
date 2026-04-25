import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        "navy-raised": "#0E1C33",
        offwhite: "#E8EDF5",
        cyan: "#06B6D4",
        muted: "#6B7B8F",
        hairline: "rgba(232, 237, 245, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "72rem",
      },
      animation: {
        "fade-in": "fadeIn 800ms ease-out both",
        "fade-in-slow": "fadeIn 1200ms ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
