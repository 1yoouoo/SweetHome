/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export const preset = "ts-jest";
export const testEnvironment = "jsdom";
export const setupFilesAfterEnv = ["<rootDir>/setupTest.js"];
export const globals = {
  "ts-jest": {
    tsconfig: "tsconfig.jest.json", // tsconfig.jest.json 사용 설정
  },
};
