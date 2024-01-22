import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: 'src',
})
 
const config: Config = {
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
export default createJestConfig(config)
