// .eslintrc.cjs
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'react-app',
      'plugin:react/recommended', // React-specific rules
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        "react/prop-types":"off",
        "react/no-unescaped-entities":"off",
      'no-console': 'warn', // Warn about console.log statements
      'react/prop-types': 'off', // Disable prop-types (can be useful in some cases)
      'react/react-in-jsx-scope': 'off', // No longer needed with React 17+
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
  };
  