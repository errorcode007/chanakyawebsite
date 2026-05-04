import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a2744',
        accent: '#c9a84c',
        background: '#f8f7f4',
        text: '#1f2937',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
