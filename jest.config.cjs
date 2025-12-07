/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // 👉 Ne lance que les fichiers .test.ts
  testMatch: ['**/*.test.ts'],
  // 👉 Utilise ts-jest pour tous les fichiers TS
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  // 👉 Ignore les tests compilés dans dist
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
