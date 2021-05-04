module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e7bc00',
        secondary: '#f5dc7b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
