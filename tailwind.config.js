/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#06B6D4', // Cyan-500
        tertiary: '#0EA5E9', // Sky-500
        'header-bg': '#111111',
        'border-color': 'rgba(6, 182, 212, 0.3)', // Cyan with opacity
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'link-color': '#06B6D4',
        'btn-hover': '#0891B2', // Cyan-600
        'search-hover': 'rgba(6, 182, 212, 0.1)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-lg': '0 0 30px rgba(6, 182, 212, 0.7)'
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan-line 2s linear infinite'
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
}