import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan your src folder
  ],
  safelist: [
    "text-gray-700",
    "dark:text-gray-300",
    "text-black",
    "dark:text-white",
    "hover:text-pink-500",
    "dark:hover:text-pink-400",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
