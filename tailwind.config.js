/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#070707',
        base: '#111111',
        ink: '#e9e9e9',
        glow: '#66ffea',
        ember: '#ff5f6d',
        slate: '#7b8a99',
        panel: '#171717',
      },
      boxShadow: {
        glow: '0 0 60px rgba(102, 255, 234, 0.18)',
        panel: '0 30px 80px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at top, rgba(102,255,234,0.08), transparent 25%), linear-gradient(180deg, rgba(255,95,109,0.05), transparent 32%)',
      },
    },
  },
  plugins: [],
}

