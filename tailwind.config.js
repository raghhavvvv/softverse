/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Softverse brand colors - Green and Black theme
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Main green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Neutral gray
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        dark: {
          900: '#0f0f23',
          800: '#1a1a2e',
          700: '#16213e',
          600: '#0f3460',
        },
        // NeoPop inspired colors adapted for Green/Black theme
        neopop: {
          // Green variants for primary actions
          green: {
            100: '#00ff88', // Bright neon green
            200: '#00e676',
            300: '#00c853',
            400: '#00a152',
            500: '#00695c',
          },
          // Black/Dark variants for secondary actions
          black: {
            100: '#2a2a2a',
            200: '#1f1f1f',
            300: '#1a1a1a',
            400: '#141414',
            500: '#0f0f0f',
          },
          // Dark variants for backgrounds
          dark: {
            100: '#2a2a2a',
            200: '#1f1f1f',
            300: '#1a1a1a',
            400: '#141414',
            500: '#0f0f0f',
          },
          // Accent colors
          accent: {
            green: '#00ff88',
            lime: '#32ff7e',
            emerald: '#18ffb0',
            mint: '#7bed9f',
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neopop-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neopop': '4px 4px 0px 0px rgba(0, 0, 0, 0.8)',
        'neopop-hover': '6px 6px 0px 0px rgba(0, 0, 0, 0.8)',
        'neopop-pressed': '2px 2px 0px 0px rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'neopop': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
