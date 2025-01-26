import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      fontFamily: { worksans: string[]; poppins: string[] };
      colors: { customBlue: string; customBlack: string }
    }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#141414",
        customBlue: "#1C29F4",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
