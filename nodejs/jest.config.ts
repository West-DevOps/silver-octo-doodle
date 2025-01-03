import type { JestConfigWithTsJest } from 'ts-jest'


const jestConfig : JestConfigWithTsJest = {
  bail: true,
  verbose: true,
  collectCoverage: true,
  testTimeout: 10000,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['\\.d\\.ts$'],
  modulePathIgnorePatterns: [
    'node_modules/',
    'dist/'
  ],
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
}

export default jestConfig
