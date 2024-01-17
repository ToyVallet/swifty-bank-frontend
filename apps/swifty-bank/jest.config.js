const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: 'src',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
