const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        title: 'hsl(var(--title))',
        container: 'hsl(var(--container))',
        scrollbar: 'hsl(var(--scrollbar))',
        thumb: 'hsl(var(--thumb))'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans]
      },
      fontSize: {
        smaller: '0.75rem',
        small: '0.813rem',
        normal: '0.938rem',
        h3: '1rem',
        h2: '1.25rem',
        h1: '1.5rem',
        big: '2rem'
      },
      transitionDuration: {
        400: '0.4s'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
