/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#090a0b',
        base: '#111113',
        ink: '#f5f2f0',
        glow: '#7ee7da',
        ember: '#bde7e0',
        slate: '#aaa2a0',
        panel: '#171719',
      },
      boxShadow: {
        glow: '0 0 60px rgba(126, 231, 218, 0.16)',
        panel: '0 30px 80px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at top, rgba(102,255,234,0.08), transparent 25%), linear-gradient(180deg, rgba(255,95,109,0.05), transparent 32%)',
      },
    },
  },
  plugins: [],
}

