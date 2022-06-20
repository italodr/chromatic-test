module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  clearMocks: true,
  coverageDirectory: '.coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx,mdx}',
    '!src/**/index.ts',
    '!**/.coverage/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/public/vendor/**',
    '!**/tests/**',
    '!**/{jest,prettier}.config.js'
  ],
  moduleNameMapper: {
    '^@components': '<rootDir>/src/components',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest'],
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.storybook/',
    '<rootDir>/.turbo/',
    '<rootDir>/lib/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
