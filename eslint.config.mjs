// eslint.config.mjs
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import jestPlugin from 'eslint-plugin-jest'

export default [
  // Fichiers à ignorer
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**'],
  },

  // Règles pour les fichiers TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // si tu veux utiliser le type-check ESLint, tu peux ajouter :
        // project: './tsconfig.json'
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      jest: jestPlugin,
    },
    rules: {
      // Reco TypeScript
      ...tsPlugin.configs.recommended.rules,
      // Reco Jest
      ...jestPlugin.configs.recommended.rules,
      // Tes réglages custom
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
]
