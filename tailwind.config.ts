import { type Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export default {
  darkMode: ['class'],
  content: ['{routes,islands,components}/**/*.{ts,tsx,js,jsx}'],
  plugins: [animate, typography],
} satisfies Config
