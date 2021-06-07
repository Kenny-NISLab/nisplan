module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    options: {
      safelist: [/^bg-/, /^hover:bg-/, /^text-/, /^hover:text-/, 'dark-mode'],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#e7bc00',
        secondary: '#f5dc7b',
      },
    },
    darkSelector: '.dark-mode',
  },
  variants: {
    backgroundColor: [
      'hover',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: [
      'focus',
      'dark',
      'dark-disabled',
      'dark-focus',
      'dark-focus-within',
    ],
    textColor: [
      'hover',
      'dark',
      'dark-hover',
      'dark-active',
      'dark-placeholder',
    ],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
