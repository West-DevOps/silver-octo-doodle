import type { JestConfigWithTsJest } from 'ts-jest'


const jestConfig : JestConfigWithTsJest = {
  bail: true,
  verbose: true,
  collectCoverage: false,
  modulePathIgnorePatterns: [
    'node_modules/',
    'dist/'
  ],
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
}

export default jestConfig
