import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: { DEFAULT: "#D4B896", light: "#E8D5BE", dark: "#B8956E" },
        earth: { DEFAULT: "#8B6F47", dark: "#5C4832", deep: "#3A2D1E" },
        sage: { DEFAULT: "#68A357", light: "#8BBD7C", dark: "#4D7941" },
        sky: { DEFAULT: "#ACE1FF", soft: "#D6EDFF" },
        ink: { DEFAULT: "#0f0d0b", surface: "#1a1714", raised: "#241f19" },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.04em", tighter: "-0.03em" },
    },
  },
  plugins: [],
};

export default config;
