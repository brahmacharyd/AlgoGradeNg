/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        brandbg: '#171421',
        btnBg: '#27a2f7',
        btnBgHover: '#1c8fe0',
        cardsBg:'#3b609e',
        programGlanceBg:'#27a2f7',
        programGlanceBgbar:'#075dcc',
        programcirculamBg:'#27a2f7',
      },
      animation: {
        scroll: 'scroll 100s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    }
    
  },
  plugins: []
}
