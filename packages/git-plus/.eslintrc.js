module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {}
  },
  globals: {
    atom: false
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off'
    // quotes: ['error', 'single'],
    // semi: ['error', 'never']
  }
}