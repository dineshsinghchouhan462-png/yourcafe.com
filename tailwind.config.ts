import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxury: "#3f3a2f",
        cream: "#f7f4ef"
      }
    }
  },
  plugins: [],
};

export default config;
