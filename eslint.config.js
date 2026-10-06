export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        console: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
      },
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];