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
        primary: '#e2844a',
        secondary: '#f1c279',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
