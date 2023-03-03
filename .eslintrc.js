module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-restricted-globals': 0,
    'linebreak-style': 0,
    'max-len': 0,
    eqeqeq: 0,
    'spaced-comment': 'off',
    'no-undef': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': off,
    'consistent-return': 'off',
  },
};