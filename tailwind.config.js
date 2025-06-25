/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0f172a'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fadeIn': 'fadeIn 0.2s ease-out',
        'slideUp': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translate(-50%, 100%)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        },
      },
    },
  },
  plugins: [],
}
