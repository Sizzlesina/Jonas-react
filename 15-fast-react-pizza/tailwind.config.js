/**
 * @format
 * @type {import('tailwindcss').Config}
 */
import defaultTheme from 'tailwindcss/defaultTheme';

// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        ...defaultTheme.height,
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
