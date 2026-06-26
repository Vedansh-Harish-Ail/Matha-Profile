/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06112C', // Very Dark Navy
          light: '#0B1E3F',
          dark: '#030816',
        },
        secondary: {
          DEFAULT: '#0B1E3F', // Dark Navy
          light: '#2B7A78',   // Teal-ish highlight
          dark: '#030816',
        },
        accent: {
          DEFAULT: '#FF8C00', // Safety Orange - Urgent CTAs
          light: '#ffa333',
          dark: '#cc7000',
        },
        surface: {
          DEFAULT: '#f8f9ff',
          dim: '#cbdbf5',
          bright: '#f8f9ff',
          container: {
            lowest: '#ffffff',
            low: '#eff4ff',
            DEFAULT: '#e5eeff',
            high: '#dce9ff',
            highest: '#d3e4fe',
          },
        },
        outline: {
          DEFAULT: '#737686',
          variant: '#c3c6d7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
        'deep': '40px',
      },
    },
  },
  plugins: [],
};
