import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "#E8856B",
        coralDark: "#dd7459",
        cream: "#FBF7F4",
        lavender: "#EFE7FA",
        lavenderText: "#6B4FA0",
        mint: "#EAF6F0",
        mintText: "#3FA77E",
        ink: "#4A3B36",
        inkSoft: "#7C6B64",
        muted: "#9A8C86",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
