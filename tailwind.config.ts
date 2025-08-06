import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // This line is crucial for the App Router
  ],
  theme: {
    extend: {
      animation: {
        // This creates the "animate-stars" class you need
        stars: "starsAnimation 60s linear infinite",
      },
      keyframes: {
        // This defines the movement for the animation
        starsAnimation: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-300px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;