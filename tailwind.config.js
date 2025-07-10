/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d1117',
        secondary: '#238636',
        tertiary: '#8b949e',
        'header-bg': '#161b22',
        'border-color': '#30363d',
        'link-color': '#58a6ff',
        'btn-hover': '#2ea043',
        'text-primary': '#c9d1d9',
        'text-secondary': '#8b949e',
        'search-bg': '#0d1117',
        'search-border': '#30363d',
        'search-hover': '#161b22',
        'cmd-bg': 'rgba(13, 17, 23, 0.95)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'cmd': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}