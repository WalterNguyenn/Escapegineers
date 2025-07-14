import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Roboto Slab', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        // New balanced Purdue color scheme
        light: {
          bg: '#F6F4EF',        // Main background (soft ivory)
          card: '#FFFFFF',      // Cards and containers
          text: '#121212',      // Body text (Boiler Black)
          muted: '#757575',     // Muted/secondary text
          gold: '#C29A3A',      // Accent (CTA, highlights)
          border: '#DDD6C5',    // Dividers and subtle outlines
          hover: '#F0E6D6',     // Button/card hover bg
        },
        dark: {
          bg: '#121212',        // Main background (Boiler Black)
          surface: '#1E1E1E',   // Cards, nav, modals
          text: '#F4F1E6',      // Main text (ivory tone)
          muted: '#A5A5A5',     // Muted/subtext
          gold: '#D4AF37',      // Accent (CTA, links, icons)
          border: '#2E2E2E',    // Subtle outlines
          hover: '#2A2A2A',     // Hover effect background
        },
        
        // Legacy colors (keeping for backward compatibility)
        boiler: '#121212',
        goldplus: '#C29A3A',
        foundry: '#4F4F51',
        ivory: '#F4F1E6',
        magenta: '#CA2E55',
        'warm-ivory': '#F6F4EF',
        'deep-charcoal': '#2C2C2C',
        'satin-gold': '#D4AF37',
        'slate-gray': '#757575',
        'dust-beige': '#EAE2D8',
        'purdue-gold': '#B1810B',
        'purdue-black': '#000000',
        'purdue-gray': '#5B6870',
        'purdue-light-gray': '#F5F5F5',
        'purdue-white': '#FFFFFF',
        'rich-black': '#0D1117',
        'warm-white': '#FAFAFA',
      },
    },
  },
  plugins: [],
}

export default config 