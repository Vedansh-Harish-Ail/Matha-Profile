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
          DEFAULT: '#004ac6', // Trustworthy Blue
          container: '#2563eb',
          fixed: '#dbe1ff',
        },
        secondary: {
          DEFAULT: '#6b38d4', // Energetic Purple
          container: '#8455ef',
          fixed: '#e9ddff',
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
        metropolis: ['Metropolis', 'Inter', 'sans-serif'],
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

