import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: { 
        'red': '#aa1010', 
        'offWhite': '#efefef', 
        'gray': '#171717'
      },
      textColor: {
        'dullWhite': '#9e9e9d', 
        'surface-white': 'var(--surface-surface-white, #FFF)',
      },
      boxShadow: {
        'dotLine': '0px 3px 4px 0px rgba(142, 142, 142, 0.25) inset, 0px 0px 0px 1px rgba(44, 64, 94, 0.06), 0px 1px 1px 0px rgba(44, 64, 94, 0.04), 0px 2px 4px 0px rgba(44, 64, 94, 0.08)'
      },
      borderStyle: {
        'solid': 'solid',
      },
      borderColor: {
        'dotLine': 'rgba(255, 255, 255, 0.20)',
        'card': 'rgba(255, 255, 255, 0.04)'
      },
      fontSize: {
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
        '18': '18px',
      },
      borderRadius: {
        'card': '8px',
      },
    },
  },
  plugins: [],
};
export default config;
