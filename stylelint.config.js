module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: [],
  rules: {
    'scss/at-rule-no-unknown': [null],
  },
}
