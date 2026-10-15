import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

// Les couleurs pointent vers les tokens CSS du design system (src/index.css), thème clair/sombre via [data-theme].
const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          ink: 'var(--primary-ink)',
          press: 'var(--primary-press)',
        },
        secondary: { DEFAULT: 'var(--secondary)', ink: 'var(--secondary-ink)' },
        accent: { DEFAULT: 'var(--accent)', ink: 'var(--accent-ink)' },
        bg: 'var(--bg)',
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
        },
        content: {
          DEFAULT: 'var(--text)',
          2: 'var(--text-2)',
          3: 'var(--text-3)',
        },
        line: { DEFAULT: 'var(--line)', strong: 'var(--line-strong)' },
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        info: 'var(--info)',
      },
      fontFamily: {
        title: ['Barlow Condensed', 'Arial Narrow', 'sans-serif'],
        body: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
      },
    },
  },
  plugins: [animate],
};
export default config;
