module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: 0,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'no-unsafe-optional-chaining': 0,
    'no-mixed-operators': 0,
    'no-plusplus': 0,
  },
}
