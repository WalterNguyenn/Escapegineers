import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        boiler: '#121212',        // Dark background
        goldplus: '#C29A3A',      // Old Gold++
        foundry: '#4F4F51',       // Soft gray
        ivory: '#F4F1E6',         // Light paper
        magenta: '#CA2E55',       // Vibrant pink-red
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config 