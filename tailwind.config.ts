import { type Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

import animate from 'tailwindcss-animate'

export default {
  content: ['{routes,islands,components}/**/*.{ts,tsx,js,jsx}'],
  plugins: [animate, typography],
} satisfies Config
