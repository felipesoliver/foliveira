import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.css",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      current: {
        DEFAULT: 'currentColor',
      },
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

    },
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      keyframes: {
        fadein: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        fadein: 'fadein .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
        vollkorn: ['var(--font-vollkorn)', ...fontFamily.sans],
      },
      backgroundImage: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
