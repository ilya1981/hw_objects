/* eslint-disable no-dupe-keys */
import pluginJest from 'eslint-plugin-jest';
// eslint-disable-next-line sort-imports
import js from '@eslint/js';
// eslint-disable-next-line sort-imports
import globals from 'globals';
// eslint-disable-next-line sort-imports
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], 
     
    // eslint-disable-next-line sort-keys
    plugins: { js, jest: pluginJest }, 
     
    // eslint-disable-next-line sort-keys
    extends: ['js/all'], languageOptions: { globals: pluginJest.environments.globals.globals,globals: globals.browser }, 
  },
   {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      // eslint-disable-next-line sort-keys
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      // eslint-disable-next-line sort-keys
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', 'never'],
      // eslint-disable-next-line sort-keys
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-in-parens': ['error', 'never'],
      // eslint-disable-next-line sort-keys
      'no-multi-spaces': 'error',
      'prefer-const': 'error',
      // eslint-disable-next-line sort-keys
      'no-var': 'error',
      // eslint-disable-next-line sort-keys
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
]);
