/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0a0e27',
          darker: '#050813',
          light: '#f5f5f7',
          lighter: '#ffffff',
          purple: '#6366f1',
          blue: '#3b82f6',
          teal: '#14b8a6',
          gold: '#f59e0b',
        },
        pm: {
          bg:       '#0B0B0D',
          surface:  '#111113',
          border:   '#1A1A1C',
          text:     '#E6E6E6',
          muted:    '#A1A1A1',
          accent:   '#357FCC',
          'accent-h': '#3F8FEA',
        },
        'pm-light': {
          bg:      '#FAFAFA',
          surface: '#FFFFFF',
          border:  '#E5E5E7',
          text:    '#111113',
          muted:   '#6B6B6E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'cosmic-dark': 'radial-gradient(ellipse at top, #1e1b4b 0%, #0a0e27 50%, #050813 100%)',
        'cosmic-light': 'radial-gradient(ellipse at top, #e0e7ff 0%, #f5f5f7 50%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}
