import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        accent: "#F96B1E",
        neutral: "#A8B2BD",
        dark: "#222222",
      },
      fontFamily: {
        sans: ["var(--font-source-sans-pro)", "sans-serif"],
        heading: ["var(--font-raleway)", "sans-serif"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(to right, rgba(168,178,189,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,178,189,0.18) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
