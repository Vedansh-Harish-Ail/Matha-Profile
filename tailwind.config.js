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
          DEFAULT: '#002B5B', // Deep Sea - Trust, Authority
          light: '#1a416b',
          dark: '#001e40',
        },
        secondary: {
          DEFAULT: '#2B7A78', // Cool Cyan - Cooling, Technical
          light: '#3e9290',
          dark: '#1f5958',
        },
        accent: {
          DEFAULT: '#FF8C00', // Safety Orange - Urgent CTAs
          light: '#ffa333',
          dark: '#cc7000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
