module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],

  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json"
    }
  }
};
