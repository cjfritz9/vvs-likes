import type { Config } from 'tailwindcss';
import { themes } from './theme/index'

const config: Config = {
  prefix: 'tw-',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes
  },
  plugins: [require("daisyui")],
}

export default config;
