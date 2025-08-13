/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0E1A',
        'premium-dark': '#0F1419',
        'premium-card': '#1A1F2E',
        'premium-border': '#2D3748',
        'premium-accent': '#4A5568',
        'buy-green': '#00D4AA',
        'sell-red': '#FF6B6B',
        'button-gradient-start': '#667EEA',
        'button-gradient-end': '#764BA2',
        'gold-accent': '#FFD700',
        'platinum': '#E5E4E2',
      },
      fontFamily: {
        'premium': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        'premium-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
        'glow-green': '0 0 20px rgba(0, 212, 170, 0.3)',
        'glow-red': '0 0 20px rgba(255, 107, 107, 0.3)',
        'glow-blue': '0 0 30px rgba(102, 126, 234, 0.4)',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(26, 31, 46, 0.9) 0%, rgba(15, 20, 25, 0.9) 100%)',
        'signal-gradient': 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
      },
      backdropBlur: {
        'premium': '20px',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}