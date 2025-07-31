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
      white: '#FFF',
      gray: '#565656',
      purple: '#831ED2',
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
        fadeleft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        hourrotation: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        }
      },
      animation: {
        fadein: 'fadein .5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
        'fade-in-two':
          'fadein .5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards .4s',
        'fade-left':
          'fadeleft .5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
        'fade-left-two':
          'fadeleft .7s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards .4s',
        'fade-up':
          'fadeup .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
        'fade-up-two':
          'fadeup .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards .3s',
        'fade-up-three':
          'fadeup .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards .6s',
        'hour-rotation':
          'hourrotation 8s linear infinite',
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
