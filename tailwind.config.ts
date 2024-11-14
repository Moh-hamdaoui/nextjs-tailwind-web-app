import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight:{
        'custom-medium' : '600',
      },
      fontSize: {
        'custom-sm': '16px',
        'custom-lg-s' : '30px',
        'custom-lg': '35px',
        'custom-xl': '33px',

      },
      borderRadius:{
        '30': '80px',
      },
      margin: {
        '20': '60px',
        '100' : '600px',
      },
      width: {
        '30': '100px',
        '35' : '180px',
        '50': '370px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      
    },
  },
  plugins: [],
} satisfies Config;
