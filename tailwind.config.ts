import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};

export default config;
